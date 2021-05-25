// Imports
import * as Styles from './ButtonTertiaryMore.styles.js'
import { MoreIcon } from 'components/atoms/index'

// Component
const ButtonTertiaryMore = ({ linkTo }) => {
    return (
        <Styles.Button href={linkTo}>
            <MoreIcon width="23px" height="23px" />
        </Styles.Button>
    )
}

export default ButtonTertiaryMore
