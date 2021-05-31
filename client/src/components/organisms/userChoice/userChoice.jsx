// React imports
import React from 'react'
import * as Styles from './userChoice.styles.js'
import { Label, CloseIcon } from 'components/atoms/index'
import { VerificationButtons, RadioInput } from 'components/molecules/index'

// React component
const UserChoice = ({ backLink, title, text, labelText }) => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-100vw)'
    }

    return (
        <Styles.Section>
            <header>
                <h1>{title}</h1>
                <p>{text}</p>
                <CloseIcon width="1.5rem" height="1.5em" />
            </header>
            <article>
                <form>
                    <Label text={labelText} />
                    <RadioInput
                        title="Nu, online"
                        text="Dit is de snelste optie"
                        name="choose"
                        value="now"
                        id="now"
                        checked
                    />
                    <RadioInput
                        title="Ter plekke"
                        text="Bij de Europcar locatie"
                        name="choose"
                        value="location"
                        id="location"
                    />
                    <RadioInput
                        title="Stap voor nu overslaan"
                        text="Je kunt later alsnog een keuze maken."
                        name="choose"
                        value="skip"
                        id="skip"
                    />
                </form>
            </article>

            <VerificationButtons
                textPrimary="Volgende"
                textSecondary="Terug"
                linkPrimary="#"
                linkSecondary={backLink}
                callbackPrimary={moveRight}
            />
        </Styles.Section>
    )
}

export default UserChoice
