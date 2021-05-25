// Imports
import * as Styles from './ButtonPrimaryLarge.styles.js'

// Component
const ButtonPrimaryLarge = ({ text, linkTo, width }) => {
    return (
        <Styles.Button width={width} href={linkTo}>
            {text}
        </Styles.Button>
    )
}

export default ButtonPrimaryLarge
