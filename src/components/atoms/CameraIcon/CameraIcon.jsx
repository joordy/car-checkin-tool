// Imports
import * as Styles from './CameraIcon.styles.js'

// Component
const CameraIcon = ({ width, height, opacity, fill }) => {
    return (
        <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
            <svg
                width="47"
                height="39"
                viewBox="0 0 47 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M45 33.2727C45 34.3095 44.5882 35.3038 43.8551 36.0369C43.122 36.77 42.1277 37.1818 41.0909 37.1818H5.90909C4.87234 37.1818 3.87804 36.77 3.14495 36.0369C2.41185 35.3038 2 34.3095 2 33.2727V11.7727C2 10.736 2.41185 9.74168 3.14495 9.00858C3.87804 8.27549 4.87234 7.86364 5.90909 7.86364H13.7273L17.6364 2H29.3636L33.2727 7.86364H41.0909C42.1277 7.86364 43.122 8.27549 43.8551 9.00858C44.5882 9.74168 45 10.736 45 11.7727V33.2727Z"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M23.5 29.3637C27.8179 29.3637 31.3182 25.8633 31.3182 21.5455C31.3182 17.2276 27.8179 13.7273 23.5 13.7273C19.1821 13.7273 15.6818 17.2276 15.6818 21.5455C15.6818 25.8633 19.1821 29.3637 23.5 29.3637Z"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Styles.Icon>
    )
}

export default CameraIcon
