// React imports
import React from 'react'
import * as Styles from './verifyModal.styles.js'
import ReactDom from 'react-dom'
import { ButtonSecondary, ButtonPrimary } from 'components/atoms/index'

// React component
const VerifyModal = ({ open, children, onClose, buttonText }) => {
    if (!open) return null
    return ReactDom.createPortal(
        <Styles.Modal>
            <article>
                {children}
                <ButtonPrimary type="btn" _callback={onClose} text={buttonText} />
            </article>
        </Styles.Modal>,
        document.getElementById('portal'),
    )
}

export default VerifyModal
