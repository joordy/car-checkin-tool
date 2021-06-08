// React imports
import React from 'react'
import * as Styles from './checkBookingInfo.styles.js'
import { Icons } from 'components/atoms/index.js'
import { VerificationButtons } from 'components/molecules/index'

// React component
const CheckBookingInfo = ({ reservation }) => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-100vw)'
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
                            <span>{reservation.pickUpLocation}</span>
                        </li>
                        <li>
                            <span>Datum inleveren:</span>
                            <span>{reservation.handInLocation}</span>
                        </li>
                        <li>
                            <span>Type klasse:</span>
                            <span>{reservation.class}</span>
                        </li>
                        <li>
                            <span>Huurprijs:</span>
                            <span>€ {reservation.rentPrice}</span>
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
                            <span>€ {reservation.otherInfo.ownRisk}</span>
                        </li>
                        <li>
                            <span>Borg</span>
                            <span>€ {reservation.otherInfo.deposit}</span>
                        </li>
                        <li>
                            <span>Vrije km</span>
                            <span>{reservation.otherInfo.freeKM} KM</span>
                        </li>
                        <li>
                            <span>Prijs per extra km</span>
                            <span>€ {reservation.otherInfo.priceExtraKM}</span>
                        </li>
                    </ul>
                </article>
            </section>
            <VerificationButtons
                typeSecondary="btn"
                typePrimary="btn"
                textPrimary="Volgende"
                textSecondary="Terug"
                linkPrimary="/verification"
                linkSecondary="#"
                callbackSecondary={moveRight}
                callbackPrimary={() => (window.location.href = '/verification')}
            />
        </Styles.Section>
    )
}

export default CheckBookingInfo
