// React imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './Checkin.styles.js'
import { IconListItem } from 'components/molecules/index'
import { StepsExplainer } from 'components/organisms/index'

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
            {/*<VerificationOne />
            <VerificationTwo />
            <VerificationThree />
            <VerificationFour />
            <StepsBorg />
            <BorgPayments /> */}
        </Styles.Main>
    )
}

export default PageOne
