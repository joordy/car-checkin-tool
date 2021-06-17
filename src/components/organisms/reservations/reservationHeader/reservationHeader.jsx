// React imports
import React from 'react'
import * as Styles from './reservationHeader.styles.js'

// Components
import { Icons } from 'components/atoms/index'

// React component
const ReservationHeader = (props) => {
    const user = props.user

    return (
        <>
            <Styles.Header>
                <h1>Welkom {user.firstName}!</h1>
                <p>
                    Je kunt hier vanaf 7 dagen voorafgaand aan je reservering alvast online
                    inchecken.
                </p>
                <div>
                    <Icons type="user" width="26px" height="26px" stroke="white" />
                </div>
            </Styles.Header>
        </>
    )
}

export default ReservationHeader
