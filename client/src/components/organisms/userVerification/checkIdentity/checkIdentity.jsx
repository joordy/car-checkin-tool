// React imports
import React from 'react'
import * as Styles from './checkIdentity.styles.js'
import { ButtonPrimaryLarge, ButtonSecondaryLarge, CloseIcon } from 'components/atoms/index'

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

            <Styles.BtnWrapper>
                <ButtonSecondaryLarge text="Terug" linkTo="#" _callback={moveRight} />
                <ButtonPrimaryLarge text="Volgende" linkTo="#" _callback={moveLeft} />
            </Styles.BtnWrapper>
        </Styles.Section>
    )
}

export default CheckIdentity
