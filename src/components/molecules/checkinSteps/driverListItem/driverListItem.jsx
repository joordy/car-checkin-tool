// Imports
import * as Styles from './driverListItem.styles.js'
import { Icons } from 'components/atoms/index'

// Component
const DriverListItem = ({ type, name, subText }) => {
    // Return component based on requested type (verified, location or skiped)
    switch (type) {
        case 'verified':
            return (
                <Styles.Wrapper>
                    <div>
                        <p>{name}</p>
                        <p className="success">
                            <Icons width="1.5em" height="1.5em" type="success" /> Succesvol
                            Geverifieerd
                        </p>
                    </div>
                </Styles.Wrapper>
            )
        case 'location':
            return (
                <Styles.Wrapper>
                    <div>
                        <p>{name}</p>
                        <p className="success">
                            <Icons width="1.5em" height="1.5em" type="success" /> Verificatie op
                            Locatie
                        </p>
                    </div>
                </Styles.Wrapper>
            )
        case 'skiped':
            return (
                <Styles.Wrapper>
                    <div>
                        <p>{name}</p>
                        <p className="skip">
                            <Icons width="1.3em" height="1.3em" type="skip" /> Verificatie
                            Overgeslagen
                        </p>
                    </div>
                </Styles.Wrapper>
            )
        default:
            return (
                <Styles.Wrapper>
                    <div>
                        <p>{name}</p>
                        <p>{subText}</p>
                    </div>
                </Styles.Wrapper>
            )
    }
}

export default DriverListItem
