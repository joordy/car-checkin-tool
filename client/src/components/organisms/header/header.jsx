// React imports
import React from 'react'
import { Link } from 'react-router-dom'
import * as Styles from './header.styles.js'

// React component
const Header = () => {
    const styles = {
        color: '#161616',
        textDecoration: 'none',
    }

    return (
        <Styles.Header>
            <Styles.Navigation>
                <Link to="/" style={styles}>
                    <h1>EuropCar homepage</h1>
                </Link>

                <Styles.List>
                    <li>
                        <Link to="/Two" style={styles}>
                            PageTwo
                        </Link>
                    </li>
                </Styles.List>
            </Styles.Navigation>
        </Styles.Header>
    )
}

export default Header
