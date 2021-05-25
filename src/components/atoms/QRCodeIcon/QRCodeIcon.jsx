// Imports
import * as Styles from './QRCodeIcon.styles.js'

// Component
const QRCodeIcon = ({ width, height, opacity, fill }) => {
    return (
        <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
            <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M3.125 2.125H2.125V3.125V6.25V7.25H3.125H6.25H7.25V6.25V3.125V2.125H6.25H3.125ZM18.75 7.25H19.75V6.25V3.125V2.125H18.75H15.625H14.625V3.125V6.25V7.25H15.625H18.75ZM3.125 14.625H2.125V15.625V18.75V19.75H3.125H6.25H7.25V18.75V15.625V14.625H6.25H3.125ZM14.625 17.1875V20.875H13.5V13.5H16.1875V14.0625V15.0625H17.1875H20.3125H20.875V17.75H18.1875V17.1875V16.1875H17.1875H15.625H14.625V17.1875ZM8.375 8.375H1V1H8.375V8.375ZM20.875 8.375H13.5V1H20.875V8.375ZM8.375 13.5V20.875H1V13.5H8.375Z"
                    strokeWidth="2"
                />
            </svg>
        </Styles.Icon>
    )
}

export default QRCodeIcon
