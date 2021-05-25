// React imports
import React from 'react'
import * as Styles from './ReservationHeader.styles.js'

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
                    <div></div>
                </div>
            </Styles.Header>
        </>
    )
}

export default ReservationHeader
