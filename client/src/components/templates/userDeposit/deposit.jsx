// React imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './deposit.styles.js'
import { StepsExplainer, UserChoice } from 'components/organisms/index'

// React component
const PageOne = () => {
    const [reservations, setReservations] = useState([])

    const readDB = async () => {
        const { data, error } = await supabase.from('users').select()
        setReservations(data)
    }

    useEffect(() => {
        readDB()
    }, [])

    return (
        <Styles.Main>
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
                />
            </div>
            {/*
            <VerificationOne />
            <VerificationTwo />
            <VerificationThree />
            <VerificationFour />
            <StepsBorg />
            <BorgPayments /> */}
        </Styles.Main>
    )
}

export default PageOne
