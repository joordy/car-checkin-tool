// React, Redux & Components imports
import React, { useContext } from 'react'
import * as Styles from './checkinButtons.styles.js'
import { useSelector, useDispatch } from 'react-redux'
import { checkIn } from 'store/actions/index'
import { ButtonPrimary } from 'components/atoms/index'
import { CurrentCarContext } from 'context/carContext'

// Component
const CheckinButtons = ({ ...props }) => {
    const [carReservation, setCarReservation] = useContext(CurrentCarContext)

    const reservation = { ...props }
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

    //
    // const checkInCar = useSelector((state) => state.checkIn)
    // const dispatch = useDispatch()

    // console.log('props', props)
    const handleIncheck = async (event) => {
        console.log('hi')
        fetch('/order-details', {
            method: 'POST',
            body: JSON.stringify(reservation),
        })
        // setCarReservation(() => [reservation])
    }
    //   const handleClick = async (event) => {
    //     const stripe = await stripePromise
    //     // Connect to backend to fetch the verification session
    //     const response = await fetch('/create-verification-session', { method: 'POST' })
    //     const client_secret = await response.json()
    //     // Opens verification modal
    //     const result = await stripe.verifyIdentity(client_secret)

    //     console.log('result', result)
    //     if (result.error) {
    //         // If `verifyIdentity` fails, display the localized error
    //         // message using `result.error.message`.
    //         alert(result.error.message)
    //     }
    // }

    return (
        <Styles.Wrapper>
            {(() => {
                if (days > 0 && days < 7) {
                    return (
                        <div className="buttonWrapper">
                            <ButtonPrimary
                                type="href"
                                text="Inchecken"
                                linkTo="#"
                                width="100%"
                                height="48px"
                                _callback={handleIncheck}
                                // _callback={() =>
                                //     dispatch(
                                //         checkIn(reservation.reservationID, reservation.user.userID),
                                //     )
                                // }
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
