// React imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './qrCode.styles.js'
import fetchData from 'utils/fetchData'

// Components
import { StepsExplainer, ShowQRCode } from 'components/organisms/index'

// React component
const QRCode = () => {
    const [currentUser, setCurrentUser] = useState([])
    const [reservationID, setReservationID] = useState([])

    let data

    useEffect(async () => {
        data = await fetchData(`${process.env.REACT_APP_BACKEND}/order-details`)
        getSpecificUser(data)
    }, [])

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

    console.log('Current user', currentUser)
    console.log('reservation ID', reservationID)

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
