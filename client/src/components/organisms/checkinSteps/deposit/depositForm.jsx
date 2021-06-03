// React imports
import React from 'react'
import * as Styles from './depositForm.styles.js'
import { Icons, EditButton } from 'components/atoms/index.js'
import { VerificationButtons } from 'components/molecules/index'

// React component
const DepositForm = () => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-100vw)'
    }

    return (
        <Styles.Section>
            <header>
                <h1>Controleer je gegevens </h1>
                <p>Dit is een overzicht van je gegevens zoals die nu bij ons bekend zijn. </p>
            </header>

            <VerificationButtons
                typeSecondary="btn"
                typePrimary="href"
                textPrimary="Volgende"
                textSecondary="Terug"
                linkPrimary="/qr"
                linkSecondary="#"
                callbackSecondary={moveRight}
            />
        </Styles.Section>
    )
}

export default DepositForm
