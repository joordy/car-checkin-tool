// Imports
import * as Styles from './creditcardIcon.styles.js'

// Component
const CreditcardIcon = ({ width, height, opacity, fill }) => {
    return (
        <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
            <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    opacity="0.75"
                    d="M21 1H3C1.89543 1 1 1.89543 1 3V15C1 16.1046 1.89543 17 3 17H21C22.1046 17 23 16.1046 23 15V3C23 1.89543 22.1046 1 21 1Z"
                    stroke="#379E09"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    opacity="0.75"
                    d="M1 7H23"
                    stroke="#379E09"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Styles.Icon>
    )
}

export default CreditcardIcon
