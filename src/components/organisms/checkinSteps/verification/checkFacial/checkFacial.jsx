// React imports
import { useState } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './checkFacial.styles.js'
import { updateDBwithDriverID } from 'db/updateDatabase'

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
            .eq('userID', props.reservation.user.userID)
        console.log(props)

        if (!data) {
            console.log(error)
        } else {
            // console.log(data)
            if (Object.keys(props.thisUser).includes('driverOne')) {
                console.log('update driver 1')
                await updateSpecificUser(
                    props.reservation.user.userID,
                    true,
                    props.reservation.carkey,
                    ...data,
                    'driverOne',
                )
            } else if (Object.keys(props.thisUser).includes('driverTwo')) {
                console.log('update driver 2')
                await updateSpecificUser(
                    props.reservation.user.userID,
                    true,
                    props.reservation.carkey,
                    ...data,
                    'driverTwo',
                )
            } else if (Object.keys(props.thisUser).includes('driverThree')) {
                console.log('update driver 3')
            } else {
                ///
            }
        }
    }

    const updateSpecificUser = async (userID, verified, index, currentUserDB, driverObj) => {
        const stateOne =
            props.reservation.car.driverOne &&
            !props.reservation.car.driverTwo &&
            !props.reservation.car.driverThree
        const stateTwo =
            props.reservation.car.driverOne &&
            props.reservation.car.driverTwo &&
            !props.reservation.car.driverThree
        const stateThree =
            props.reservation.car.driverOne &&
            props.reservation.car.driverTwo &&
            props.reservation.car.driverThree

        const updateWithSettings = () => {
            if (stateOne) {
                console.log('element met 1 driver(s)')
                return updateDBwithDriverID(
                    'oneDriver',
                    props.reservation,
                    currentUserDB,
                    'now',
                    verified,
                    driverObj,
                    props.thisUser,
                )
            } else if (stateTwo) {
                console.log('element met 2 driver(s)')
                return updateDBwithDriverID(
                    'twoDrivers',
                    props.reservation,
                    currentUserDB,
                    'now',
                    verified,
                    driverObj,
                    props.thisUser,
                )
            } else if (stateThree) {
                console.log('element met 3 driver(s)')
                return updateDBwithDriverID(
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
                console.log('updated data', data)
                if (data[0].carResOne.driverTwo.verified === false) {
                    // window.location.href = '/verification'
                } else if (data[0].carResOne.driverThree.verified === false) {
                    // window.location.href = '/verification'
                    console.log('gebruiker 2 updated', data)
                } else {
                    // window.location.href = '/deposit'
                }
            }
        } else if (index === 1) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResTwo: updateWithSettings() })
                .eq('userID', userID)
            if (!data) {
                console.log(error)
            }
        } else if (index === 2) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResThree: updateWithSettings() })
                .eq('userID', userID)
            if (!data) {
                console.log(error)
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
                callbackSecondary={moveRight}
                callbackPrimary={submitDriverIdentity}
                //callbackPrimary={() => (window.location.href = '/deposit')}
                disabled={!disabling}
            />
        </Styles.Section>
    )
}

export default CheckFacial
