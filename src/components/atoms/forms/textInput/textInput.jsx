// Imports
import * as Styles from './textInput.styles.js'

// Component
const Input = ({ type, id, name, placeholder, defaultValue }) => {
    return (
        <Styles.Input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
        />
    )
}

export default Input
