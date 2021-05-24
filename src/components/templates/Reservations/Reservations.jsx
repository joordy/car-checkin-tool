// React imports
import React from 'react'
import * as Styles from './Reservations.styles.js'
import { ReservationCard, ReservationHeader } from 'components/organisms/index'
// React component
const Reservations = () => {
    return (
        <>
            <ReservationHeader />

            <Styles.Main>
                <h2>Mijn reserveringen</h2>
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
