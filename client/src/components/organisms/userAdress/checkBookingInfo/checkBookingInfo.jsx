// React imports
import React from 'react'
import * as Styles from './checkBookingInfo.styles.js'
import { Icons, EditButton } from 'components/atoms/index.js'
import { VerificationButtons } from 'components/molecules/index'

// React component
const CheckBookingInfo = () => {
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

            <article>
                <p>Auto gegevens</p>
            </article>
            <hr />
            <article>
                <p>Datum ophalen</p>
                <p>Woensdag 16 juni 2021</p>
                <p>Datum inleveren</p>
                <p>Vrijdag 18 juni 2021</p>
                <p>Type klasse</p>
                <p>Elektrisch</p>
                <p>Huurprijs</p>
                <p>€ 477,80</p>
                <p>1x Extra bestuurder</p>
                <p>€ 20,33</p>
                <p>Verlagen eigen risico</p>
                <p>€ 60,02</p>
            </article>

            <article>
                <p>Overige informatie</p>
            </article>
            <hr />
            <article>
                <p>Eigen risico</p>
                <p>€ 400</p>
                <p>Borg</p>
                <p>€ 500</p>
                <p>Vrije km</p>
                <p>600 km</p>
                <p>Prijs per extra km</p>
                <p>€ 0,30</p>
            </article>

            <VerificationButtons
                textPrimary="Volgende"
                textSecondary="Terug"
                linkPrimary="/verification"
                linkSecondary="#"
                callbackSecondary={moveRight}
            />
        </Styles.Section>
    )
}

export default CheckBookingInfo
