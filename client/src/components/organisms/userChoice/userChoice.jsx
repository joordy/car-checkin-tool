// React imports
import React from 'react'
import * as Styles from './userChoice.styles.js'
import { Label, CloseIcon } from 'components/atoms/index'
import { VerificationButtons, RadioInput } from 'components/molecules/index'

// React component
const UserChoice = ({
    backLink,
    title,
    text,
    labelText,
    oneTitle,
    oneText,
    twoTitle,
    twoText,
    threeTitle,
    threeText,
    progressText,
    deposit,
}) => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(0)'
    }

    const moveLeft = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-200vw)'
    }

    let depositAmount
    if (deposit) {
        depositAmount = (
            <section>
                <Label text="Borg" />
                <p>€ {deposit}</p>
            </section>
        )
    }

    return (
        <Styles.Section>
            <header>
                <h1>{title}</h1>
                <p>{text}</p>
                <CloseIcon width="1.5rem" height="1.5em" />
            </header>
            <article>
                {depositAmount}
                <form>
                    <Label text={labelText} />
                    <RadioInput
                        title={oneTitle}
                        text={oneText}
                        name="choose"
                        value="now"
                        id="now"
                        checked
                    />
                    <RadioInput
                        title={twoTitle}
                        text={twoText}
                        name="choose"
                        value="location"
                        id="location"
                    />
                    <RadioInput
                        title={threeTitle}
                        text={threeText}
                        name="choose"
                        value="skip"
                        id="skip"
                    />
                </form>
                <p className="progress">{progressText}</p>
            </article>

            <VerificationButtons
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

export default UserChoice
