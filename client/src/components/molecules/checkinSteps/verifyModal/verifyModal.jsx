// React imports
import React from 'react'
import * as Styles from './verifyModal.styles.js'
import { ButtonPrimary, Icons } from 'components/atoms/index'

// React component
const VerifyModal = ({ message, open, children, onClose, buttonText }) => {
    const hideElem = () => {
        const btn = document.querySelector('#createImage')
        const videoWrapper = document.querySelector('#videoWrapper')
        btn.style.opacity = '0'
        videoWrapper.style.opacity = '0.4'
        console.log(btn)
    }

    switch (message) {
        case 'success':
            hideElem()
            return (
                <Styles.Modal>
                    <article>
                        <Icons type="success" width="3em" height="3em" />
                        <h4>Verificatie gelukt</h4>
                        <p>Druk op “Volgende” om verder te gaan</p>
                    </article>
                </Styles.Modal>
            )
        case 'fail':
            return (
                <Styles.Modal>
                    <article>
                        <Icons type="success" width="3em" height="3em" />
                        <h4>Foto afgekeurd</h4>
                        <p>
                            De afbeelding is niet scherp genoeg. Zorg voor voldoende licht en zorg
                            dat je gezicht goed zichtbaar is.
                        </p>
                        <ButtonPrimary type="btn" _callback={onClose} text="Probeer opnieuw" />
                    </article>
                </Styles.Modal>
            )
    }
}

export default VerifyModal
