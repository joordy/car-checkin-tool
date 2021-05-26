// Imports
import * as Styles from './buttonPrimaryLarge.styles.js'

// Component
const ButtonPrimaryLarge = ({ text, linkTo, width, _callback, height }) => {
    return (
        <Styles.Button width={width} href={linkTo} onClick={_callback} height={height}>
            {text}
        </Styles.Button>
    )
}

export default ButtonPrimaryLarge
