// Imports
import * as Styles from './iconListItem.styles.js'
import { UserCheckIcon, CreditcardIcon, QRCodeIcon } from 'components/atoms/index'

// Component
const IconListItem = ({ iconName, opacity, title, text, completed }) => {
    let icon
    if (iconName == 'UserCheckIcon') {
        icon = <UserCheckIcon width="30px" height="30px" opacity={opacity} />
    } else if (iconName == 'CreditcardIcon') {
        icon = <CreditcardIcon width="30px" height="30px" />
    } else if (iconName == 'QRCodeIcon') {
        icon = <QRCodeIcon width="27px" height="27px" opacity={opacity} />
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
