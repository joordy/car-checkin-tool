// React imports
import { useState, useEffect } from 'react'
import axios from 'axios'
import supabase from 'db/supabase.js'
import * as Styles from './checkDrivers.styles.js'

// Componenten
import { Icons, Label, ButtonPrimary } from 'components/atoms/index'
import { VerificationButtons, DriverListItem } from 'components/molecules/index'

// React component
const CheckDrivers = (props) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [carDrivers, setCarDrivers] = useState([])
    const [loadingData, setLoadingData] = useState(false)

    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = `translateX(${props.movingRight}vw)`
    }

    const moveLeft = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = `translateX(${props.movingLeft}vw)`
    }

    const getData = async () => {
        try {
            const data = await axios.get(`/api/order-details`).then((res) => {
                setCurrentUser(res.data.user)
                if (res.data) {
                    const index = res.data.carkey
                    const userID = res.data.user.userID
                    getSpecificUser(userID, index)
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    const getSpecificUser = async (userID, index) => {
        if (index == 0) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                getAllDrivers(data[0].carResOne)
            }
        } else if (index == 1) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                getAllDrivers(data[0].carResTwo)
            }
        } else if (index == 2) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                getAllDrivers(data[0].carResThree)
            }
        } else {
        }
    }

    const getAllDrivers = (reservationData) => {
        let arr = []

        if (reservationData) {
            Object.keys(reservationData).forEach((key) => {
                if (key.includes('driver')) {
                    arr.push(reservationData[key])
                }
            })
            setCarDrivers(arr)
            setLoadingData(true)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const RenderedComponent = (elem) => {
        if (!elem.user.verified && elem.user.method != 'skip' && elem.user.method != 'location') {
            return (
                <DriverListItem
                    key={elem.user.driver}
                    name={elem.user.driver}
                    subText={elem.user.role == 'extra' ? 'Extra bestuurder' : 'Hoofdbestuurder'}
                />
            )
        } else if (!elem.user.verified && elem.user.method == 'skip') {
            return <DriverListItem key={elem.user.driver} name={elem.user.driver} type="skiped" />
        } else if (!elem.user.verified && elem.user.method == 'location') {
            return <DriverListItem key={elem.user.driver} name={elem.user.driver} type="location" />
        } else if (elem.user.verified) {
            return <DriverListItem key={elem.user.driver} name={elem.user.driver} type="verified" />
        }
    }
    return (
        <Styles.Section id="facial">
            <header>
                <h1>Verifieer rijbewijzen</h1>
                <p>
                    We zijn verplicht om te controleren of alle bestuurders een geldig rijbwijs
                    hebben. Je kunt de rijbewijzen hier online veilig en gemakkelijk verifiëren.
                </p>
            </header>
            <section>
                <Label text="Te verifiëren bestuurders" />
                <ol>
                    {!loadingData ? (
                        <p> Loading ...</p>
                    ) : (
                        <>
                            {carDrivers.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <RenderedComponent user={item} />
                                    </div>
                                )
                            })}
                        </>
                    )}
                </ol>
            </section>
            <VerificationButtons
                typeSecondary="btn"
                typePrimary="btn"
                textPrimary="Volgende"
                textSecondary="Terug"
                linkPrimary="#"
                linkSecondary="#"
                callbackSecondary={moveRight}
                callbackPrimary={moveLeft}
            />
        </Styles.Section>
    )
}

export default CheckDrivers
