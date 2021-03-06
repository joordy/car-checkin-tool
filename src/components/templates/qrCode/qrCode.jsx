// React & Module imports
import { useState, useEffect } from 'react'
import axios from 'axios'
import supabase from 'db/supabase.js'
import * as Styles from './qrCode.styles.js'

// Components
import { StepsExplainer, ShowQRCode } from 'components/organisms/index'

// React component
const QRCode = () => {
    const [currentReservation, setCurrentReservation] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)
    const [currentKey, setCurrentKey] = useState(false)
    const [loadingData, setLoadingData] = useState(false)

    // Get data about the loged-in user from the server
    const getData = async () => {
        try {
            const data = await axios
                .get(`https://us-central1-car-check-in.cloudfunctions.net/app/api/order-details`)
                .then((res) => {
                    if (res.data) {
                        const index = res.data.carkey
                        const userID = res.data.user.userID
                        setCurrentKey(res.data.carkey)
                        getSpecificReservation(userID, index)
                    }
                })
        } catch (e) {
            console.log(e)
        }
    }

    // Get the reservation & user data from Supabase
    async function getSpecificReservation(userID, index) {
        if (index == 0) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                await setCurrentUser(data[0])
                await setCurrentReservation(data[0].carResOne)
                await setLoadingData(true)
            }
        } else if (index == 1) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                await setCurrentUser(data[0])
                await setCurrentReservation(data[0].carResTwo)
                await setLoadingData(true)
            }
        } else if (index == 2) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                await setCurrentUser(data[0])
                await setCurrentReservation(data[0].carResThree)
                await setLoadingData(true)
            }
        }
    }

    // Get the data when component is mounted
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
                            backLink="/deposit"
                            loading={loadingData}
                            reservation={currentReservation}
                        />
                        <ShowQRCode
                            reservation={currentReservation}
                            user={currentUser}
                            carKey={currentKey}
                        />
                    </>
                ) : (
                    <>
                        <StepsExplainer backLink="/deposit" step="3" />
                    </>
                )}
            </div>
        </Styles.Main>
    )
}

export default QRCode
