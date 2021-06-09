// React imports
import * as Styles from './savedMessage.styles.js'
import { Icons } from 'components/atoms/index.js'

// React component
const SavedMessage = () => {
    return (
        <Styles.BtnWrapper>
            <Icons type="success" width="24px" height="24px" stroke="black" />
            <p>Wijzigingen succesvol opgeslagen! Controleer de wijzigingen hieronder.</p>
        </Styles.BtnWrapper>
    )
}

export default SavedMessage
