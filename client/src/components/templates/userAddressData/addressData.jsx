// React imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './addressData.styles.js'
import { StepsExplainer, CheckUserInfo, CheckBookingInfo } from 'components/organisms/index'

// React component
const AdressData = () => {
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
                <StepsExplainer backLink="/reservations" />
                <CheckUserInfo />
                <CheckBookingInfo />
            </div>
        </Styles.Main>
    )
}

export default AdressData
