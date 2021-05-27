// Imports
import * as Styles from './buttonSecondarySmall.styles.js'

// Component
const ButtonSecondarySmall = ({ text, linkTo }) => {
    return <Styles.Button href={linkTo}>{text}</Styles.Button>
}

export default ButtonSecondarySmall
