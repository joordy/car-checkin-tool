// Imports
import * as Styles from './buttonSecondaryLarge.styles.js'

// Component
const ButtonSecondaryLarge = ({ text, linkTo }) => {
    return <Styles.Button href={linkTo}>{text}</Styles.Button>
}

export default ButtonSecondaryLarge
