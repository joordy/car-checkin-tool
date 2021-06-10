// React imports
import React from 'react'
import * as Styles from './verificationButtons.styles.js'
import { ButtonSecondary, ButtonPrimary } from 'components/atoms/index'

// React component
const VerificationButtons = ({
    typePrimary,
    typeSecondary,
    textPrimary,
    textSecondary,
    linkPrimary,
    linkSecondary,
    callbackSecondary,
    callbackPrimary,
    id,
    disabled,
}) => {
    return (
        <Styles.BtnWrapper>
            <ButtonSecondary
                type={typeSecondary}
                text={textSecondary}
                linkTo={linkSecondary}
                _callback={callbackSecondary}
            />
            <ButtonPrimary
                type={typePrimary}
                text={textPrimary}
                linkTo={linkPrimary}
                _callback={callbackPrimary}
                id={id}
                disabled={disabled}
            />
        </Styles.BtnWrapper>
    )
}

export default VerificationButtons
