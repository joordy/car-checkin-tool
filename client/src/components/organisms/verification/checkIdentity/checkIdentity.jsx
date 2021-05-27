// React imports
import React from 'react'
import * as Styles from './checkIdentity.styles.js'
import { ButtonPrimaryLarge, ButtonSecondaryLarge, CloseIcon } from 'components/atoms/index'

// React component
const CheckIdentity = () => {
    const moveRight = () => {
        const moveel = document.querySelector('.stepsWrapper')
        moveel.style.transform = 'translateX(-300vw)'
    }

    const moveLeft = () => {
        const moveel = document.querySelector('.stepsWrapper')
        moveel.style.transform = 'translateX(100vw)'
    }

    return (
        <Styles.Section>
            <article>
                <h1>Maak een foto van je rijbewijs</h1>
                <p>
                    We beschermen je gegevens en gebruiken de foto uitsluitend om te verifiëren of
                    je in het bezit bent van een geldig rijbewijs. Na de huurperiode verwijderen we
                    dit onmiddelijk.
                </p>
                <CloseIcon width="1.5rem" height="1.5em" />
            </article>

            <Styles.IdentityChecker></Styles.IdentityChecker>

            <Styles.BtnWrapper>
                <ButtonSecondaryLarge text="Terug" linkTo="#" _callback={moveRight} />
                <ButtonPrimaryLarge text="Volgende" linkTo="#" _callback={moveLeft} />
            </Styles.BtnWrapper>
        </Styles.Section>
    )
}

export default CheckIdentity
