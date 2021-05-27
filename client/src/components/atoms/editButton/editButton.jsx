import * as Styles from './editButton.styles'
import { EditIcon } from 'components/atoms/index'

const EditButton = ({ _callback }) => {
    return (
        <Styles.EditButton onClick={_callback}>
            <EditIcon width="16px" height="16px" /> Bewerken
        </Styles.EditButton>
    )
}

export default EditButton
