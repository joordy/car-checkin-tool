// React imports
import React, { useState, useRef } from 'react'
import * as Styles from './depositType.styles.js'
import { Icons } from 'components/atoms/index.js'

// React component
const DepositType = ({ labelText, children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const parentRef = useRef()

    return (
        <Styles.Accordeon>
            <button onClick={() => setIsOpen(!isOpen)}>{labelText}</button>
            <div
                ref={parentRef}
                style={
                    isOpen
                        ? { height: `calc(60px + ${parentRef.current.scrollHeight}px)` }
                        : { height: '0px' }
                }
            >
                <section className="content">{children}</section>
            </div>
        </Styles.Accordeon>
    )
}

export default DepositType
