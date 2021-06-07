// React imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './deposit.styles.js'
import { StepsExplainer, UserChoice, DepositForm } from 'components/organisms/index'

// React component
const PageOne = () => {
    const [reservations, setReservations] = useState([])
    const [carReservation, setCarReservation] = useState([])

    const getData = async () => {
        const data = await fetch(`${process.env.REACT_APP_BACKEND}/order-details`)
        console.log(data)
        const response = await data.json()
        if (response === 'undefined') {
            console.log(response)
            // window.location.href = '/reservations'
        } else {
            setCarReservation(response)
        }
    }

    const readDB = async () => {
        const { data, error } = await supabase.from('users').select()
        setReservations(data)
    }

    useEffect(() => {
        getData()
        readDB()
    }, [])

    console.log('current reservation:', carReservation)

    let viewportHeight = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${viewportHeight}px`)

    return (
        <Styles.Main className="page">
            <div className="stepsWrapper">
                <StepsExplainer backLink="/verification" step="2" />
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
                    deposit="500,-"
                    movingRight="0vw"
                    movingLeft="-200vw"
                />
                <DepositForm />
            </div>
        </Styles.Main>
    )
}

export default PageOne
