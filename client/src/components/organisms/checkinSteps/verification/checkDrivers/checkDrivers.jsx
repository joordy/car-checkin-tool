// React imports
import React, { useState } from 'react'
import * as Styles from './checkDrivers.styles.js'
import { Icons, Label } from 'components/atoms/index'
import { VerificationButtons, DriverListItem } from 'components/molecules/index'

// React component
const CheckDrivers = () => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(0vw)'
    }

    const moveLeft = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-200vw)'
    }

    return (
        <Styles.Section id="facial">
            <header>
                <h1>Verifieer rijbewijzen</h1>
                <p>
                    We zijn verplicht om te controleren of alle bestuurders een geldig rijbwijs
                    hebben. Je kunt de rijbewijzen hier online veilig en gemakkelijk verifiëren.
                </p>
            </header>
            <section>
                <Label text="Te verifiëren bestuurders" />
                <ol>
                    <DriverListItem type="verified" name="Kelly de Jong" />
                    <DriverListItem type="location" name="John Doe" />
                    <DriverListItem type="skiped" name="Jong Kel" />
                    <DriverListItem name="Anja Riet" subText="Extra bestuurder" />
                </ol>
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

export default CheckDrivers
