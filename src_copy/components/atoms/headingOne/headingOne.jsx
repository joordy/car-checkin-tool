// Imports
import * as Styles from './headingOne.styles.js'

// Component
const HeadingOne = ({ text, link, linkTo }) => {
    return (
        <Styles.H1>
            {text} <a href={linkTo}>{link}</a>
        </Styles.H1>
    )
}

export default HeadingOne
