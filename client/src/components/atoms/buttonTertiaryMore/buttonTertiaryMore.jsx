// Imports
import * as Styles from './buttonTertiaryMore.styles.js'
import { Icons } from 'components/atoms/index'

// Component
const ButtonTertiaryMore = ({ text, linkTo, height, _callback }) => {
    return (
        <Styles.Button href={linkTo} height={height} onClick={_callback}>
            {text}
        </Styles.Button>
    )
}

export default ButtonTertiaryMore
