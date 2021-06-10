// React imports
import React from 'react'
import * as Styles from './checkBookingInfo.styles.js'
import { Icons } from 'components/atoms/index.js'
import { VerificationButtons } from 'components/molecules/index'
import supabase from 'db/supabase.js'

// React component
const CheckBookingInfo = ({ reservation }) => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-100vw)'
    }

    console.log('reservation', reservation)

    const getSpecificUser = async (resID, userID, index) => {
        console.log('resID', resID)
        console.log('userID', userID)

        const newObject = {
            class: reservation.car.class,
            carImage:
                'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
            checkedIn: reservation.car.checkedIn,
            driverOne: {
                role: reservation.car.driverOne.role,
                driver: reservation.car.driverOne.driver,
                method: reservation.car.driverOne.method,
                verified: reservation.car.driverOne.verified,
            },
            otherInfo: {
                freeKM: reservation.car.otherInfo.freeKM,
                deposit: reservation.car.otherInfo.deposit,
                ownRisk: reservation.car.otherInfo.ownRisk,
                priceExtraKM: reservation.car.otherInfo.priceExtraKM,
            },
            rentPrice: reservation.car.rentPrice,
            handInDate: reservation.car.handInDate,
            handInTime: reservation.car.handInTime,
            pickUpDate: reservation.car.pickUpDate,
            pickUpTime: reservation.car.pickUpTime,
            extraDriver: reservation.car.extraDriver,
            paidDeposit: reservation.car.paidDeposit,
            lowerOwnRisk: reservation.car.lowerOwnRisk,
            orderDetails: true,
            reservationID: reservation.car.reservationID,
            handInLocation: reservation.car.handInLocation,
            pickUpLocation: reservation.car.pickUpLocation,
            walletSerialNumber: reservation.car.walletSerialNumber,
            verificationProcess: reservation.car.verificationProcess,
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

    async function handleClick() {
        const resID = reservation.car.reservationID
        const userID = reservation.user.userID
        const index = reservation.carkey

        getSpecificUser(resID, userID, index)

        setTimeout(() => {
            window.location.href = '/verification'
        }, 100)
    }

    return (
        <Styles.Section>
            <header>
                <h1>Controleer je gegevens </h1>
                <p>Dit is een overzicht van je gegevens zoals die nu bij ons bekend zijn. </p>
                <Icons type="close" width="1.5rem" height="1.5em" />
            </header>

            <section className="wrapper">
                <article>
                    <p>Auto gegevens</p>
                </article>
                <hr />
                <article>
                    <ul>
                        <li>
                            <span>Datum ophalen:</span>
                            <span>{reservation.car.pickUpDate}</span>
                        </li>
                        <li>
                            <span>Datum inleveren:</span>
                            <span>{reservation.car.handInDate}</span>
                        </li>
                        <li>
                            <span>Type klasse:</span>
                            <span>{reservation.car.class}</span>
                        </li>
                        <li>
                            <span>Huurprijs:</span>
                            <span>€ {reservation.car.rentPrice}</span>
                        </li>
                    </ul>
                </article>

                <article>
                    <p>Overige informatie</p>
                </article>
                <hr />
                <article>
                    <ul>
                        <li>
                            <span>Eigen risico</span>
                            <span>€ {reservation.car.otherInfo.ownRisk}</span>
                        </li>
                        <li>
                            <span>Borg</span>
                            <span>€ {reservation.car.otherInfo.deposit}</span>
                        </li>
                        <li>
                            <span>Vrije km</span>
                            <span>{reservation.car.otherInfo.freeKM} KM</span>
                        </li>
                        <li>
                            <span>Prijs per extra km</span>
                            <span>€ {reservation.car.otherInfo.priceExtraKM}</span>
                        </li>
                    </ul>
                </article>
            </section>
            <VerificationButtons
                typeSecondary="btn"
                typePrimary="btn"
                textPrimary="Klaar"
                textSecondary="Terug"
                linkPrimary="/verification"
                linkSecondary="#"
                callbackSecondary={moveRight}
                callbackPrimary={handleClick}
            />
        </Styles.Section>
    )
}

export default CheckBookingInfo
