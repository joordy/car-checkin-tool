// Imports
import * as Styles from './iconListItem.styles.js'
import { Icons } from 'components/atoms/index'

// Component
const IconListItem = ({ iconName, opacity, title, text, completed }) => {
    let icon
    if (iconName == 'UserCheckIcon') {
        icon = <Icons type="userCheck" width="30px" height="30px" opacity={opacity} />
    } else if (iconName == 'CreditcardIcon') {
        icon = <Icons type="creditcard" width="30px" height="30px" opacity={opacity} />
    } else if (iconName == 'DataIcon') {
        icon = <Icons type="data" width="30px" height="30px" opacity={opacity} />
    }

    return (
        <Styles.Wrapper completed={completed}>
            <div>{icon}</div>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </Styles.Wrapper>
    )
}

export default IconListItem
