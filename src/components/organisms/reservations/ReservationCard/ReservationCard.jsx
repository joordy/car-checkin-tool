// React imports
import React from 'react'
import * as Styles from './ReservationCard.styles.js'
import { ButtonPrimaryLarge, ButtonTertiaryMore } from 'components/atoms/index'

// React component
const ReservationCard = ({ ...props }) => {
    const reservation = { ...props }
    console.log(reservation)
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
                    <ul>
                        <li>
                            <h4>{reservation.pickUpLocation}</h4>
                            <h5>
                                {reservation.pickUpDate} <span>X</span> {reservation.pickUpTime}
                            </h5>
                        </li>
                        <li>
                            <h4>{reservation.handInLocation}</h4>
                            <h5>
                                {reservation.handInDate} <span>X</span> {reservation.handInTime}
                            </h5>
                        </li>
                    </ul>
                    <div>
                        <ButtonPrimaryLarge text="Inchecken" linkTo="#" width="230px" />
                        <ButtonTertiaryMore linkTo="#" />
                    </div>
                </article>
            </Styles.Card>
        </>
    )
}

export default ReservationCard
