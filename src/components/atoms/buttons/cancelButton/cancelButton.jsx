// React components & imports
import * as Styles from './cancelButton.styles'
import { Icons } from 'components/atoms/index'

// Component
const CancelButton = ({ _callback }) => {
    // Return component based on the requested type of button
    return (
        <Styles.CancelButton onClick={_callback}>
            <Icons type="close" width="16px" height="16px" fill="red" /> Annuleren
        </Styles.CancelButton>
    )
}

export default CancelButton
