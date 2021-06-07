// React imports
import React from 'react'
import * as Styles from './stepsExplainer.styles.js'
import { VerificationButtons, IconListItem } from 'components/molecules/index'

// React component
const StepsExplainer = ({ backLink, completedSteps }) => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-100vw)'
    }

    let title
    let buttonText = 'Volgende'
    let time

    const { orderDetails, verificationProcess, payMethod, paidDeposit } = completedSteps

    if (!orderDetails && !verificationProcess && !paidDeposit) {
        title = 'Inchecken in 3 stappen'
        buttonText = 'Check gegevens'
        time = <p className="time">Dit proces neemt ongeveer 5 minuten van jouw tijd in beslag.</p>
    } else if (orderDetails && !verificationProcess && !paidDeposit) {
        title = 'Gelukt! Je kunt verder naar stap 2'
        buttonText = 'Start verificatie'
    } else if (orderDetails && verificationProcess && !paidDeposit && !payMethod) {
        title = 'Gelukt! Je bent bijna klaar'
        buttonText = 'Regel borg'
    } else if (orderDetails && verificationProcess && paidDeposit) {
        title = 'Geregeld! Ontvang nu je QR-code'
        buttonText = 'Afronden'
    } else if (orderDetails && !verificationProcess && paidDeposit) {
        title = 'Ga verder met de verificatie'
        buttonText = 'Doorgaan'
    } else if (orderDetails && verificationProcess && !paidDeposit && payMethod) {
        title = 'Bijna klaar! Regel nu de borg '
        buttonText = 'Doorgaan'
    }

    return (
        <Styles.Section id="introduction">
            <article>
                <h1>{title}</h1>
                <ul>
                    <IconListItem
                        iconName="DataIcon"
                        opacity="0.75"
                        title="Gegevens"
                        text="Controleer of de gegevens van je reservering juist zijn."
                        completed={orderDetails}
                    />
                    <IconListItem
                        iconName="UserCheckIcon"
                        opacity="0.75"
                        title="Verificatie"
                        text="We controleren of je een geldig rijbewijs hebt en of je minimaal 23 jaar oud bent."
                        completed={verificationProcess}
                    />
                    <IconListItem
                        iconName="CreditcardIcon"
                        opacity="0.75"
                        title="Borg"
                        text="Geef een garantie op je creditcard of betaal contant."
                        completed={paidDeposit}
                    />
                </ul>
                {time}
            </article>

            <VerificationButtons
                typeSecondary="href"
                typePrimary="btn"
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
