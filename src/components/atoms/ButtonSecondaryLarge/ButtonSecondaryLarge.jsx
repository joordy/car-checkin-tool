// Imports
import * as Styles from './ButtonSecondaryLarge.styles.js'

// Component
const ButtonSecondaryLarge = ({ text, linkTo }) => {
    return <Styles.Button href={linkTo}>{text}</Styles.Button>
}

export default ButtonSecondaryLarge
