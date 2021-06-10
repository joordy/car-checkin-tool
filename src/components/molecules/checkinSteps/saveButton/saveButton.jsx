// React imports
import React from 'react'
import * as Styles from './saveButton.styles.js'
import { ButtonPrimary } from 'components/atoms/index'

// React component
const SaveButton = ({
    typePrimary,
    textPrimary,
    linkPrimary,
    callbackPrimary,
    id,
    disabled,
    buttonType,
}) => {
    return (
        <Styles.BtnWrapper>
            <ButtonPrimary
                type={typePrimary}
                buttonType={buttonType}
                text={textPrimary}
                linkTo={linkPrimary}
                _callback={callbackPrimary}
                id={id}
                disabled={disabled}
            />
        </Styles.BtnWrapper>
    )
}

export default SaveButton
