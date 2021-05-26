// React imports
import React from 'react'
import * as Styles from './Login.styles.js'
import { Login, LoginLanding } from 'components/organisms/index'
// React component
const LoginPage = () => {
    return (
        <>
            <LoginLanding />
            <Login />
        </>
    )
}

export default LoginPage
