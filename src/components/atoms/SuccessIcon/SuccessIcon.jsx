// Imports
import * as Styles from './SuccessIcon.styles.js'

// Component
const SuccessIcon = ({ width, height, opacity, fill }) => {
    return (
        <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
            <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M20 10.4345V11.3251C19.9988 13.4126 19.3355 15.4438 18.1089 17.1158C16.8823 18.7877 15.1581 20.0109 13.1936 20.6027C11.2291 21.1946 9.12939 21.1235 7.20775 20.4001C5.2861 19.6767 3.64542 18.3396 2.53041 16.5884C1.4154 14.8372 0.885802 12.7656 1.02059 10.6826C1.15538 8.59966 1.94735 6.61688 3.27837 5.03001C4.60938 3.44315 6.40814 2.33722 8.40638 1.87717C10.4046 1.41712 12.4953 1.6276 14.3665 2.47722"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M20 3.58105L10.5 13.2711L7.65002 10.367"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Styles.Icon>
    )
}

export default SuccessIcon
