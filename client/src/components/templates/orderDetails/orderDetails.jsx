// React & Modules imports
import { useState, useEffect } from 'react'
import axios from 'axios'
import * as Styles from './orderDetails.styles.js'

// Components
import { StepsExplainer, CheckUserInfo, CheckBookingInfo } from 'components/organisms/index'

// React component
const OrderDetails = () => {
    const [currentReservation, setCurrentReservation] = useState(null)
    const [loadingData, setLoadingData] = useState(false)

    const getData = async () => {
        try {
            const data = await axios.get(`/api/order-details`).then((res) => {
                setCurrentReservation(res.data)
            })
            setLoadingData(true)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData()
    }, [])

<<<<<<< HEAD
    console.log(currentReservation)
=======
    console.log('currentReservation', currentReservation)
>>>>>>> 4ad927893673caee0eaed6e239b686ea7b17e5ec

    let viewportHeight = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${viewportHeight}px`)

    return (
        <Styles.Main className="page">
            <div className="stepsWrapper">
                {loadingData ? (
                    <>
<<<<<<< HEAD
                        <StepsExplainer backLink="/reservations" step="0" />
                        <CheckUserInfo userInfo={currentReservation} />
                        <CheckBookingInfo reservation={currentReservation} />
=======
                        <StepsExplainer
                            backLink="/reservations"
                            step="0"
                            reservation={currentReservation}
                            loading={loadingData}
                        />
                        <CheckUserInfo reservation={currentReservation} />
                        <CheckBookingInfo reservation={currentReservation.car} />
>>>>>>> 4ad927893673caee0eaed6e239b686ea7b17e5ec
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
