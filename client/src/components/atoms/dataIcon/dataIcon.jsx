// Imports
import * as Styles from './dataIcon.styles.js'

// Component
const dataIcon = ({ width, height, opacity, fill }) => {
    return (
        <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
            <svg
                width="19"
                height="23"
                viewBox="0 0 19 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path
                        d="M11.5 1H3.1C2.54305 1 2.0089 1.22125 1.61508 1.61508C1.22125 2.0089 1 2.54305 1 3.1V19.9C1 20.457 1.22125 20.9911 1.61508 21.3849C2.0089 21.7787 2.54305 22 3.1 22H15.7C16.257 22 16.7911 21.7787 17.1849 21.3849C17.5787 20.9911 17.8 20.457 17.8 19.9V7.3L11.5 1Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.25 14.6499H12.55"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            </svg>
        </Styles.Icon>
    )
}

export default dataIcon
