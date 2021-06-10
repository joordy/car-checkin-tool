// React imports
import { useState } from 'react'
import * as Styles from './depositForm.styles.js'
import supabase from 'db/supabase.js'

import { useSelector } from 'react-redux'

// Components
import { VerificationButtons, DepositType, DepositCC } from 'components/molecules/index'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

// Set up
const promise = loadStripe(
    'pk_test_51IsTukJEAzd2OWuLXMthwYCSoAGWjPoQntvnjXvvx1V5SrORa7YcifsL2G2mfwNpH5HBJG4fdNM9boA6ugGST6ir005GZ4jgMO',
)

// React component
const DepositForm = ({ currentReservation }) => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-100vw)'
    }

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

    const isPaid = useSelector((state) => state.paidReducer)
    console.log('currentReservation', currentReservation)

    const handleClick = () => {
        console.log('betaald pik')
        const resID = currentReservation.car.reservationID
        const userID = currentReservation.user.userID
        const index = currentReservation.carkey

        getSpecificUser(resID, userID, index)

        setTimeout(() => {
            window.location.href = '/qr'
        }, 100)
    }

    const getSpecificUser = async (resID, userID, index) => {
        console.log('resID', resID)
        console.log('userID', userID)

        const newObject = {
            class: currentReservation.car.class,
            carImage:
                'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
            checkedIn: currentReservation.car.checkedIn,
            driverOne: {
                role: currentReservation.car.driverOne.role,
                driver: currentReservation.car.driverOne.driver,
                method: currentReservation.car.driverOne.method,
                verified: currentReservation.car.driverOne.verified,
            },
            // driverTwo: {
            //     role: 'extra',
            //     driver: currentReservation.car.driverTwo.driver,
            //     method: currentReservation.car.driverTwo.method,
            //     verified: currentReservation.car.driverTwo.verified,
            // },
            otherInfo: {
                freeKM: currentReservation.car.otherInfo.freeKM,
                deposit: currentReservation.car.otherInfo.deposit,
                ownRisk: currentReservation.car.otherInfo.ownRisk,
                priceExtraKM: currentReservation.car.otherInfo.priceExtraKM,
            },
            rentPrice: currentReservation.car.rentPrice,
            handInDate: currentReservation.car.handInDate,
            handInTime: currentReservation.car.handInTime,
            pickUpDate: currentReservation.car.pickUpDate,
            pickUpTime: currentReservation.car.pickUpTime,
            extraDriver: currentReservation.car.extraDriver,
            paidDeposit: {
                paid: true,
                method: 'card',
            },
            lowerOwnRisk: currentReservation.car.lowerOwnRisk,
            orderDetails: currentReservation.car.orderDetails,
            reservationID: currentReservation.car.reservationID,
            handInLocation: currentReservation.car.handInLocation,
            pickUpLocation: currentReservation.car.pickUpLocation,
            walletSerialNumber: currentReservation.car.walletSerialNumber,
            verificationProcess: currentReservation.car.verificationProcess,
        }
        if (index === 0) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResOne: newObject })
                .eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                console.log(data)
            }
        } else if (index === 1) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResTwo: newObject })
                .eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                console.log(data)
            }
        } else if (index === 2) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResThree: newObject })
                .eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                console.log(data)
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
                        € <span>{currentReservation.car.rentPrice},-</span>
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
