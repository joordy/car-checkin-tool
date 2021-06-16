// React imports
import { useState } from 'react'
import axios from 'axios'
import * as Styles from './login.styles.js'
import supabase from 'db/supabase.js'

// Components
import {
    TextInput,
    PasswordInput,
    Label,
    InlineButton,
    ButtonSecondary,
    FormButtonPrimaryLarge,
} from 'components/atoms/index.js'
import { LoginError } from 'components/molecules/index'

// React component
const Login = () => {
    let email = ''
    let loggedIn = false

    const [showWrongEmailText, setShowWrongEmailText] = useState(false)

    const postData = async (loggedInUser) => {
        await axios
            .post(
                'https://us-central1-car-check-in.cloudfunctions.net/app/api/reservations',
                loggedInUser,
            )
            .then((res) => {
                setTimeout(() => {
                    window.location.href = '/reservations'
                }, 100)
            })
    }

    const readDB = async (email) => {
        const { data, error } = await supabase.from('users').select().filter('email', 'eq', email)
        if (!error) {
            if (data[0] !== undefined) {
                postData(data[0])
                loggedIn = true
            } else {
                loggedIn = false
            }
        } else {
            consolHe.log(error)
        }
    }

    async function handleSubmit(event) {
        event.preventDefault()
        email = event.target.email.value
        await readDB(email)
        if (!loggedIn) {
            setShowWrongEmailText((showWrongEmailText) => !showWrongEmailText)
        }
        // if (loggedIn) {
        //     window.location.replace('/reservations')
        // } else {
        //     setShowWrongEmailText((showWrongEmailText) => !showWrongEmailText)
        // }
    }

    return (
        <>
            <Styles.Login>
                <main>
                    <h1>Log in met je EuropAuto account</h1>
                    <p>Dit is hetzelfde account waarmee je je reservering hebt gemaakt.</p>
                    {showWrongEmailText && <LoginError />}
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
