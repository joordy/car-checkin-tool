// React imports
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import supabase from 'db/supabase.js'
import * as Styles from './deposit.styles.js'

// Components
import { StepsExplainer, UserChoice, DepositForm } from 'components/organisms/index'

// React component
const Deposit = () => {
    const [currentReservation, setCurrentReservation] = useState(null)
    const [loadingData, setLoadingData] = useState(false)
    const [completedSteps, setCompletedSteps] = useState()

    const getData = async () => {
        try {
            const data = await axios
                .get(`${process.env.REACT_APP_BACKEND}/order-details`)
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
                            backLink="/verification"
                            step="2"
                            completedSteps={completedSteps}
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
                        />
                        <DepositForm currentReservation={currentReservation} />
                    </>
                ) : (
                    <>
                        <StepsExplainer backLink="/verification" step="2" />
                    </>
                )}
            </div>
        </Styles.Main>
    )
}

export default Deposit
