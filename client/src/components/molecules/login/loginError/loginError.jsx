// React imports
import * as Styles from './loginError.styles.js'
import { Icons } from 'components/atoms/index.js'

// React component
const LoginError = () => {
    return (
        <Styles.MsgWrapper>
            <Icons type="warning" width="24px" height="24px" stroke="black" />
            <p>De combinatie van het e-mailadres en wachtwoord is bij ons niet bekend.</p>
        </Styles.MsgWrapper>
    )
}

export default LoginError
