// Imports
import * as Styles from './textInput.styles.js'

// Component
const Input = ({ type, id, name, placeholder }) => {
    return <Styles.Input type={type} id={id} name={name} placeholder={placeholder} />
}

export default Input
