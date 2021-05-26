// Imports
import * as Styles from './buttonPrimaryLarge.styles.js'

// Component
const ButtonPrimaryLarge = ({ text, linkTo, width, height }) => {
    console.log({ text, linkTo, width, height })
    return (
        <Styles.Button width={width} href={linkTo} height={height}>
            {text}
        </Styles.Button>
    )
}

export default ButtonPrimaryLarge
