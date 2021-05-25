// React imports
import React from 'react'
import * as Styles from './LoginLanding.styles.js'

// React component
const LoginLanding = () => {
    const carsImgSrc =
        'https://user-images.githubusercontent.com/55750107/119476215-23c2cd80-bd4e-11eb-9970-9081f852a6ae.png'
    const logoImgSrc = 'https://svgshare.com/i/XWd.svg'

    return (
        <>
            <Styles.LoginLanding>
                <header>
                    <img src={logoImgSrc} alt="Logo" />
                    <img src={carsImgSrc} alt="Car image" />
                    <h1>
                        Gemakkelijk <br /> online inchecken
                    </h1>
                </header>
            </Styles.LoginLanding>
        </>
    )
}

export default LoginLanding
