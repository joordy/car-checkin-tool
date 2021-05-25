// Imports
import * as Styles from './InlineButton.styles.js'

// Component
const InlineButton = ({ text, linkText, linkTo }) => {
    return (
        <Styles.Button>
            {text} <a href={linkTo}>{linkText}</a>
        </Styles.Button>
    )
}

export default InlineButton
