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
    const [currentReservation, setCurrentReservation] = useState(null)
    const [makeChoice, setMakeChoice] = useState(false)
    const [loadingData, setLoadingData] = useState(false)

    const verifyIdentity = async () => {
        const data = await fetch(`/api/create-verification-session`)
        const items = await data.json()
        setItems(items)
    }

    const getData = async () => {
        try {
            const data = await axios.get(`/api/order-details`).then((res) => {
                console.log('res.data', res)
                setCurrentReservation(res.data)
                setLoadingData(true)
            })
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

    console.log('TESR', makeChoice)
    console.log('Verification currentReservation data', currentReservation)

    let steps = []

    const frameStepsRight = [
        0, -100, -200, -300, -400, -500, -600, -700, -800, -900, -1000, -1100, -1200, -1300, -1400,
        -1500,
    ]
    const frameStepsLeft = [
        -200, -300, -400, -500, -600, -700, -800, -900, -1000, -1100, -1200, -1300, -1400, -1500,
    ]

    // // If data loaded
    // if (loadingData && currentReservation) {
    //     steps.push(
    //         <CheckDrivers
    //             key={steps.length + 1}
    //             reservation={currentReservation}
    //             setMakeChoice={setMakeChoice}
    //             movingRight={frameStepsRight[steps.length]}
    //             movingLeft={frameStepsLeft[steps.length]}
    //         />,
    //     )
    // }

    // const validateChoice = (makeChoice) => {
    //     if (makeChoice) {
    //         console.log('helemaal true')
    //         makeChoice.forEach((element) => {
    //             steps.push(
    //                 <UserChoice
    //                     key={steps.length + 1}
    //                     title={
    //                         element.role == 'extra'
    //                             ? `Verifieer het rijbewijs van ${element.driver}`
    //                             : 'Verifieer je eigen rijbewijs'
    //                     }
    //                     text="We zijn verplicht om te controleren of je een geldig rijbwijs hebt. Je kunt dit nu direct online doen of later bij de Europcar locatie. Nu doen is snel en veilig."
    //                     labelText={
    //                         element.role == 'extra'
    //                             ? `Wanneer wil je het rijbewijs van ${element.driver} laten verifieren?`
    //                             : 'Wanneer wil je je eigen rijbewijs laten verifieren?'
    //                     }
    //                     oneTitle="Nu, online"
    //                     oneText="Dit is de snelste optie"
    //                     twoTitle="Ter plekke"
    //                     twoText="Bij de Europcar locatie"
    //                     threeTitle="Stap voor nu overslaan"
    //                     threeText="Je kunt later alsnog een keuze maken."
    //                     movingRight={frameStepsRight[steps.length]}
    //                     movingLeft={frameStepsLeft[steps.length]}
    //                     setMakeChoice={setMakeChoice}
    //                     makeChoice={makeChoice}
    //                     last={element.last}
    //                 />,
    //             )
    //         })
    //     }
    // }

    //    drivers.forEach((person, index) => {
    //         const { role, driver, method, verified } = currentReservation.car[person]
    //         if (!verified) {
    //             console.log(index, drivers.length - 1)
    //             steps.push(
    //                 // <React.Fragment key={person}>
    //                 //     <CheckDrivers
    //                 //         reservation={currentReservation}
    //                 //         setTesting={setTesting}
    //                 //         movingRight={frameStepsRight[frames]}
    //                 //         movingLeft={frameStepsLeft[frames]}
    //                 //     />
    //                 //     <UserChoice
    //                 //         title={role == 'extra' ? `Verifieer het rijbewijs van ${driver}` : 'Verifieer je eigen rijbewijs'}
    //                 //         text="We zijn verplicht om te controleren of je een geldig rijbwijs hebt. Je kunt dit nu direct online doen of later bij de Europcar locatie. Nu doen is snel en veilig."
    //                 //         labelText={
    //                 //             role == 'extra'
    //                 //                 ? `Wanneer wil je het rijbewijs van ${driver} laten verifieren?`
    //                 //                 : 'Wanneer wil je je eigen rijbewijs laten verifieren?'
    //                 //         }
    //                 //         oneTitle="Nu, online"
    //                 //         oneText="Dit is de snelste optie"
    //                 //         twoTitle="Ter plekke"
    //                 //         twoText="Bij de Europcar locatie"
    //                 //         threeTitle="Stap voor nu overslaan"
    //                 //         threeText="Je kunt later alsnog een keuze maken."
    //                 //         movingRight={frameStepsRight[frames + 1]}
    //                 //         movingLeft={frameStepsLeft[frames + 1]}
    //                 //         reservation={currentReservation}
    //                 //     />
    //                 //     <CheckIdentity
    //                 //         movingRight={frameStepsRight[frames + 2]}
    //                 //         movingLeft={frameStepsLeft[frames + 2]}
    //                 //     />
    //                 //     <CheckFacial
    //                 //         movingRight={frameStepsRight[frames + 3]}
    //                 //         movingLeft={
    //                 //             index == drivers.length - 1 ? 'last' : frameStepsLeft[frames + 3]
    //                 //         }
    //                 //     />
    //                 // </React.Fragment>,
    //             )
    //             frames += 4
    //         }
    //     })

    console.log('verification.jsx current reservation', currentReservation)

    // const RenderedComponent = (user) => {
    //     if (currentReservation.car.driverOne.verified === false) {
    //         ;<>
    //             <UserChoice
    //                 title={`Verifieer je eigen rijbewijs`}
    //                 text="We zijn verplicht om te controleren of je een geldig rijbwijs hebt. Je kunt dit nu direct online doen of later bij de Europcar locatie. Nu doen is snel en veilig."
    //                 labelText={'Wanneer wil je je eigen rijbewijs laten verifieren?'}
    //                 oneTitle="Nu, online"
    //                 oneText="Dit is de snelste optie"
    //                 twoTitle="Ter plekke"
    //                 twoText="Bij de Europcar locatie"
    //                 threeTitle="Stap voor nu overslaan"
    //                 threeText="Je kunt later alsnog een keuze maken."
    //                 movingRight={-100}
    //                 movingLeft={-300}
    //                 reservation={currentReservation}
    //                 user={currentReservation.car.driverOne}
    //             />
    //             <CheckIdentity movingRight={-200} movingLeft={-400} />
    //             <CheckFacial movingRight={-300} movingLeft={-500} />
    //         </>
    //     } else if (
    //         currentReservation.car.driverOne.verified === true &&
    //         currentReservation.car.driverTwo.verified === false
    //     ) {
    //         ;<>
    //             <UserChoice
    //                 title={`Verifieer het rijbewijs van ${currentReservation.car.driverTwo}`}
    //                 text="We zijn verplicht om te controleren of je een geldig rijbwijs hebt. Je kunt dit nu direct online doen of later bij de Europcar locatie. Nu doen is snel en veilig."
    //                 labelText={`Wanneer wil je het rijbewijs van ${currentReservation.car.driverTwo} laten verifieren?`}
    //                 oneTitle="Nu, online"
    //                 oneText="Dit is de snelste optie"
    //                 twoTitle="Ter plekke"
    //                 twoText="Bij de Europcar locatie"
    //                 threeTitle="Stap voor nu overslaan"
    //                 threeText="Je kunt later alsnog een keuze maken."
    //                 movingRight={-100}
    //                 movingLeft={-300}
    //                 reservation={currentReservation}
    //                 user={currentReservation.car.driverTwo}
    //             />
    //             <CheckIdentity movingRight={-200} movingLeft={-400} />
    //             <CheckFacial movingRight={-300} movingLeft={-500} />
    //         </>
    //     } else if (
    //         currentReservation.car.driverOne.verified &&
    //         currentReservation.car.driverTwo.verified &&
    //         !currentReservation.car.driverThree.verified
    //     ) {
    //         return (
    //             <>
    //                 <UserChoice
    //                     title={`Verifieer het rijbewijs van ${currentReservation.car.driverThree}`}
    //                     text="We zijn verplicht om te controleren of je een geldig rijbwijs hebt. Je kunt dit nu direct online doen of later bij de Europcar locatie. Nu doen is snel en veilig."
    //                     labelText={`Wanneer wil je het rijbewijs van ${currentReservation.car.driverThree} laten verifieren?`}
    //                     oneTitle="Nu, online"
    //                     oneText="Dit is de snelste optie"
    //                     twoTitle="Ter plekke"
    //                     twoText="Bij de Europcar locatie"
    //                     threeTitle="Stap voor nu overslaan"
    //                     threeText="Je kunt later alsnog een keuze maken."
    //                     movingRight={-100}
    //                     movingLeft={-300}
    //                     reservation={currentReservation}
    //                     user={currentReservation.car.driverThree}
    //                 />
    //                 <CheckIdentity movingRight={-200} movingLeft={-400} />
    //                 <CheckFacial movingRight={-300} movingLeft={-500} />
    //             </>
    //         )
    //     }
    // }

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
                        <CheckDrivers
                            reservation={currentReservation}
                            movingRight={0}
                            movingLeft={-200}
                        />
                        {(() => {
                            if (!currentReservation.car.driverOne.verified) {
                                console.log('http://www.hva.nl/uitschrijven')
                                return <div>You are a Admin.</div>
                            } else if (
                                currentReservation.car.driverOne.verified &&
                                !currentReservation.car.driverTwo.verified
                            ) {
                                return <div>You are a Manager.</div>
                            } else {
                                return <div>You are a User.</div>
                            }
                        })()}
                        {/* <RenderedComponent /> */}
                        {/* <UserChoice
                            title={'TEST'}
                            text="We zijn verplicht om te controleren of je een geldig rijbwijs hebt. Je kunt dit nu direct online doen of later bij de Europcar locatie. Nu doen is snel en veilig."
                            labelText={'LABEL'}
                            oneTitle="Nu, online"
                            oneText="Dit is de snelste optie"
                            twoTitle="Ter plekke"
                            twoText="Bij de Europcar locatie"
                            threeTitle="Stap voor nu overslaan"
                            threeText="Je kunt later alsnog een keuze maken."
                            movingRight={-100}
                            movingLeft={-300}
                            reservation={currentReservation}
                        />
                        <CheckIdentity movingRight={-200} movingLeft={-400} />
                        <CheckFacial movingRight={-300} movingLeft={-500} /> */}
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
