// Imports
import * as Styles from './driverListItem.styles.js'
import { Icons } from 'components/atoms/index'

// Component
const DriverListItem = ({ type, name, subText }) => {
    let item
    if (type == 'verified') {
        item = (
            <div>
                <p>{name}</p>
                <p className="success">
                    <Icons width="1.5em" height="1.5em" type="success" /> Succesvol Geverifieerd
                </p>
            </div>
        )
    } else if (type == 'location') {
        item = (
            <div>
                <p>{name}</p>
                <p className="success">
                    <Icons width="1.5em" height="1.5em" type="success" /> Verificatie op Locatie
                </p>
            </div>
        )
    } else if (type == 'skiped') {
        item = (
            <div>
                <p>{name}</p>
                <p className="skip">
                    <Icons width="1.3em" height="1.3em" type="skip" /> Verificatie Overgeslagen
                </p>
            </div>
        )
    } else {
        item = (
            <div>
                <p>{name}</p>
                <p>{subText}</p>
            </div>
        )
    }

    return <Styles.Wrapper>{item}</Styles.Wrapper>
}

export default DriverListItem
