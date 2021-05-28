// React imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './userVerification.styles.js'
import { StepsExplainer, CheckIdentity, CheckFacial } from 'components/organisms/index'

// React component
const UserVerification = () => {
    const [reservations, setReservations] = useState([])

    useEffect(() => {
        readDB()
    }, [])

    const readDB = async () => {
        const { data, error } = await supabase.from('users').select()
        setReservations(data)
    }

    console.log('reservations', reservations)

    return (
        <Styles.Main>
            <div className="stepsWrapper">
                <StepsExplainer backLink="/addressdata" step="1" />
                <CheckIdentity />
                <CheckFacial />
            </div>
        </Styles.Main>
    )
}

export default UserVerification
