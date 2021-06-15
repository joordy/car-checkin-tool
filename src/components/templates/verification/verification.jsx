// React & Module imports
import { useState, useEffect } from 'react'
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
    const [loadingData, setLoadingData] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    const [currentKey, setCurrentKey] = useState(null)

    const verifyIdentity = async () => {
        const data = await fetch(
            `https://us-central1-car-check-in.cloudfunctions.net/app/api/create-verification-session`,
        )
        const items = await data.json()
        setItems(items)
    }

    const getData = async () => {
        try {
            const data = await axios
                .get(`https://us-central1-car-check-in.cloudfunctions.net/app/api/order-details`)
                .then((res) => {
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
        verifyIdentity()
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
                            backLink="/order-details"
                            loading={loadingData}
                            reservation={currentReservation}
                            carkey={currentKey}
                            loggedinUser={currentUser}
                        />
                        {(() => {
                            if (!currentReservation.driverOne.verified) {
                                return (
                                    <>
                                        <CheckDrivers
                                            reservation={currentReservation}
                                            carkey={currentKey}
                                            loggedinUser={currentUser}
                                            movingRight={0}
                                            movingLeft={-200}
                                        />
                                        <UserChoice
                                            thisUser={{
                                                driverOne: currentReservation.driverOne,
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
                                            carkey={currentKey}
                                            loggedinUser={currentUser}
                                        />
                                        <CheckIdentity
                                            thisUser={{
                                                driverOne: currentReservation.driverOne,
                                            }}
                                            movingRight={-200}
                                            movingLeft={-400}
                                            reservation={currentReservation}
                                            carkey={currentKey}
                                            loggedinUser={currentUser}
                                        />
                                        <CheckFacial
                                            thisUser={{
                                                driverOne: currentReservation.driverOne,
                                            }}
                                            movingRight={-300}
                                            movingLeft={-500}
                                            reservation={currentReservation}
                                            carkey={currentKey}
                                            loggedinUser={currentUser}
                                        />
                                    </>
                                )
                            } else if (
                                currentReservation.driverTwo &&
                                !currentReservation.driverTwo.verified
                            ) {
                                return (
                                    <>
                                        <CheckDrivers
                                            reservation={currentReservation}
                                            carkey={currentKey}
                                            loggedinUser={currentUser}
                                            movingRight={0}
                                            movingLeft={-200}
                                        />
                                        <UserChoice
                                            thisUser={{
                                                driverTwo: currentReservation.driverTwo,
                                            }}
                                            title={`Verifieer het  rijbewijs van ${currentReservation.driverTwo.driver}`}
                                            text="We zijn verplicht om te controleren of je een geldig rijbewijs hebt. Je kunt dit nu direct online doen of later bij de Europcar locatie. Nu doen is snel en veilig."
                                            labelText={`Wanneer wil je het rijbewijs van ${currentReservation.driverTwo.driver} laten verifieren?`}
                                            oneTitle="Nu, online"
                                            oneText="Dit is de snelste optie"
                                            twoTitle="Ter plekke"
                                            twoText="Bij de Europcar locatie"
                                            threeTitle="Stap voor nu overslaan"
                                            threeText="Je kunt later alsnog een keuze maken."
                                            movingRight={-100}
                                            movingLeft={-300}
                                            reservation={currentReservation}
                                            carkey={currentKey}
                                            loggedinUser={currentUser}
                                        />
                                        <CheckIdentity
                                            thisUser={{
                                                driverTwo: currentReservation.driverTwo,
                                            }}
                                            movingRight={-200}
                                            movingLeft={-400}
                                            reservation={currentReservation}
                                            carkey={currentKey}
                                            loggedinUser={currentUser}
                                        />
                                        <CheckFacial
                                            thisUser={{
                                                driverTwo: currentReservation.driverTwo,
                                            }}
                                            movingRight={-300}
                                            movingLeft={-500}
                                            reservation={currentReservation}
                                            carkey={currentKey}
                                            loggedinUser={currentUser}
                                        />
                                    </>
                                )
                            } else if (
                                currentReservation.driverThree &&
                                !currentReservation.driverThree.verified
                            ) {
                                return (
                                    <>
                                        <CheckDrivers
                                            reservation={currentReservation}
                                            carkey={currentKey}
                                            loggedinUser={currentUser}
                                            movingRight={0}
                                            movingLeft={-200}
                                        />
                                        <UserChoice
                                            thisUser={{
                                                driverThree: currentReservation.driverThree,
                                            }}
                                            title={`Verifieer het  rijbewijs van ${currentReservation.driverThree.driver}`}
                                            text="We zijn verplicht om te controleren of je een geldig rijbwijs hebt. Je kunt dit nu direct online doen of later bij de Europcar locatie. Nu doen is snel en veilig."
                                            labelText={`Wanneer wil je het rijbewijs van ${currentReservation.driverThree.driver} laten verifieren?`}
                                            oneTitle="Nu, online"
                                            oneText="Dit is de snelste optie"
                                            twoTitle="Ter plekke"
                                            twoText="Bij de Europcar locatie"
                                            threeTitle="Stap voor nu overslaan"
                                            threeText="Je kunt later alsnog een keuze maken."
                                            movingRight={-100}
                                            movingLeft={-300}
                                            reservation={currentReservation}
                                            carkey={currentKey}
                                            loggedinUser={currentUser}
                                        />
                                        <CheckIdentity
                                            thisUser={{
                                                driverThree: currentReservation.driverThree,
                                            }}
                                            movingRight={-200}
                                            movingLeft={-400}
                                            reservation={currentReservation}
                                            carkey={currentKey}
                                            loggedinUser={currentUser}
                                        />
                                        <CheckFacial
                                            thisUser={{
                                                driverThree: currentReservation.driverThree,
                                            }}
                                            movingRight={-300}
                                            movingLeft={-500}
                                            reservation={currentReservation}
                                            carkey={currentKey}
                                            loggedinUser={currentUser}
                                        />
                                    </>
                                )
                            } else {
                                return (
                                    <CheckDrivers
                                        reservation={currentReservation}
                                        movingRight={0}
                                        movingLeft="/deposit"
                                        carkey={currentKey}
                                        loggedinUser={currentUser}
                                    />
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
