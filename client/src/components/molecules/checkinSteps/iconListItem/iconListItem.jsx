// Imports
import * as Styles from './iconListItem.styles.js'
import { Icons } from 'components/atoms/index'

// Component
const IconListItem = ({ iconName, opacity, title, text, completed }) => {
    switch (iconName) {
        case 'UserCheckIcon':
            return (
                <Styles.Wrapper completed={completed}>
                    <div>
                        <Icons type="userCheck" width="30px" height="30px" opacity={opacity} />
                    </div>
                    <div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                </Styles.Wrapper>
            )
        case 'CreditcardIcon':
            return (
                <Styles.Wrapper completed={completed}>
                    <div>
                        <Icons type="creditcard" width="30px" height="30px" opacity={opacity} />
                    </div>
                    <div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                </Styles.Wrapper>
            )
        case 'DataIcon':
            return (
                <Styles.Wrapper completed={completed}>
                    <div>
                        <Icons type="data" width="30px" height="30px" opacity={opacity} />
                    </div>
                    <div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                </Styles.Wrapper>
            )
    }
}

export default IconListItem
