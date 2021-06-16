// React imports
import React from 'react'
import * as Styles from './reservationSidebar.styles.js'

// Component imports
import { LogoGreen } from 'components/atoms/index'
import { Icons } from 'components/atoms/index'

// React component
const ReservationSidebar = (props) => {
    const user = props.user

    console.log(user)

    return (
        <>
            <Styles.Sidebar>
                <LogoGreen />
                <ul>
                    <li>Mijn reserveringen</li>
                    <li>Ingecheckt</li>
                    <li>Account</li>
                </ul>
                <div>
                    <Icons type="user" width="26px" height="26px" stroke="white" />
                    <ul>
                        <li>
                            {props.user.firstName} {props.user.lastName}
                        </li>
                        <li>{props.user.email}</li>
                    </ul>
                </div>
            </Styles.Sidebar>
        </>
    )
}

export default ReservationSidebar
