// Imports
import * as Styles from './label.styles.js'

// Component
const Label = ({ text, forId }) => {
    return <Styles.Label htmlFor={forId}>{text}</Styles.Label>
}

export default Label
