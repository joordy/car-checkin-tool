// React imports
import { useState } from 'react'
import axios from 'axios'
import * as Styles from './loginDesktop.styles.js'
import supabase from 'db/supabase.js'
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
const LoginDesktop = () => {
    let email = ''
    let loggedIn = false

    const [showWrongEmailText, setShowWrongEmailText] = useState(false)

    const logoImgSrc = 'https://svgshare.com/i/XWd.svg'

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
            console.log(error)
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
            <Styles.LoginDesktop>
                <header>
                    <section>
                        <img src={logoImgSrc} alt="Logo" />
                        <h1>Gemakkelijk online inchecken</h1>
                        <p>En een overzicht van jouw reserveringen bij Europcar</p>
                    </section>
                </header>
                <div>
                    <a
                        className="reservation"
                        href="https://www.europcar.com/EBE/module/driver/AuthenticateDrivers1000.do?action=7"
                    >
                        Reserveren
                    </a>
                    {showWrongEmailText && <LoginError />}
                    <form onSubmit={handleSubmit}>
                        <ul className="inputs">
                            <li>
                                <Label text="E-mailadres" forId="email" />
                                <TextInput
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="voorbeeld@voorbeeld.com"
                                />
                            </li>
                            <li>
                                <Label text="Wachtwoord" forId="password" />
                                <PasswordInput id="password" name="password" />
                            </li>
                        </ul>

                        <InlineButton
                            text="Wachtwoord vergeten?"
                            linkText="Herstellen"
                            linkTo="/two"
                        />
                        <ul className="buttons">
                            <li>
                                <FormButtonPrimaryLarge text="Inloggen" type="submit" />
                            </li>
                        </ul>
                    </form>
                </div>
            </Styles.LoginDesktop>
        </>
    )
}

export default LoginDesktop
