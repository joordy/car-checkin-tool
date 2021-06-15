// React & Modules imports
import { useState, useEffect } from 'react'
import axios from 'axios'
import supabase from 'db/supabase.js'
import * as Styles from './orderDetails.styles.js'
import { updateDBwithMethod } from 'db/updateDatabase.js'

// Components
import { StepsExplainer, CheckUserInfo, CheckBookingInfo } from 'components/organisms/index'

// React component
const OrderDetails = () => {
    const [currentReservation, setCurrentReservation] = useState(null)
    const [loadingData, setLoadingData] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    const [currentKey, setCurrentKey] = useState(null)

    const getData = async () => {
        try {
            const data = await axios.get(`/api/order-details`).then((res) => {
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
                            backLink="/reservations"
                            step="0"
                            loading={loadingData}
                            reservation={currentReservation}
                            carkey={currentKey}
                            loggedinUser={currentUser}
                        />
                        <CheckUserInfo
                            reservation={currentReservation}
                            carkey={currentKey}
                            loggedinUser={currentUser}
                        />
                        <CheckBookingInfo
                            reservation={currentReservation}
                            carkey={currentKey}
                            loggedinUser={currentUser}
                        />
                    </>
                ) : (
                    <>
                        <StepsExplainer backLink="/reservations" step="0" loading={loadingData} />{' '}
                    </>
                )}
            </div>
        </Styles.Main>
    )
}

export default OrderDetails
