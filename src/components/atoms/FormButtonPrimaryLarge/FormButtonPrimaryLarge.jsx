// Imports
import * as Styles from './FormButtonPrimaryLarge.styles.js'

// Component
const FormButtonPrimaryLarge = ({ text, width, type }) => {
    return (
        <Styles.Button width={width} type={type}>
            {text}
        </Styles.Button>
    )
}

export default FormButtonPrimaryLarge
