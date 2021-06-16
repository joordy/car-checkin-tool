// React imports
import { useState } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './checkFacial.styles.js'
import { updateDBwithDriverOne } from 'db/updateDatabase'

// Components
import { Icons, ButtonPrimary, ButtonTertiary } from 'components/atoms/index'
import { VerificationButtons, VerifyModal } from 'components/molecules/index'

// React component
const CheckFacial = (props) => {
    const [playing, setPlaying] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [disabling, setDisabling] = useState('')

    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = `translateX(${props.movingRight}vw)`
    }

    const moveLeft = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = `translateX(${props.movingLeft}vw)`
    }

    const submitDriverIdentity = async () => {
        const { data, error } = await supabase
            .from('users')
            .select()
            .eq('userID', props.loggedinUser.userID)

        if (!data) {
            console.log(error)
        } else {
            // console.log(data)
            if (Object.keys(props.thisUser).includes('driverOne')) {
                return updateSpecificUser(
                    props.loggedinUser.userID,
                    true,
                    props.carkey,
                    ...data,
                    'driverOne',
                )
            } else if (Object.keys(props.thisUser).includes('driverTwo')) {
                return updateSpecificUser(
                    props.loggedinUser.userID,
                    true,
                    props.carkey,
                    ...data,
                    'driverTwo',
                )
            } else if (Object.keys(props.thisUser).includes('driverThree')) {
                return updateSpecificUser(
                    props.loggedinUser.userID,
                    true,
                    props.carkey,
                    ...data,
                    'driverThree',
                )
            }
        }
    }

    const updateSpecificUser = async (userID, verified, index, currentUserDB, driverObj) => {
        const stateOne =
            props.reservation.driverOne &&
            !props.reservation.driverTwo &&
            !props.reservation.driverThree
        const stateTwo =
            props.reservation.driverOne &&
            props.reservation.driverTwo &&
            !props.reservation.driverThree
        const stateThree =
            props.reservation.driverOne &&
            props.reservation.driverTwo &&
            props.reservation.driverThree

        const updateWithSettings = () => {
            if (stateOne) {
                return updateDBwithDriverOne(
                    'oneDriver',
                    props.reservation,
                    currentUserDB,
                    'now',
                    verified,
                    driverObj,
                    props.thisUser,
                )
            } else if (stateTwo) {
                return updateDBwithDriverOne(
                    'twoDrivers',
                    props.reservation,
                    currentUserDB,
                    'now',
                    verified,
                    driverObj,
                    props.thisUser,
                )
            } else if (stateThree) {
                return updateDBwithDriverOne(
                    'threeDrivers',
                    props.reservation,
                    currentUserDB,
                    'now',
                    verified,
                    driverObj,
                    props.thisUser,
                )
            }
        }

        if (index === 0) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResOne: updateWithSettings() })
                .eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                // console.log(...data)
                window.location.href = '/verification'
            }
        } else if (index === 1) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResTwo: updateWithSettings() })
                .eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                // console.log(...data)
                window.location.href = '/verification'
            }
        } else if (index === 2) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResThree: updateWithSettings() })
                .eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                // console.log(...data)
                window.location.href = '/verification'
            }
        }
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
                callbackSecondary={moveRight}
                callbackPrimary={submitDriverIdentity}
                disabled={!disabling}
            />
        </Styles.Section>
    )
}

export default CheckFacial
