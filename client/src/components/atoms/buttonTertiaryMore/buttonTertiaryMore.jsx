// Imports
import * as Styles from './buttonTertiaryMore.styles.js'
import { Icons } from 'components/atoms/index'

// Component
const ButtonTertiaryMore = ({ linkTo, height }) => {
    return (
        <Styles.Button href={linkTo} height={height}>
            <Icons type="more" width="23px" height="23px" />
        </Styles.Button>
    )
}

export default ButtonTertiaryMore
