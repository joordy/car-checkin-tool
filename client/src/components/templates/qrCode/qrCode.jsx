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

    let viewportHeight = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${viewportHeight}px`)

    return (
        <Styles.Main className="page">
            <div className="stepsWrapper">
                <StepsExplainer backLink="/deposit" step="3" />
                <ShowQRCode title="Reservering 1234" />
            </div>
        </Styles.Main>
    )
}

export default QRCode
