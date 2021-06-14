// React imports
import React from 'react'
import * as Styles from './loginLanding.styles.js'
import { ButtonPrimary, Icons } from 'components/atoms/index.js'

// React component
const LoginLanding = () => {
    const carsImgSrc =
        'https://user-images.githubusercontent.com/55750107/119476215-23c2cd80-bd4e-11eb-9970-9081f852a6ae.png'
    const logoImgSrc = 'https://svgshare.com/i/XWd.svg'

    function closeHeader() {
        let header = document.querySelector('header')
        header.classList.add('slideOut')
    }

    return (
        <>
            <Styles.LoginLanding>
                <header>
                    <img src={logoImgSrc} alt="Logo" />
                    <img src={carsImgSrc} alt="Car image" />
                    <h1>
                        Gemakkelijk <br /> online inchecken
                    </h1>
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
                                    Bevestig je reservering & identiteit en regel de borg. Klaar
                                    binnen 5 minuten.
                                </p>
                            </div>
                        </li>
                        <li>
                            <Icons type="lock" width="1.7em" height="1.7em" />
                            <div>
                                <p>Het is veilig</p>
                                <p>We beveiligen je data en doen niets zonder jouw toestemming.</p>
                            </div>
                        </li>
                    </ul>
                    <ButtonPrimary
                        type="btn"
                        text="Check in"
                        width="285px"
                        _callback={closeHeader}
                    />
                </header>
            </Styles.LoginLanding>
        </>
    )
}

export default LoginLanding
