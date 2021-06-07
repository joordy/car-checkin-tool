// React components & imports
import * as Styles from './buttonPrimary.styles.js'

// Component
const ButtonPrimary = ({ type, text, linkTo, width, _callback, height, id, disabled }) => {
    switch (type) {
        case 'btn':
            return (
                <Styles.Button
                    width={width}
                    href={linkTo}
                    onClick={_callback}
                    height={height}
                    id={id}
                    disabled={disabled}
                >
                    {text}
                </Styles.Button>
            )
        case 'btn-small':
            return (
                <Styles.Button href={linkTo} onClick={_callback} id={id} disabled={disabled}>
                    {text}
                </Styles.Button>
            )
        case 'href':
            return (
                <Styles.ButtonLink
                    width={width}
                    href={linkTo}
                    onClick={_callback}
                    height={height}
                    id={id}
                    disabled={disabled}
                >
                    {text}
                </Styles.ButtonLink>
            )
        case 'href-small':
            return (
                <Styles.ButtonLink href={linkTo} onClick={_callback} id={id} disabled={disabled}>
                    {text}
                </Styles.ButtonLink>
            )
    }
}

export default ButtonPrimary
