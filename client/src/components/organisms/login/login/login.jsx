// React imports
import React from 'react'
import * as Styles from './login.styles.js'
import {
    TextInput,
    PasswordInput,
    Label,
    InlineButton,
    ButtonSecondary,
    ButtonSecondaryLarge,
    FormButtonPrimaryLarge,
} from 'components/atoms/index.js'

// React component
const Login = () => {
    const carsImgSrc =
        'https://user-images.githubusercontent.com/55750107/119476215-23c2cd80-bd4e-11eb-9970-9081f852a6ae.png'
    const logoImgSrc = 'https://svgshare.com/i/XWd.svg'

    function asd() {
        let header = document.querySelector('header')
        header.classList.add('slideOut')
    }

    return (
        <>
            <Styles.Login>
                <main>
                    <h1>Log in met je EuropAuto account</h1>
                    <p>Dit is hetzelfde account waarmee je je reservering hebt gemaakt.</p>
                    <form action="/reservations">
                        <Label text="E-mailadres" forId="email" />
                        <TextInput
                            type="email"
                            id="email"
                            name="email"
                            placeholder="voorbeeld@voorbeeld.com"
                        />
                        <Label text="Wachtwoord" forId="password" />
                        <PasswordInput id="password" name="password" />
                        <InlineButton
                            text="Wachtwoord vergeten?"
                            linkText="Herstellen"
                            linkTo="/two"
                        />
                        <FormButtonPrimaryLarge text="Inloggen" type="submit" />
                        <ButtonSecondary
                            type="href"
                            text="Registreren"
                            linkTo="https://www.europcar.com/EBE/module/driver/AuthenticateDrivers1000.do?action=7"
                        />
                    </form>
                </main>
            </Styles.Login>
        </>
    )
}

export default Login
