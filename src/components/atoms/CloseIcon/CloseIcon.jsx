// Imports
import * as Styles from './CloseIcon.styles.js'

// Component
const CloseIcon = ({ width, height, opacity, fill }) => {
    return (
        <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
            <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12.0232 9.49241L18.2761 15.7453C18.9886 16.4578 18.9886 17.556 18.2761 18.2685C17.9474 18.5972 17.4534 18.8176 17.0145 18.8176C16.5756 18.8176 16.0816 18.5991 15.7529 18.2685L9.49999 12.0156L3.24709 18.2685C2.91839 18.5972 2.42439 18.8176 1.98549 18.8176C1.54659 18.8176 1.05259 18.5991 0.723889 18.2685C0.0113891 17.556 0.0113891 16.4578 0.723889 15.7453L6.97679 9.49241L0.723889 3.24141C0.0113891 2.52701 0.0113891 1.43071 0.723889 0.718213C1.43639 0.0057129 2.53459 0.0057129 3.24709 0.718213L9.49999 6.97111L15.7529 0.718213C16.4654 0.0057129 17.5636 0.0057129 18.2761 0.718213C18.9886 1.43071 18.9886 2.52891 18.2761 3.24141L12.0232 9.49241Z" />
            </svg>
        </Styles.Icon>
    )
}

export default CloseIcon
