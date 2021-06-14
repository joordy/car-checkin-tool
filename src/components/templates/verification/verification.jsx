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
    const [dbData, setDBdata] = useState([])
    const [carDrivers, setCarDrivers] = useState([])
    const [loadingData, setLoadingData] = useState(false)

    const verifyIdentity = async () => {
        const data = await fetch(`/api/create-verification-session`)
        const items = await data.json()
        setItems(items)
    }

    const getData = async () => {
        try {
            const data = await axios.get(`/api/order-details`).then((res) => {
                setCurrentReservation(res.data)
                setLoadingData(true)
            })
        } catch (e) {
            console.log(e)
        }
    }

    const getSpecificUser = async (userID, index) => {
        if (index == 0) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                setDBdata(data[0].carResOne)
            }
        } else if (index == 1) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                setDBdata(data[0].carResTwo)
            }
        } else if (index == 2) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                setDBdata(data[0].carResThree)
            }
        } else {
            console.log('not existing')
        }
    }

    useEffect(() => {
        getData()
        verifyIdentity()
    }, [])

    let viewportHeight = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${viewportHeight}px`)

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
                                return (
                                    <>
                                        <UserChoice
                                            thisUser={{
                                                driverOne: currentReservation.car.driverOne,
                                            }}
                                            title={'Verifieeer je eigen rijbewijs'}
                                            text="We zijn verplicht om te controleren of je een geldig rijbewijs hebt. Je kunt dit nu direct online doen of later bij de Europcar locatie. Nu doen is snel en veilig."
                                            labelText={`Wanneer wil je je eigen rijbewijs verifieren?`}
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
                                        <CheckIdentity
                                            thisUser={{
                                                driverOne: currentReservation.car.driverOne,
                                            }}
                                            movingRight={-200}
                                            movingLeft={-400}
                                            reservation={currentReservation}
                                        />
                                        <CheckFacial
                                            thisUser={{
                                                driverOne: currentReservation.car.driverOne,
                                            }}
                                            movingRight={-300}
                                            movingLeft={-500}
                                            reservation={currentReservation}
                                        />
                                    </>
                                )
                                // return <div>Gebruiker 1 moet zich identificeren.</div>
                            } else if (
                                currentReservation.car.driverOne.verified &&
                                !currentReservation.car.driverTwo.verified
                            ) {
                                return (
                                    <>
                                        <UserChoice
                                            thisUser={{
                                                driverThree: currentReservation.car.driverThree,
                                            }}
                                            title={`Verifieer het  rijbewijs van ${currentReservation.car.driverOne.driverTwo}`}
                                            text="We zijn verplicht om te controleren of je een geldig rijbewijs hebt. Je kunt dit nu direct online doen of later bij de Europcar locatie. Nu doen is snel en veilig."
                                            labelText={`Wanneer wil je het rijbewijs van ${currentReservation.car.driverOne.driverTwo} laten verifieren?`}
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
                                        <CheckIdentity
                                            thisUser={{
                                                driverTwo: currentReservation.car.driverTwo,
                                            }}
                                            movingRight={-200}
                                            movingLeft={-400}
                                            reservation={currentReservation}
                                        />
                                        <CheckFacial
                                            thisUser={{
                                                driverTwo: currentReservation.car.driverTwo,
                                            }}
                                            movingRight={-300}
                                            movingLeft={-500}
                                            reservation={currentReservation}
                                        />
                                    </>
                                )
                            } else if (
                                currentReservation.car.driverOne.verified &&
                                currentReservation.car.driverTwo.verified &&
                                !currentReservation.car.driverThree.verified
                            ) {
                                return (
                                    <>
                                        <UserChoice
                                            thisUser={{
                                                driverThree: currentReservation.car.driverThree,
                                            }}
                                            title={`Verifieer het  rijbewijs van ${currentReservation.car.driverOne.driverThree}`}
                                            text="We zijn verplicht om te controleren of je een geldig rijbewijs hebt. Je kunt dit nu direct online doen of later bij de Europcar locatie. Nu doen is snel en veilig."
                                            labelText={`Wanneer wil je het rijbewijs van ${currentReservation.car.driverOne.driverThree} laten verifieren?`}
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
                                        <CheckIdentity
                                            thisUser={{
                                                driverThree: currentReservation.car.driverThree,
                                            }}
                                            movingRight={-200}
                                            movingLeft={-400}
                                            reservation={currentReservation}
                                        />
                                        <CheckFacial
                                            thisUser={{
                                                driverThree: currentReservation.car.driverThree,
                                            }}
                                            movingRight={-300}
                                            movingLeft={-500}
                                            reservation={currentReservation}
                                        />
                                    </>
                                )
                            }
                        })()}
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
