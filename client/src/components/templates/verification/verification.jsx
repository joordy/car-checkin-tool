// React & Module imports
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import supabase from 'db/supabase.js'
import * as Styles from './verification.styles.js'

// Components
import {
    StepsExplainer,
    CheckDrivers,
    UserChoice,
    CheckIdentity,
    CheckFacial,
} from 'components/organisms/index'

// React component
const Verification = () => {
    // const getSpecificUser = async (fetchedData) => {
    //     const { data, error } = await supabase
    //         .from('users')
    //         .select()
    //         .eq('userID', fetchedData.user.userID)
<<<<<<< HEAD
=======

>>>>>>> 4ad927893673caee0eaed6e239b686ea7b17e5ec
    //     if (!data) {
    //         console.log(error)
    //     } else {
    //         setCurrentUser(...data)
    //         setReservationID(fetchedData.reservationID)
    //     }
    // }

    const verifyIdentity = async () => {
        const data = await fetch(`/api/create-verification-session`)
        const items = await data.json()
        setItems(items)
    }

    const [currentReservation, setCurrentReservation] = useState(null)
    const [loadingData, setLoadingData] = useState(false)
    const [completedSteps, setCompletedSteps] = useState()

    const getData = async () => {
        try {
            const data = await axios
                .get(`${process.env.REACT_APP_BACKEND}/order-details`)
                .then((res) => {
                    console.log('res.data', res.data)
                    setCurrentReservation(res.data)
                    setCompletedSteps({
                        orderDetails: res.data.car.orderDetails,
                        verificationProcess: res.data.car.verificationProcess,
                        payMethod: res.data.car.paidDeposit.method,
                        paidDeposit: res.data.car.paidDeposit.paid,
                    })
                })
            setLoadingData(true)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData()
        verifyIdentity()
    }, [])

    let viewportHeight = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${viewportHeight}px`)

    console.log(currentReservation)
    console.log(completedSteps)

    return (
        <Styles.Main className="page">
            <div className="stepsWrapper">
                {loadingData ? (
                    <>
                        <StepsExplainer
                            backLink="/order-details"
                            loading={loadingData}
                            reservation={currentReservation}
                        />
                        <CheckDrivers />
                        <UserChoice
                            title="Verifieer je eigen rijbewijs"
                            text="We zijn verplicht om te controleren of je een geldig rijbwijs hebt. Je kunt dit nu direct online doen of later bij de Europcar locatie. Nu doen is snel en veilig."
                            labelText="Wanneer wil je je eigen rijbewijs laten verifieren?"
                            oneTitle="Nu, online"
                            oneText="Dit is de snelste optie"
                            twoTitle="Ter plekke"
                            twoText="Bij de Europcar locatie"
                            threeTitle="Stap voor nu overslaan"
                            threeText="Je kunt later alsnog een keuze maken."
                            movingRight="-100vw"
                            movingLeft="-300vw"
                        />
                        <CheckIdentity />
                        <CheckFacial />
                    </>
                ) : (
                    <>
                        <StepsExplainer loading={loadingData} backLink="/order-details" />
                    </>
                )}
            </div>
        </Styles.Main>
    )
}

export default Verification
