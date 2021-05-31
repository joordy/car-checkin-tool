// React imports
import React from 'react'
import * as Styles from './checkFacial.styles.js'
import { Icons } from 'components/atoms/index'
import { VerificationButtons } from 'components/molecules/index'

// React component
const CheckFacial = () => {
    const moveLeft = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-200vw)'
    }

    return (
        <Styles.Section id="facial">
            <header>
                <h1>Maak een foto van je gezicht</h1>
                <p>
                    We beschermen je gegevens en gebruiken de foto uitsluitend om te verifiëren of
                    jij de echte eigenaar bent van het rijbewijs. Na de verificatie verwijderen we
                    de foto direct.
                </p>
                <Icons type="close" width="1.5rem" height="1.5em" />
            </header>

            <Styles.IdentityChecker></Styles.IdentityChecker>

            <VerificationButtons
                textPrimary="Volgende"
                textSecondary="Terug"
                linkPrimary="/deposit"
                linkSecondary="#"
                callbackSecondary={moveLeft}
            />
        </Styles.Section>
    )
}

export default CheckFacial
