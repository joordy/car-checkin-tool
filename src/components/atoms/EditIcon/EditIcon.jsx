// Imports
import * as Styles from './EditIcon.styles.js'

// Component
const EditIcon = ({ width, height, opacity, fill }) => {
    return (
        <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
            <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.8945 1.18143C12.026 1.04122 12.1794 0.932766 12.3446 0.859754C12.5097 0.786807 12.6848 0.75 12.8603 0.75C13.0359 0.75 13.2109 0.786807 13.376 0.859754C13.5413 0.932766 13.6947 1.04122 13.8262 1.18143C13.9577 1.32175 14.0644 1.49091 14.138 1.68041C14.2116 1.86995 14.25 2.07461 14.25 2.28232C14.25 2.49003 14.2116 2.69469 14.138 2.88423C14.0644 3.07373 13.9577 3.24289 13.8262 3.38321L3.754 14.1268L1.05209 14.9128L1.81364 11.9343L11.8945 1.18143Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Styles.Icon>
    )
}

export default EditIcon
