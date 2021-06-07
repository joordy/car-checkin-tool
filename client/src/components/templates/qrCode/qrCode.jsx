// React imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './qrCode.styles.js'
import { StepsExplainer, ShowQRCode } from 'components/organisms/index'

// React component
const QRCode = () => {
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
                <StepsExplainer backLink="/deposit" step="3" />
                <ShowQRCode title="Reservering 1234" />
            </div>
        </Styles.Main>
    )
}

export default QRCode
