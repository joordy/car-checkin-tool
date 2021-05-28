// React imports
import React from 'react'
import * as Styles from './stepsExplainer.styles.js'
import { VerificationButtons, IconListItem } from 'components/molecules/index'

// React component
const StepsExplainer = ({ backLink, step }) => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-100vw)'
    }

    let title
    let completed = [false, false, false]
    let buttonText = 'Volgende'
    let time
    if (step == 0) {
        title = 'Inchecken in 3 stappen'
        buttonText = 'Check gegevens'
        time = <p className="time">Dit proces neemt ongeveer 5 minuten van jouw tijd in beslag.</p>
    } else if (step == 1) {
        title = 'Gelukt! Je kunt verder naar stap 2'
        completed[0] = true
        buttonText = 'Start verificatie'
    } else if (step == 2) {
        title = 'Gelukt! Je bent bijna klaar'
        completed[0] = true
        completed[1] = true
        buttonText = 'Regel borg'
    } else if (step == 3) {
        title = 'Geregeld! Ontvang nu je QR-code'
        completed[0] = true
        completed[1] = true
        completed[2] = true
        buttonText = 'Afronden'
    }

    return (
        <Styles.Section id="introduction" step={step}>
            <article>
                <h1>{title}</h1>
                <ul>
                    <IconListItem
                        iconName="DataIcon"
                        opacity="0.75"
                        title="Gegevens"
                        text="Controleer of de gegevens van je reservering juist zijn."
                        completed={completed[0]}
                    />
                    <IconListItem
                        iconName="UserCheckIcon"
                        opacity="0.75"
                        title="Verificatie"
                        text="We controleren of je een geldig rijbewijs hebt en of je minimaal 23 jaar oud bent."
                        completed={completed[1]}
                    />
                    <IconListItem
                        iconName="CreditcardIcon"
                        opacity="0.75"
                        title="Borg"
                        text="Geef een garantie op je creditcard of betaal contant."
                        completed={completed[2]}
                    />
                </ul>
                {time}
            </article>

            <VerificationButtons
                textPrimary={buttonText}
                textSecondary="Terug"
                linkPrimary="#"
                linkSecondary={backLink}
                callbackPrimary={moveRight}
            />
        </Styles.Section>
    )
}

export default StepsExplainer
