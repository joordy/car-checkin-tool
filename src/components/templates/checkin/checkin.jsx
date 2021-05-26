// React imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './checkin.styles.js'
import {
    StepsExplainer,
    CheckUserInfo,
    CheckBookingInfo,
    CheckIdentity,
    CheckFacial,
} from 'components/organisms/index'

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
                <StepsExplainer />
                <CheckIdentity />
                <CheckFacial />
                {/*<CheckUserInfo />
              <CheckBookingInfo />
              
            */}
            </div>
        </Styles.Main>
    )
}

export default PageOne
