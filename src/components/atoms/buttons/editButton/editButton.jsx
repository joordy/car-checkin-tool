// React components & imports
import * as Styles from './editButton.styles'
import { Icons } from 'components/atoms/index'

// Component
const EditButton = ({ _callback }) => {
    return (
        <Styles.EditButton onClick={_callback}>
            <Icons type="edit" width="16px" height="16px" /> Bewerken
        </Styles.EditButton>
    )
}

export default EditButton
