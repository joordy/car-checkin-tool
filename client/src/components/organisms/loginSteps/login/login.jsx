// React imports
import React, { useState } from 'react'
import * as Styles from './login.styles.js'
import supabase from 'db/supabase.js'
import {
    TextInput,
    PasswordInput,
    Label,
    InlineButton,
    ButtonSecondary,
    FormButtonPrimaryLarge,
} from 'components/atoms/index.js'

// React component
const Login = () => {
    let email = ''
    let loggedIn = false

    const [showWrongEmailText, setshowWrongEmailText] = useState(false)

    const readDB = async (email) => {
        const { data, error } = await supabase.from('users').select().filter('email', 'eq', email)
        if (!error) {
            if (data[0] !== undefined) {
                setUser(data[0])
                loggedIn = true
            } else {
                loggedIn = false
            }
        } else {
            console.log(error)
        }
    }

    function setUser(user) {
        window.localStorage.setItem('CurrentUser', JSON.stringify(user))
        console.log(window.localStorage)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        email = event.target.email.value
        window.setTimeout(await readDB(email), 2000)
        if (loggedIn) {
            window.location.replace('/reservations')
        } else {
            setshowWrongEmailText((showWrongEmailText) => !showWrongEmailText)
        }
    }

    return (
        <>
            <Styles.Login>
                <main>
                    <h1>Log in met je EuropAuto account</h1>
                    <p>Dit is hetzelfde account waarmee je je reservering hebt gemaakt.</p>
                    {showWrongEmailText && (
                        <p className="error">Dit email is niet bekend bij ons</p>
                    )}
                    <form onSubmit={handleSubmit}>
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
