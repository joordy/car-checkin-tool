// React & Module Imports
import * as Styles from './warnings.styles.js'

// Components
import { Icons } from 'components/atoms/index'

// React Component
const Warnings = ({ type, width, height, opacity, fill, onClick, children }) => {
    switch (type) {
        case 'success':
            return (
                <Styles.Warnings width={width} height={height} opacity={opacity} fill={fill}>
                    <span>
                        <Icons type="success" />
                    </span>
                    <div>{children}</div>
                </Styles.Warnings>
            )
        case 'failed':
            return (
                <Styles.Warnings width={width} height={height} opacity={opacity} fill={fill}>
                    <span>
                        <Icons type="success" />
                    </span>
                    <div>{children}</div>
                </Styles.Warnings>
            )
    }
}

export default Warnings
