// React, Redux & Components imports
import * as Styles from './checkinButtons.styles.js'
import { ButtonPrimary } from 'components/atoms/index'

// Component
const CheckinButtons = (props) => {
    const day = props.reservation.pickUpDate.slice(0, 2)
    const month = props.reservation.pickUpDate.slice(3, 5)
    let pickupDay = [day, month]
    let today = new Date()
    let bday = new Date(today.getFullYear(), pickupDay[1] - 1, pickupDay[0])
    let difference = bday.getTime() - today.getTime()
    let days = Math.floor(difference / (1000 * 60 * 60 * 24))

    if (today.getTime() > bday.getTime()) {
        bday.setFullYear(bday.getFullYear() + 1)
    }

    const handleIncheck = async (res) => {
        const currentUser = {
            firstName: props.user.firstName,
            lastName: props.user.lastName,
            phoneNumber: props.user.phoneNumber,
            password: props.user.password,
            birthDate: props.user.birthDate,
            email: props.user.email,
            userID: props.user.userID,
        }
        const currReservation = {
            car: props.reservation,
            user: currentUser,
            carkey: props.carIndexKey,
        }

        fetch(`https://us-central1-car-check-in.cloudfunctions.net/app/api/order-details`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(currReservation),
        })
        let order = res.orderDetails
        let verified = res.verificationProcess
        let paid = res.paidDeposit.paid
        setTimeout(() => {
            console.log('go to page bla')
            if (order && !verified && !paid) {
                window.location.href = '/verification'
            } else if (order && verified && !paid) {
                window.location.href = '/deposit'
            } else if (order && verified && paid) {
                window.location.href = '/qr'
            } else if (order && !verified && paid) {
                window.location.href = '/verification'
            } else if (!order && !verified && paid) {
                window.location.href = '/order-details'
            } else if (!order && !verified && !paid) {
                window.location.href = '/order-details'
            }
        }, 150)
    }

    const stepsChecker = (res) => {
        let order = res.orderDetails
        let verified = res.verificationProcess
        let paid = res.paidDeposit.paid
        if (order && !verified && !paid) {
            return 'Rijbewijs verifieren'
        } else if (order && verified && !paid) {
            return 'Borg betalen'
        } else if (order && verified && paid) {
            return 'Naar QR'
        } else if (order && !verified && paid) {
            return 'Rijbewijs verifieren'
        } else if (!order && !verified && paid) {
            return 'Controleer gegevens'
        } else if (!order && !verified && !paid) {
            return 'Inchecken'
        } else if (!order && !paid) {
            return 'Controleer  gegevens'
        }
    }

    return (
        <Styles.Wrapper>
            {(() => {
                if (days >= 0 && days < 7) {
                    return (
                        <div className="buttonWrapper">
                            <ButtonPrimary
                                type="btn"
                                text={stepsChecker(props.reservation)}
                                width="100%"
                                height="48px"
                                _callback={() => handleIncheck(props.reservation)}
                            />
                        </div>
                    )
                } else {
                    return <p>Inchecken kan over {days - 7} dagen.</p>
                }
            })()}
        </Styles.Wrapper>
    )
}

export default CheckinButtons
