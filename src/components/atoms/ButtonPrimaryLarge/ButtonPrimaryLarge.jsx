// Imports
import * as Styles from './ButtonPrimaryLarge.styles.js'

// Component
const ButtonPrimaryLarge = ({ text, linkTo }) => {
    return <Styles.Button href={linkTo}>{text}</Styles.Button>
}

export default ButtonPrimaryLarge
