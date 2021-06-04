// React imports
import React, { useState } from 'react'
import * as Styles from './depositType.styles.js'
import { Icons } from 'components/atoms/index.js'

// React component
const DepositType = ({ labelText, children }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Styles.Accordeon>
            <button onClick={() => setIsOpen(!isOpen)}>
                <p>{labelText}</p>
            </button>
            {isOpen && <section>{children}</section>}
        </Styles.Accordeon>
    )
}

export default DepositType
