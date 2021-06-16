// React imports
import React from 'react'
import * as Styles from './singleButtonWrapper.styles.js'
import { ButtonSecondary } from 'components/atoms/index'

// React component
const SingleButtonWrapper = ({ type, text, link, callback }) => {
    return (
        <Styles.BtnWrapper>
            <ButtonSecondary type={type} text={text} linkTo={link} _callback={callback} />
        </Styles.BtnWrapper>
    )
}

export default SingleButtonWrapper
