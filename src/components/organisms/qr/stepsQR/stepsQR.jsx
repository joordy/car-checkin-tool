// React imports
import React from 'react'
import * as Styles from './stepsQR.styles.js'
import { ButtonPrimaryLarge, ButtonSecondaryLarge } from 'components/atoms/index'
import { IconListItem } from 'components/molecules/index'

// React component
const StepsQR = () => {
    return (
        <Styles.Section>
            <article>
                <h1>Geregeld! Ontvang nu je QR-code</h1>
                <ul>
                    <IconListItem
                        iconName="UserCheckIcon"
                        opacity="0.75"
                        title="Verificatie"
                        text="We controleren of je een geldig rijbewijs hebt en of je minimaal 23 jaar bent."
                        completed
                    />
                    <IconListItem
                        iconName="CreditcardIcon"
                        title="Borg"
                        text="Geef een garantie op je creditcard of betaal contant."
                        completed
                    />
                    <IconListItem
                        iconName="QRCodeIcon"
                        opacity="0.75"
                        title="Klaar!"
                        text="Je ontvangt een QR-code waarmee je op de Europcar locatie je sleutels kunt ophalen."
                    />
                </ul>
            </article>
            <Styles.BtnWrapper>
                <ButtonPrimaryLarge text="Check je QR-code" linkTo="#" />
                <ButtonSecondaryLarge text="Terug" linkTo="#" />
            </Styles.BtnWrapper>
        </Styles.Section>
    )
}

export default StepsQR
