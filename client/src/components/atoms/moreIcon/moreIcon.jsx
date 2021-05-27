// Imports
import * as Styles from './moreIcon.styles.js'

// Component
const MoreIcon = ({ width, height, opacity, fill }) => {
    return (
        <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
            <svg
                width="4"
                height="20"
                viewBox="0 0 4 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="2" cy="2" r="2" />
                <circle cx="2" cy="10" r="2" />
                <circle cx="2" cy="18" r="2" />
            </svg>
        </Styles.Icon>
    )
}

export default MoreIcon
