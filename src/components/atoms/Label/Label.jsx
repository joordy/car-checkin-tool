// Imports
import * as Styles from './Label.styles.js'

// Component
const Label = ({ text, forId }) => {
    return <Styles.Label htmlFor={forId}>{text}</Styles.Label>
}

export default Label
