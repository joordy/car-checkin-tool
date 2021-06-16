// React imports
import { useState } from 'react'
import axios from 'axios'
import * as Styles from './loginDesktop.styles.js'
import supabase from 'db/supabase.js'

// Component imports
import {
    TextInput,
    PasswordInput,
    Label,
    InlineButton,
    FormButtonPrimaryLarge,
} from 'components/atoms/index.js'
import { LoginError } from 'components/molecules/index'
import { Icons } from 'components/atoms/index'

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
                        <div>
                            <img src={logoImgSrc} alt="Logo" />
                            <h1>Gemakkelijk online inchecken</h1>
                            <p>En een overzicht van jouw reserveringen bij Europcar</p>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <Icons type="users" width="1.8em" height="1.8em" />
                                    <div>
                                        <p>Niet meer in de rij staan</p>
                                        <p>Je haalt je auto snel op bij de Express balie</p>
                                    </div>
                                </li>
                                <li>
                                    <Icons type="forward" width="1.8em" height="1.8em" />
                                    <div>
                                        <p>Het is zo gedaan</p>
                                        <p>
                                            Bevestig je reservering & identiteit en regel de borg.
                                            Klaar binnen 5 minuten.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <Icons type="lock" width="1.7em" height="1.7em" />
                                    <div>
                                        <p>Het is veilig</p>
                                        <p>
                                            We beveiligen je data en doen niets zonder jouw
                                            toestemming.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
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
