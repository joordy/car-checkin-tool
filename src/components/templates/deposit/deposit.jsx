// React imports
import { useState, useEffect } from 'react'
import axios from 'axios'
import supabase from 'db/supabase.js'
import * as Styles from './deposit.styles.js'

// Components
import { StepsExplainer, UserChoice, DepositForm } from 'components/organisms/index'

// React component
const Deposit = () => {
    const [currentReservation, setCurrentReservation] = useState(null)
    const [loadingData, setLoadingData] = useState(false)
    const [makeChoice, setMakeChoice] = useState(false)
    const [dbData, setDBdata] = useState([])
    const [carDrivers, setCarDrivers] = useState([])
    const [currentUser, setCurrentUser] = useState(null)
    const [currentKey, setCurrentKey] = useState(null)

    const getData = async () => {
        try {
            const data = await axios.get(`/api/order-details`).then((res) => {
                console.log(res.data)
                if (res.data) {
                    const index = res.data.carkey
                    const userID = res.data.user.userID
                    setCurrentUser(res.data.user)
                    setCurrentKey(res.data.carkey)
                    getSpecificReservation(userID, index)
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    async function getSpecificReservation(userID, index) {
        if (index == 0) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                await setCurrentReservation(data[0].carResOne)
                await setLoadingData(true)
            }
        } else if (index == 1) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                await setCurrentReservation(data[0].carResTwo)
                await setLoadingData(true)
            }
        } else if (index == 2) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                await setCurrentReservation(data[0].carResThree)
                await setLoadingData(true)
            }
        }
    }

    useEffect(() => {
        getData()
    }, [])

    let viewportHeight = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${viewportHeight}px`)

    return (
        <Styles.Main className="page">
            <div className="stepsWrapper">
                {loadingData ? (
                    <>
                        <StepsExplainer
                            backLink="/verification"
                            step="2"
                            loading={loadingData}
                            reservation={currentReservation}
                            carkey={currentKey}
                            loggedinUser={currentUser}
                        />
                        <UserChoice
                            title="Borg reservering"
                            text="De borg is voor ons een garantie dat je voorzichtig met je huurauto omgaat. De borg krijg je weer terug wanneer je geen schade hebt gemaakt aan de auto."
                            labelText="Hoe wil je de borg betalen?"
                            oneTitle="Nu, via een reservering op je creditcard of via iDEAL"
                            oneText="Dit is de snelste optie"
                            twoTitle="Ter plekke, op de Europcar locatie"
                            twoText="Via creditcard, PIN of contant."
                            threeTitle="Stap voor nu overslaan"
                            threeText="Je kunt later alsnog een keuze maken."
                            deposit={currentReservation.rentPrice}
                            movingRight="0vw"
                            movingLeft="-200vw"
                            reservation={currentReservation}
                            carkey={currentKey}
                            loggedinUser={currentUser}
                        />
                        <DepositForm
                            reservation={currentReservation}
                            carkey={currentKey}
                            loggedinUser={currentUser}
                        />
                    </>
                ) : (
                    <>
                        <StepsExplainer backLink="/verification" loading={loadingData} />
                    </>
                )}
            </div>
        </Styles.Main>
    )
}

export default Deposit
