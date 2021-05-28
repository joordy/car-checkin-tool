// React imports
import React from 'react'
import * as Styles from './checkIdentity.styles.js'
import { CloseIcon } from 'components/atoms/index'
import { VerificationButtons } from 'components/molecules/index'

// React component
const CheckIdentity = () => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(0)'
    }

    const moveLeft = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-200vw)'
    }

    return (
        <Styles.Section id="identity">
            <header>
                <h1>Maak een foto van je rijbewijs</h1>
                <p>
                    We beschermen je gegevens en gebruiken de foto uitsluitend om te verifiëren of
                    je in het bezit bent van een geldig rijbewijs. Na de huurperiode verwijderen we
                    dit onmiddelijk.
                </p>
                <CloseIcon width="1.5rem" height="1.5em" />
            </header>

            <Styles.IdentityChecker></Styles.IdentityChecker>

            <VerificationButtons
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

export default CheckIdentity
