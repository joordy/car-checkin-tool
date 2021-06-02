// React imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './verification.styles.js'
import { StepsExplainer, UserChoice, CheckIdentity, CheckFacial } from 'components/organisms/index'

// React component
const Verification = () => {
    const [reservations, setReservations] = useState([])
    const [items, setItems] = useState('')
    const [carReservation, setCarReservation] = useState([])

    const getData = async () => {
        const data = await fetch('/order-details')
        const response = await data.json()
        if (response === 'undefined') {
            window.location.href = '/reservations'
        } else {
            setCarReservation(response)
        }
    }

    const fetchItems = async () => {
        const data = await fetch('/create-verification-session')
        const items = await data.json()
        setItems(items)
    }

    useEffect(() => {
        getData()
        readDB()
        fetchItems()
    }, [])

    const readDB = async () => {
        const { data, error } = await supabase.from('users').select()
        setReservations(data)
    }

    console.log('items', items)

    console.log('reservations', reservations)

    return (
        <Styles.Main>
            <div className="stepsWrapper">
                <StepsExplainer backLink="/addressdata" step="1" />
                <UserChoice
                    title="Verifieer je eigen rijbewijs"
                    text="We zijn verplicht om te controleren of je een geldig rijbwijs hebt. Je kunt dit nu direct online doen of later bij de Europcar locatie. Nu doen is snel en veilig."
                    labelText="Wanneer wil je je rijbewijs laten verifieren?"
                    oneTitle="Nu, online"
                    oneText="Dit is de snelste optie"
                    twoTitle="Ter plekke"
                    twoText="Bij de Europcar locatie"
                    threeTitle="Stap voor nu overslaan"
                    threeText="Je kunt later alsnog een keuze maken."
                />
                <CheckIdentity />
                <CheckFacial />
            </div>
        </Styles.Main>
    )
}

export default Verification
