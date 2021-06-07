// React imports
import React from 'react'
import * as Styles from './checkUserInfo.styles.js'
import { Icons, EditButton } from 'components/atoms/index.js'
import { VerificationButtons } from 'components/molecules/index'

// React component
const CheckUserInfo = ({ reservation }) => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(0)'
    }

    const moveLeft = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-200vw)'
    }

    console.log('hello reservation here: ', reservation)
    return (
        <Styles.Section>
            <header>
                <h1>Controleer je gegevens </h1>
                <p>Dit is een overzicht van je gegevens zoals die nu bij ons bekend zijn. </p>
                <Icons type="close" width="1.5rem" height="1.5em" />
            </header>

            <section>
                <article>
                    <p>Algemene gegevens</p>
                    <EditButton />
                </article>
                <hr />
                <article>
                    <p>Voornaam</p>
                    <p>{reservation.firstName}</p>
                    <p>Achternaam</p>
                    <p>{reservation.lastName}</p>
                    <p>E-mailadres</p>
                    <p>{reservation.email}</p>
                    <p>Telefoonnummer</p>
                    <p>0645542811</p>
                    <p>Geboortedatum</p>
                    <p>23 februari 1997</p>
                </article>
            </section>

            <VerificationButtons
                typeSecondary="btn"
                typePrimary="btn"
                textPrimary="Volgende"
                textSecondary="Terug"
                linkPrimary="#"
                linkSecondary="#"
                callbackSecondary={moveRight}
                callbackPrimary={moveLeft}
            />
        </Styles.Section>
    )
}

export default CheckUserInfo
