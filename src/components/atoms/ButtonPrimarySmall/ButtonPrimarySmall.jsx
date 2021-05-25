// Imports
import * as Styles from './ButtonPrimarySmall.styles.js'

// Component
const ButtonPrimarySmall = ({ text, linkTo }) => {
    return <Styles.Button href={linkTo}>{text}</Styles.Button>
}

export default ButtonPrimarySmall
