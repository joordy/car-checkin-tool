// React imports
import React from 'react'
import * as Styles from './singleButtonWrapper.styles.js'
import { ButtonPrimaryLarge } from 'components/atoms/index'

// React component
const SingleButtonWrapper = ({ text, link, callback }) => {
    return (
        <Styles.BtnWrapper>
            <ButtonPrimaryLarge text={text} linkTo={link} _callback={callback} />
        </Styles.BtnWrapper>
    )
}

export default SingleButtonWrapper
