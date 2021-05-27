// React imports
import React from 'react'
import * as Styles from './stepsExplainer.styles.js'
import { ButtonPrimaryLarge, ButtonSecondaryLarge } from 'components/atoms/index'
import { IconListItem } from 'components/molecules/index'

// React component
const StepsExplainer = () => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-100vw)'
    }

    return (
        <Styles.Section id="introduction">
            <article>
                <h1>Inchecken in 3 stappen</h1>
                <ul>
                    <IconListItem
                        iconName="UserCheckIcon"
                        opacity="0.75"
                        title="Verificatie"
                        text="We controleren of je een geldig rijbewijs hebt en of je minimaal 23 jaar bent."
                    />
                    <IconListItem
                        iconName="CreditcardIcon"
                        opacity="0.75"
                        title="Borg"
                        text="Geef een garantie op je creditcard of betaal contant."
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
                <ButtonPrimaryLarge text="Start verificatie" linkTo="#" _callback={moveRight} />
                <ButtonSecondaryLarge text="Terug" linkTo="/reservations" />
            </Styles.BtnWrapper>
        </Styles.Section>
    )
}

export default StepsExplainer
