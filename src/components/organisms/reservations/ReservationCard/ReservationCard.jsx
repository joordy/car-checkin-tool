// React imports
import React from 'react'
import * as Styles from './reservationCard.styles.js'
import { CheckinButtons, DealerLocations } from 'components/molecules/index'

// React component
const ReservationCard = ({ ...props }) => {
    const reservation = { ...props }
    return (
        <>
            <Styles.Card>
                <img src={reservation.carImage} alt="Car image" />
                <h3>{reservation.class}</h3>
                <article>
                    <span>
                        <svg
                            width="14"
                            height="57"
                            viewBox="0 0 14 57"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <ellipse cx="7.16413" cy="6" rx="6.83284" ry="6" fill="#CCCCD6" />
                            <ellipse cx="7.16413" cy="51" rx="6.83284" ry="6" fill="#CCCCD6" />
                            <line x1="7.66406" y1="14" x2="7.66406" y2="43" stroke="#CCCCD6" />
                        </svg>
                    </span>

                    <DealerLocations {...props} />

                    <CheckinButtons {...props} />
                </article>
            </Styles.Card>
        </>
    )
}

export default ReservationCard
