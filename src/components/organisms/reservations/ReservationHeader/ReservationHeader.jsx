// React imports
import React from 'react'
import * as Styles from './ReservationHeader.styles.js'

// React component
const ReservationHeader = () => {
    const userName = 'Lars'

    return (
        <>
            <header>
                <h1>Welkom {userName}!</h1>
                <p>
                    Je kunt hier vanaf 7 dagen voorafgaand aan je reservering alvast online
                    inchecken.
                </p>
                <div>
                    <span></span>
                </div>
            </header>{' '}
        </>
    )
}

export default ReservationHeader
