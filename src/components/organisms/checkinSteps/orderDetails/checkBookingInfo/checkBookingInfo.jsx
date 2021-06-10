// React imports
import React from 'react'
import * as Styles from './checkBookingInfo.styles.js'
import supabase from 'db/supabase.js'
import { Icons } from 'components/atoms/index.js'
import { VerificationButtons } from 'components/molecules/index'
import { updateDBwithMethodAndValue } from 'db/updateDatabase'

// React component
const CheckBookingInfo = (props) => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-100vw)'
    }

    console.log(reservation)

    async function handleClick() {
        const resID = props.reservation.car.reservationID
        const userID = props.reservation.user.userID
        const index = props.reservation.carkey

        getSpecificUser(resID, userID, index)

        setTimeout(async () => {
            const res = await axios
                .post('/api/orderDetails', {
                    orderDetails: true,
                    carkey: props.reservation.carkey,
                    method: 'card',
                })
                .then((res) => console.log(res), (window.location.href = '/qr'))
        }, 100)
    }

    const getSpecificUser = async (resID, userID, index) => {
        const stateOne =
            props.reservation.car.driverOne &&
            !props.reservation.car.driverTwo &&
            !props.reservation.car.driverThree
        const stateTwo =
            props.reservation.car.driverOne &&
            props.reservation.car.driverTwo &&
            !props.reservation.car.driverThree
        const stateThree =
            props.reservation.car.driverOne &&
            props.reservation.car.driverTwo &&
            props.reservation.car.driverThree

        const updateWithSettings = () => {
            if (stateOne) {
                return updateDBwithMethodAndValue('oneDriver', props.reservation)
            } else if (stateTwo) {
                return updateDBwithMethodAndValue('twoDrivers', props.reservation)
            } else if (stateThree) {
                return updateDBwithMethodAndValue('threeDrivers', props.reservation)
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
