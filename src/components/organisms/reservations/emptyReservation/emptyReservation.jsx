// React & Components imports
import React from 'react'
import * as Styles from './emptyReservation.styles.js'
import { Icons, ButtonPrimary } from 'components/atoms/index'

// Component
const EmptyReservation = () => {
    // const reservation = { ...props }
    // console.log(reservation)

    return (
        <Styles.Section>
            <Icons type="reservationCard" width="80%" />
            <h2>Nog geen reserveringen</h2>
            <p>Je hebt nog geen reserveringen gemaakt. Inchecken is nu dus niet mogelijk.</p>
            <ButtonPrimary type="href" href="https://www.europcar.nl" text="Direct auto huren" />
        </Styles.Section>
    )
}

export default EmptyReservation
