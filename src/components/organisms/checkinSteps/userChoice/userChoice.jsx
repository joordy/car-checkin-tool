// React imports
import React, { useState } from 'react'
import * as Styles from './userChoice.styles.js'
import { Label, Icons } from 'components/atoms/index'
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
    movingRight,
    movingLeft,
}) => {
    const [selected, setSelected] = useState('now')

    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = `translateX(${movingRight}vw)`
    }

    const moveLeft = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = `translateX(${movingLeft}vw)`
    }

    const changeState = (e) => {
        console.log(e.currentTarget.value)
        setSelected(e.currentTarget.value)
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
            <div className="testje">
                <header>
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <Icons type="close" width="1.5rem" height="1.5em" />
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
                            changeState={changeState}
                            checked
                        />
                        <RadioInput
                            title={twoTitle}
                            text={twoText}
                            name="choose"
                            value="location"
                            id="location"
                            changeState={changeState}
                        />
                        <RadioInput
                            title={threeTitle}
                            text={threeText}
                            name="choose"
                            value="skip"
                            id="skip"
                            changeState={changeState}
                        />
                    </form>
                    <p className="progress">{progressText}</p>
                </article>
            </div>

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

export default UserChoice
