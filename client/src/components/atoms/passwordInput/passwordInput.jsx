// Imports
// Source: https://reactjs.org/docs/conditional-rendering.html
import { useState } from 'react'
import * as Styles from './passwordInput.styles.js'
import { Icons } from 'components/atoms/index'

// Component
const Input = ({}) => {
    const [passwordShown, setPasswordShown] = useState(false)
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true)
    }

    let icon
    if (passwordShown) {
        icon = <Icons type="eyeOff" width="25px" height="25px" onClick={togglePasswordVisiblity} />
    } else {
        icon = <Icons type="eye" width="25px" height="25px" onClick={togglePasswordVisiblity} />
    }

    return (
        <Styles.Wrapper>
            <input
                type={passwordShown ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder={passwordShown ? 'password' : '••••••••'}
            />
            {icon}
        </Styles.Wrapper>
    )
}

export default Input
