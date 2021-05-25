// React imports
import React from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './Reservations.styles.js'
import { ReservationCard, ReservationHeader } from 'components/organisms/index'

// React component
const Reservations = () => {
    const readDB = async () => {
        const { data, error } = await supabase.from('users').select()
        console.log(data)
    }

    readDB()

    return (
        <>
            <ReservationHeader />

            <Styles.Main>
                <h2>Mijn Reserveringen</h2>
                <ReservationCard />
                <ReservationCard />
                <ReservationCard />
                <ReservationCard />
                <ReservationCard />
            </Styles.Main>
        </>
    )
}

export default Reservations
