// React imports
import React from 'react'
import * as Styles from './dealerLocations.styles.js'

// React component
const DealerLocations = ({ ...props }) => {
    const reservation = { ...props }

    return (
        <Styles.Location>
            <li>
                <h4>{reservation.pickUpLocation}</h4>
                <h5>
                    {reservation.pickUpDate}
                    <span>
                        <svg
                            width="4"
                            height="4"
                            viewBox="0 0 4 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="2" cy="2" r="2" fill="#000333" />
                        </svg>
                    </span>
                    {reservation.pickUpTime}
                </h5>
            </li>
            <li>
                <h4>{reservation.handInLocation}</h4>
                <h5>
                    {reservation.handInDate}
                    <span>
                        <svg
                            width="4"
                            height="4"
                            viewBox="0 0 4 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="2" cy="2" r="2" fill="#000333" />
                        </svg>
                    </span>
                    {reservation.handInTime}
                </h5>
            </li>
        </Styles.Location>
    )
}

export default DealerLocations
