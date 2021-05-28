// React imports
import React from 'react'
import * as Styles from './verificationButtons.styles.js'
import { ButtonPrimaryLarge, ButtonSecondaryLarge } from 'components/atoms/index'

// React component
const VerificationButtons = ({
    textPrimary,
    textSecondary,
    linkPrimary,
    linkSecondary,
    callbackSecondary,
    callbackPrimary,
}) => {
    return (
        <Styles.BtnWrapper>
            <ButtonSecondaryLarge
                text={textSecondary}
                linkTo={linkSecondary}
                _callback={callbackSecondary}
            />
            <ButtonPrimaryLarge
                text={textPrimary}
                linkTo={linkPrimary}
                _callback={callbackPrimary}
            />
        </Styles.BtnWrapper>
    )
}

export default VerificationButtons
