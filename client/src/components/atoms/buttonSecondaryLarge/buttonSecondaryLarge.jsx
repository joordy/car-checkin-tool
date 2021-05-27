// Imports
import * as Styles from './buttonSecondaryLarge.styles.js'

// Component
const ButtonSecondaryLarge = ({ text, linkTo, _callback }) => {
    return (
        <Styles.Button href={linkTo} onClick={_callback}>
            {text}
        </Styles.Button>
    )
}

export default ButtonSecondaryLarge
