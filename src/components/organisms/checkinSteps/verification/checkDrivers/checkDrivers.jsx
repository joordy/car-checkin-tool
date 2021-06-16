// React imports
import { useState, useEffect } from 'react'
import axios from 'axios'
import supabase from 'db/supabase.js'
import * as Styles from './checkDrivers.styles.js'
import { updateDBwithVerifiedProcess } from 'db/updateDatabase'

// Componenten
import { Label } from 'components/atoms/index'
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

    const moveLeft = async () => {
        const moveElement = document.querySelector('.stepsWrapper')
        if (typeof props.movingLeft === 'string') {
            const { data, error } = await supabase
                .from('users')
                .select()
                .eq('userID', props.loggedinUser.userID)
            if (!data) {
                console.log(error)
            } else {
                if (props.carkey === 0) {
                    await updateSpecificUser(
                        props.carkey,
                        props.loggedinUser.userID,
                        data[0].carResOne,
                    )
                } else if (props.carkey === 1) {
                    await updateSpecificUser(
                        props.carkey,
                        props.loggedinUser.userID,
                        data[0].carResTwo,
                    )
                } else if (props.carkey === 2) {
                    await updateSpecificUser(
                        props.carkey,
                        props.loggedinUser.userID,
                        data[0].carResThree,
                    )
                }

                window.location.href = `${props.movingLeft}`
            }
        } else {
            moveElement.style.transform = `translateX(${props.movingLeft}vw)`
        }
    }

    const getData = async () => {
        try {
            const data = await axios
                .get(`https://us-central1-car-check-in.cloudfunctions.net/app/api/order-details`)
                .then((res) => {
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
        console.log('reservationData', reservationData)
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

    const updateSpecificUser = async (index, userID, currentUserDB) => {
        const stateOne =
            props.reservation.driverOne &&
            !props.reservation.driverTwo &&
            !props.reservation.driverThree
        const stateTwo =
            props.reservation.driverOne &&
            props.reservation.driverTwo &&
            !props.reservation.driverThree
        const stateThree =
            props.reservation.driverOne &&
            props.reservation.driverTwo &&
            props.reservation.driverThree

        const updateWithSettings = () => {
            if (stateOne) {
                return updateDBwithVerifiedProcess('oneDriver', props.reservation, currentUserDB)
            } else if (stateTwo) {
                return updateDBwithVerifiedProcess('twoDrivers', props.reservation, currentUserDB)
            } else if (stateThree) {
                return updateDBwithVerifiedProcess('threeDrivers', props.reservation, currentUserDB)
            }
        }

        if (index === 0) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResOne: updateWithSettings() })
                .eq('userID', userID)
            if (!data) {
                console.log(error)
            }
        } else if (index === 1) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResTwo: updateWithSettings() })
                .eq('userID', userID)
            if (!data) {
                console.log(error)
            }
        } else if (index === 2) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResThree: updateWithSettings() })
                .eq('userID', userID)
            if (!data) {
                console.log(error)
            }
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
                    We zijn verplicht om te controleren of alle bestuurders een geldig rijbewijs
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
