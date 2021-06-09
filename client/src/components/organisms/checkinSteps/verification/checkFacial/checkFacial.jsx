// React imports
import React, { useState } from 'react'
import * as Styles from './checkFacial.styles.js'
import { Icons, ButtonPrimary, ButtonTertiary } from 'components/atoms/index'
import { VerificationButtons, VerifyModal } from 'components/molecules/index'

// React component
const CheckFacial = () => {
    const [playing, setPlaying] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [disabling, setDisabling] = useState('')

    const moveLeft = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-300vw)'
    }

    const startVideo = () => {
        setPlaying(true)
        navigator.getUserMedia(
            {
                video: true,
            },
            (stream) => {
                let video = document.querySelector('#videoWrapper')
                if (video) {
                    video.srcObject = stream
                }
            },
            (err) => console.error(err),
        )
    }

    const stopVideo = () => {
        setPlaying(false)
        let video = document.querySelector('#videoWrapper')
        video.pause()
    }

    const makeImage = () => {
        console.log('maak foto bruur')
        setModalIsOpen(true)
        setDisabling('created')
        let video = document.querySelector('#videoWrapper')
        video.pause()
    }

    return (
        <Styles.Section id="facial">
            <header>
                <h1>Maak een foto van je gezicht</h1>
                <p>
                    We beschermen je gegevens en gebruiken de foto uitsluitend om te verifiëren of
                    jij de echte eigenaar bent van het rijbewijs. Na de verificatie verwijderen we
                    de foto direct.
                </p>
                <Icons type="close" width="1.5rem" height="1.5em" />
            </header>

            <Styles.ImageChecker>
                {navigator.getUserMedia ? (
                    <>
                        <video muted autoPlay id="videoWrapper"></video>
                        {playing ? (
                            <>
                                <div id="createImage">
                                    <ButtonTertiary
                                        type="btn"
                                        text="Maak foto"
                                        _callback={makeImage}
                                    />
                                </div>
                                {modalIsOpen && (
                                    <VerifyModal
                                        message="success"
                                        onClose={() => setModalIsOpen(false)}
                                    />
                                )}
                            </>
                        ) : (
                            <ButtonPrimary type="btn" text="Open camera" _callback={startVideo} />
                        )}
                    </>
                ) : (
                    <input type="file" accept="image/*" />
                )}
            </Styles.ImageChecker>

            <VerificationButtons
                typeSecondary="btn"
                typePrimary="btn"
                textPrimary="Volgende"
                textSecondary="Terug"
                linkPrimary="/deposit"
                linkSecondary="#"
                callbackSecondary={moveLeft}
                callbackPrimary={() => (window.location.href = '/deposit')}
                disabled={!disabling}
            />
        </Styles.Section>
    )
}

export default CheckFacial
