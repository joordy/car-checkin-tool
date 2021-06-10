// React & Module imports
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import supabase from 'db/supabase.js'
import * as Styles from './qrCode.styles.js'

// Components
import { StepsExplainer, ShowQRCode } from 'components/organisms/index'

// React component
const QRCode = () => {
    const [currentReservation, setCurrentReservation] = useState(null)
    const [loadingData, setLoadingData] = useState(false)
    const [completedSteps, setCompletedSteps] = useState()

    const getData = async () => {
        try {
            const data = await axios
                .get(`${process.env.REACT_APP_BACKEND}/api/order-details`)
                .then((res) => {
                    setCurrentReservation(res.data)
                    setCompletedSteps({
                        orderDetails: res.data.orderDetails,
                        verificationProcess: res.data.verificationProcess,
                        payMethod: res.data.paidDeposit.method,
                        paidDeposit: res.data.paidDeposit.paid,
                    })
                })
            setLoadingData(true)
        } catch (e) {
            console.log(e)
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
                            backLink="/deposit"
                            loading={loadingData}
                            reservation={currentReservation}
                        />
                        <ShowQRCode title="Reservering 1234" />
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
