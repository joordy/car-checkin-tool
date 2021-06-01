// React imports
import React, { useState } from 'react'
import * as Styles from './checkFacial.styles.js'
import { Icons, ButtonPrimary, ButtonTertiaryMore } from 'components/atoms/index'
import { VerificationButtons } from 'components/molecules/index'

// React component
const CheckFacial = () => {
    const [playing, setPlaying] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const moveLeft = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-200vw)'
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
        setShowModal((prev) => !prev)
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

            <Styles.IdentityChecker>
                {navigator.getUserMedia ? (
                    <>
                        <video muted autoPlay id="videoWrapper"></video>
                        {playing ? (
                            <div>
                                <ButtonTertiaryMore text="Maak foto" _callback={makeImage} />
                            </div>
                        ) : (
                            <ButtonPrimary type="btn" text="Open camera" _callback={startVideo} />
                        )}
                    </>
                ) : (
                    <input type="file" accept="image/*" />
                )}
            </Styles.IdentityChecker>

            <VerificationButtons
                typeSecondary="btn"
                typePrimary="href"
                textPrimary="Volgende"
                textSecondary="Terug"
                linkPrimary="/deposit"
                linkSecondary="#"
                callbackSecondary={moveLeft}
            />
        </Styles.Section>
    )
}

export default CheckFacial
