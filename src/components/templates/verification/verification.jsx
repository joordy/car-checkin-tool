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
    const verifyIdentity = async () => {
        const data = await fetch(`/api/create-verification-session`)
        const items = await data.json()
        setItems(items)
    }

    const [currentReservation, setCurrentReservation] = useState(null)
    const [loadingData, setLoadingData] = useState(false)
    const [makeChoice, setMakeChoice] = useState(false)

    const getData = async () => {
        try {
            const data = await axios.get(`/api/order-details`).then((res) => {
                console.log('res.data', res)
                setCurrentReservation(res.data)
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
    console.log('TESR', makeChoice)

    let steps = []

    const frameStepsRight = [
        0, -100, -200, -300, -400, -500, -600, -700, -800, -900, -1000, -1100, -1200, -1300, -1400,
        -1500,
    ]
    const frameStepsLeft = [
        -200, -300, -400, -500, -600, -700, -800, -900, -1000, -1100, -1200, -1300, -1400, -1500,
    ]

    // If data loaded
    if (loadingData && currentReservation) {
        steps.push(
            <CheckDrivers
                key={steps.length + 1}
                reservation={currentReservation}
                setMakeChoice={setMakeChoice}
                movingRight={frameStepsRight[steps.length]}
                movingLeft={frameStepsLeft[steps.length]}
            />,
        )
    }

    if (makeChoice) {
        console.log('helemaal true')
        makeChoice.forEach((element) => {
            steps.push(
                <UserChoice
                    key={steps.length + 1}
                    title={
                        element.role == 'extra'
                            ? `Verifieer het rijbewijs van ${element.driver}`
                            : 'Verifieer je eigen rijbewijs'
                    }
                    text="We zijn verplicht om te controleren of je een geldig rijbwijs hebt. Je kunt dit nu direct online doen of later bij de Europcar locatie. Nu doen is snel en veilig."
                    labelText={
                        element.role == 'extra'
                            ? `Wanneer wil je het rijbewijs van ${element.driver} laten verifieren?`
                            : 'Wanneer wil je je eigen rijbewijs laten verifieren?'
                    }
                    oneTitle="Nu, online"
                    oneText="Dit is de snelste optie"
                    twoTitle="Ter plekke"
                    twoText="Bij de Europcar locatie"
                    threeTitle="Stap voor nu overslaan"
                    threeText="Je kunt later alsnog een keuze maken."
                    movingRight={frameStepsRight[steps.length]}
                    movingLeft={frameStepsLeft[steps.length]}
                    setMakeChoice={setMakeChoice}
                    makeChoice={makeChoice}
                    last={element.last}
                />,
            )
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
