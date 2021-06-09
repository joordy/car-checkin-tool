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
            const data = await axios
                .get(`${process.env.REACT_APP_BACKEND}/order-details`)
                .then((res) => {
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

    console.log('currentReservation', currentReservation)

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
                            reservation={currentReservation}
                            loading={loadingData}
                        />
                        <CheckUserInfo reservation={currentReservation} />
                        <CheckBookingInfo reservation={currentReservation.car} />
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
