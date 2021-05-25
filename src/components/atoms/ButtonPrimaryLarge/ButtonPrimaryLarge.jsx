// Imports
import * as Styles from './ButtonPrimaryLarge.styles.js'

// Component
const ButtonPrimaryLarge = ({ text, linkTo, width, _callback }) => {
    return (
        <Styles.Button width={width} href={linkTo} onClick={_callback}>
            {text}
        </Styles.Button>
    )
}

export default ButtonPrimaryLarge
