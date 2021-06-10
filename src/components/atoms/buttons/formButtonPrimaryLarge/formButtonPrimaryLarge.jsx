// Imports
import * as Styles from './formButtonPrimaryLarge.styles.js'

// Component
const FormButtonPrimaryLarge = ({ text, width, type }) => {
    return (
        <Styles.Button width={width} type={type}>
            {text}
        </Styles.Button>
    )
}

export default FormButtonPrimaryLarge
