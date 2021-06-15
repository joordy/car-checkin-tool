// React imports
import { useState, useEffect } from 'react'
import * as Styles from './checkBookingInfo.styles.js'
import supabase from 'db/supabase.js'
import axios from 'axios'
import { Icons } from 'components/atoms/index.js'
import { VerificationButtons } from 'components/molecules/index'
import { updateDBwithOrderDetails } from 'db/updateDatabase'

// React component
const CheckBookingInfo = (props) => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-100vw)'
    }

    async function handleClick() {
        const resID = props.reservation.reservationID
        const userID = props.loggedinUser.userID
        const index = props.carkey

        const { data, error } = await supabase.from('users').select().eq('userID', userID)
        if (!data) {
            console.log(error)
        } else {
            await getSpecificUser(resID, userID, index, ...data)
            setTimeout(() => {
                window.location.href = '/verification'
            }, 100)
        }
    }

    const getSpecificUser = async (resID, userID, index, currentUserDB) => {
        const stateOne =
            props.reservation.driverOne &&
            !props.reservation.driverTwo &&
            !props.reservation.driverThree
        const stateTwo =
            props.reservation.driverOne &&
            props.reservation.driverTwo &&
            !props.reservation.driverThree
        const stateThree =
            props.reservation.driverOne &&
            props.reservation.driverTwo &&
            props.reservation.driverThree

        const updateWithSettings = () => {
            if (stateOne) {
                return updateDBwithOrderDetails('oneDriver', props.reservation, currentUserDB)
            } else if (stateTwo) {
                return updateDBwithOrderDetails('twoDrivers', props.reservation, currentUserDB)
            } else if (stateThree) {
                return updateDBwithOrderDetails('threeDrivers', props.reservation, currentUserDB)
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
                            <span>{props.reservation.pickUpDate}</span>
                        </li>
                        <li>
                            <span>Datum inleveren:</span>
                            <span>{props.reservation.handInDate}</span>
                        </li>
                        <li>
                            <span>Type klasse:</span>
                            <span>{props.reservation.class}</span>
                        </li>
                        <li>
                            <span>Huurprijs:</span>
                            <span>€ {props.reservation.rentPrice}</span>
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
                            <span>€ {props.reservation.otherInfo.ownRisk}</span>
                        </li>
                        <li>
                            <span>Borg</span>
                            <span>€ {props.reservation.otherInfo.deposit}</span>
                        </li>
                        <li>
                            <span>Vrije km</span>
                            <span>{props.reservation.otherInfo.freeKM} KM</span>
                        </li>
                        <li>
                            <span>Prijs per extra km</span>
                            <span>€ {props.reservation.otherInfo.priceExtraKM}</span>
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
