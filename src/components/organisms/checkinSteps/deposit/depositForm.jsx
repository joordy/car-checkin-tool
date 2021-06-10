// React imports
import { useState } from 'react'
import axios from 'axios'
import * as Styles from './depositForm.styles.js'
import supabase from 'db/supabase.js'
import { useSelector } from 'react-redux'
import { updateDBwithMethodAndValue } from 'db/updateDatabase'

// Components
import { VerificationButtons, DepositType, DepositCC } from 'components/molecules/index'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

// Set up
const promise = loadStripe(
    'pk_test_51IsTukJEAzd2OWuLXMthwYCSoAGWjPoQntvnjXvvx1V5SrORa7YcifsL2G2mfwNpH5HBJG4fdNM9boA6ugGST6ir005GZ4jgMO',
)

console.log('test data for Stripe:', {
    succes: {
        cardnr: '4242 4242 4242 4242',
        month: '08/24',
        csv: '123',
    },
    auth: {
        cardnr: '4000 0025 0000 3155',
        month: '08/24',
        csv: '123',
    },
    failed: {
        cardnr: '4000 0000 0000 9995',
        month: '08/24',
        csv: '123',
    },
})

// React component
const DepositForm = (props) => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-100vw)'
    }

    const isPaid = useSelector((state) => state.paidReducer)

    const handleClick = () => {
        console.log('betaald pik')
        const resID = props.currentReservation.car.reservationID
        const userID = props.currentReservation.user.userID
        const index = props.currentReservation.carkey

        getSpecificUser(resID, userID, index)

        setTimeout(async () => {
            const res = await axios
                .post('/api/payMethod', {
                    paid: true,
                    carkey: props.currentReservation.carkey,
                    method: 'card',
                })
                .then((res) => console.log(res), (window.location.href = '/qr'))
        }, 100)
    }

    const getSpecificUser = async (resID, userID, index) => {
        const stateOne =
            props.currentReservation.car.driverOne &&
            !props.currentReservation.car.driverTwo &&
            !props.currentReservation.car.driverThree
        const stateTwo =
            props.currentReservation.car.driverOne &&
            props.currentReservation.car.driverTwo &&
            !props.currentReservation.car.driverThree
        const stateThree =
            props.currentReservation.car.driverOne &&
            props.currentReservation.car.driverTwo &&
            props.currentReservation.car.driverThree

        const updateWithSettings = () => {
            if (stateOne) {
                return updateDBwithMethodAndValue('oneDriver', props.currentReservation)
            } else if (stateTwo) {
                return updateDBwithMethodAndValue('twoDrivers', props.currentReservation)
            } else if (stateThree) {
                return updateDBwithMethodAndValue('threeDrivers', props.currentReservation)
            }
        }

        if (index === 0) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResOne: updateWithSettings() })
                .eq('userID', userID)
            if (!data) {
                console.log(error)
            }
        } else if (index === 1) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResTwo: updateWithSettings() })
                .eq('userID', userID)
            if (!data) {
                console.log(error)
            }
        } else if (index === 2) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResThree: updateWithSettings() })
                .eq('userID', userID)
            if (!data) {
                console.log(error)
            }
        }
    }

    return (
        <Styles.Section>
            <header>
                <h1>Borg reservering</h1>
                <p>
                    Bij een creditcard reservering wordt er niets afgeschreven. Kies je voor iDEAL?
                    Dan wordt de borg wel meteen afgeschreven. Je krijgt het na de huurperiode
                    automatisch weer terug, mits er geen schade is.
                </p>
            </header>

            <main>
                <article>
                    <h2>Borg:</h2>
                    <p>
                        € <span>{props.currentReservation.car.rentPrice},-</span>
                    </p>
                </article>

                <article>
                    <h2>Betaalmethode</h2>
                    <DepositType labelText="Creditcard">
                        <Elements stripe={promise}>
                            <DepositCC />
                        </Elements>
                    </DepositType>
                    <DepositType labelText="iDeal">
                        <p>Deze betaalmethode wordt op dit moment nog niet ondersteund.</p>
                    </DepositType>
                </article>
            </main>

            {isPaid ? (
                <VerificationButtons
                    typeSecondary="btn"
                    typePrimary="btn"
                    textPrimary="Volgende"
                    textSecondary="Terug"
                    linkPrimary="/qr"
                    linkSecondary="#"
                    callbackSecondary={moveRight}
                    callbackPrimary={handleClick}
                />
            ) : (
                <VerificationButtons
                    typeSecondary="btn"
                    typePrimary="btn"
                    textPrimary="Volgende"
                    textSecondary="Terug"
                    linkPrimary="#"
                    linkSecondary="#"
                    callbackSecondary={moveRight}
                    disabled
                />
            )}
        </Styles.Section>
    )
}

export default DepositForm
