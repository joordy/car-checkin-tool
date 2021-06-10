// React & Module Imports
import * as Styles from './warnings.styles.js'

// Components
import { Icons } from 'components/atoms/index'

// React Component
const Warnings = ({ type, width, height, opacity, fill, onClick, children, classes }) => {
    switch (type) {
        case 'success':
            return (
                <Styles.Warnings
                    width={width}
                    height={height}
                    opacity={opacity}
                    fill={fill}
                    className={classes}
                >
                    <span>
                        <Icons type="success" width="1.5rem" height="1.5rem" />
                    </span>
                    <div>{children}</div>
                </Styles.Warnings>
            )
        case 'failed':
            return (
                <Styles.Warnings
                    width={width}
                    height={height}
                    opacity={opacity}
                    fill={fill}
                    className={classes}
                >
                    <span>
                        <Icons type="warning" width="1.5rem" height="1.5rem" />
                    </span>
                    <div>{children}</div>
                </Styles.Warnings>
            )
    }
}

export default Warnings
