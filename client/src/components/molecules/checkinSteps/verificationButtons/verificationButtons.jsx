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
            />
        </Styles.BtnWrapper>
    )
}

export default VerificationButtons
