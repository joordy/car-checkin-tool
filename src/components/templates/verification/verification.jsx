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
    const [testing, setTesting] = useState()

    const getData = async () => {
        try {
            const data = await axios.get(`/api/order-details`).then((res) => {
                console.log('res.data', res)
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
    console.log('TESR', testing)

    let steps = []
    let frames = 0

    const frameStepsRight = [
        0, -100, -200, -300, -400, -500, -600, -700, -800, -900, -1000, -1100, -1200, -1300, -1400,
        -1500,
    ]
    const frameStepsLeft = [
        -200, -300, -400, -500, -600, -700, -800, -900, -1000, -1100, -1200, -1300, -1400, -1500,
    ]

    if (loadingData && currentReservation) {
        const drivers = Object.keys(currentReservation.car).filter((str) => str.includes('driver'))

        drivers.forEach((person, index) => {
            const { role, driver, method, verified } = currentReservation.car[person]
            if (!verified && method != 'location') {
                console.log(index, drivers.length - 1)
                steps.push(
                    <React.Fragment key={person}>
                        <CheckDrivers
                            reservation={currentReservation}
                            setTesting={setTesting}
                            movingRight={frameStepsRight[frames]}
                            movingLeft={frameStepsLeft[frames]}
                        />
                        <UserChoice
                            title={
                                role == 'extra'
                                    ? `Verifieer het rijbewijs van ${driver}`
                                    : 'Verifieer je eigen rijbewijs'
                            }
                            text="We zijn verplicht om te controleren of je een geldig rijbwijs hebt. Je kunt dit nu direct online doen of later bij de Europcar locatie. Nu doen is snel en veilig."
                            labelText={
                                role == 'extra'
                                    ? `Wanneer wil je het rijbewijs van ${driver} laten verifieren?`
                                    : 'Wanneer wil je je eigen rijbewijs laten verifieren?'
                            }
                            oneTitle="Nu, online"
                            oneText="Dit is de snelste optie"
                            twoTitle="Ter plekke"
                            twoText="Bij de Europcar locatie"
                            threeTitle="Stap voor nu overslaan"
                            threeText="Je kunt later alsnog een keuze maken."
                            movingRight={frameStepsRight[frames + 1]}
                            movingLeft={frameStepsLeft[frames + 1]}
                        />
                        <CheckIdentity
                            movingRight={frameStepsRight[frames + 2]}
                            movingLeft={frameStepsLeft[frames + 2]}
                        />
                        <CheckFacial
                            movingRight={frameStepsRight[frames + 3]}
                            movingLeft={
                                index == drivers.length - 1 ? 'last' : frameStepsLeft[frames + 3]
                            }
                        />
                    </React.Fragment>,
                )
                frames += 4
            }
        })
    }

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
                        {steps}
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
