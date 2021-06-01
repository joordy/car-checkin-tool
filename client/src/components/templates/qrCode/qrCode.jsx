// React imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './qrCode.styles.js'
import { StepsExplainer, ShowQRCode } from 'components/organisms/index'

// React component
const QRCode = () => {
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
                <StepsExplainer backLink="/deposit" step="3" />
                <ShowQRCode title="Reservering 1234" />
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

export default QRCode
