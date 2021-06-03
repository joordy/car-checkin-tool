// React components & imports
import * as Styles from './buttonTertiary.styles.js'

// Component
const ButtonTertiary = ({ type, text, linkTo, width, _callback, height }) => {
    switch (type) {
        case 'btn':
            return (
                <Styles.Button width={width} href={linkTo} onClick={_callback} height={height}>
                    {text}
                </Styles.Button>
            )
        case 'btn-small':
            return (
                <Styles.Button href={linkTo} onClick={_callback}>
                    {text}
                </Styles.Button>
            )
        case 'href':
            return (
                <Styles.Href width={width} href={linkTo} onClick={_callback} height={height}>
                    {text}
                </Styles.Href>
            )
        case 'href-small':
            return (
                <Styles.Href href={linkTo} onClick={_callback}>
                    {text}
                </Styles.Href>
            )
    }
}

export default ButtonTertiary
