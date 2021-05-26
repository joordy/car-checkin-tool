// React imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './Checkin.styles.js'
<<<<<<< HEAD
import {
    StepsExplainer,
    CheckUserInfo,
    CheckBookingInfo,
    CheckIdentity,
    CheckFacial,
} from 'components/organisms/index'
=======
import { StepsExplainer } from 'components/organisms/index'
>>>>>>> origin/feat/checkin-steps

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
            <StepsExplainer />
            <CheckUserInfo />
            <CheckBookingInfo />
            <CheckIdentity />
            <CheckFacial />
        </Styles.Main>
    )
}

export default PageOne
