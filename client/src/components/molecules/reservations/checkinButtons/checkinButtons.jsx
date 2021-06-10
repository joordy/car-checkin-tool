// React, Redux & Components imports
import React from 'react'
import * as Styles from './checkinButtons.styles.js'
import { ButtonPrimary } from 'components/atoms/index'

// Component
const CheckinButtons = ({ reservation, carIndexKey, user }) => {
    const day = reservation.pickUpDate.slice(0, 2)
    const month = reservation.pickUpDate.slice(3, 5)
    let pickupDay = [day, month]
    let today = new Date()
    let bday = new Date(today.getFullYear(), pickupDay[1] - 1, pickupDay[0])
    let difference = bday.getTime() - today.getTime()
    let days = Math.floor(difference / (1000 * 60 * 60 * 24))

    if (today.getTime() > bday.getTime()) {
        bday.setFullYear(bday.getFullYear() + 1)
    }

    const handleIncheck = async (event) => {
        const currentUser = {
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            password: user.password,
            birthDate: user.birthDate,
            email: user.email,
            userID: user.userID,
        }
        const currReservation = {
            car: reservation,
            user: currentUser,
            carkey: carIndexKey,
        }

        fetch(`/api/order-details`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(currReservation),
        })
        window.location.href = '/order-details'
    }

    return (
        <Styles.Wrapper>
            {(() => {
                if (days >= 0 && days < 7) {
                    return (
                        <div className="buttonWrapper">
                            <ButtonPrimary
                                type="btn"
                                text="Inchecken"
                                // linkTo="/order-details"
                                width="100%"
                                height="48px"
                                _callback={handleIncheck}
                            />
                        </div>
                    )
                } else {
                    return <p>Inchecken kan over 8 dagen.</p>
                }
            })()}
        </Styles.Wrapper>
    )
}

export default CheckinButtons
