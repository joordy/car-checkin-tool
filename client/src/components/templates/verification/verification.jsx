// React & Module imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './verification.styles.js'
import fetchData from 'utils/fetchData'

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
    const [items, setItems] = useState('')
    const [currentUser, setCurrentUser] = useState([])
    const [reservationID, setReservationID] = useState([])

    let data

    useEffect(async () => {
        data = await fetchData(`${process.env.REACT_APP_BACKEND}/order-details`)
        getSpecificUser(data)
        verifyIdentity()
    }, [])

    const verifyIdentity = async () => {
        const data = await fetch(`${process.env.REACT_APP_BACKEND}/create-verification-session`)
        const items = await data.json()
        setItems(items)
    }

    const getSpecificUser = async (fetchedData) => {
        const { data, error } = await supabase
            .from('users')
            .select()
            .eq('userID', fetchedData.user.userID)

        if (!data) {
            console.log(error)
        } else {
            setCurrentUser(...data)
            setReservationID(fetchedData.reservationID)
        }
    }

    const completedSteps = {
        orderDetails: true,
        verificationProcess: true,
        payMethod: 'skipped',
        paidDeposit: false,
    }

    console.log('Current user', currentUser)
    console.log('reservation ID', reservationID)

    let viewportHeight = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${viewportHeight}px`)

    return (
        <Styles.Main className="page">
            <div className="stepsWrapper">
                <StepsExplainer backLink="/order-details" completedSteps={completedSteps} />
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
            </div>
        </Styles.Main>
    )
}

export default Verification
