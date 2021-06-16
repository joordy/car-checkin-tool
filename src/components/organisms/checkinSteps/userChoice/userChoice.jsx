// React imports
import { useState } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './userChoice.styles.js'
import { updateDBwithPayMethod, updateDBwithVerifyMethod } from 'db/updateDatabase'

// Components
import { Label, Icons } from 'components/atoms/index'
import { VerificationButtons, RadioInput } from 'components/molecules/index'

// React component
const UserChoice = (props) => {
    const [selected, setSelected] = useState('now')

    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = `translateX(${0}vw)`
    }

    const checkStateAndMove = async (choice) => {
        const { data, error } = await supabase
            .from('users')
            .select()
            .eq('userID', props.loggedinUser.userID)

        if (!data) {
            console.log(error)
        } else {
            console.log(...data)
            if (window.location.pathname == '/deposit') {
                if (choice === 'skip') {
                    if (props.carkey === 0) {
                        return updateSpecificUser(
                            props.loggedinUser,
                            'skip',
                            props.carkey,
                            data[0].carResOne,
                        )
                    } else if (props.carkey === 1) {
                        return updateSpecificUser(
                            props.loggedinUser,
                            'skip',
                            props.carkey,
                            data[0].carResTwo,
                            'driverOne',
                        )
                    } else if (props.carkey === 2) {
                        return updateSpecificUser(
                            props.loggedinUser,
                            'skip',
                            props.carkey,
                            data[0].carResThree,
                            'driverOne',
                        )
                    }
                } else if (choice === 'now') {
                    const moveElement = document.querySelector('.stepsWrapper')
                    moveElement.style.transform = `translateX(-200vw)`
                } else if (choice === 'location') {
                    if (props.carkey === 0) {
                        return updateSpecificUser(
                            props.loggedinUser,
                            'location',
                            props.carkey,
                            data[0].carResOne,
                        )
                    } else if (props.carkey === 1) {
                        return updateSpecificUser(
                            props.loggedinUser,
                            'location',
                            props.carkey,
                            data[0].carResTwo,
                            'driverOne',
                        )
                    } else if (props.carkey === 2) {
                        return updateSpecificUser(
                            props.loggedinUser,
                            'location',
                            props.carkey,
                            data[0].carResThree,
                            'driverOne',
                        )
                    }
                }
            } else if (window.location.pathname == '/verification') {
                if (choice === 'skip') {
                    if (Object.keys(props.thisUser).includes('driverOne')) {
                        if (props.carkey === 0) {
                            return updateSpecificUser(
                                props.loggedinUser,
                                'skip',
                                props.carkey,
                                data[0].carResOne,
                                'driverOne',
                            )
                        } else if (props.carkey === 1) {
                            return updateSpecificUser(
                                props.loggedinUser,
                                'skip',
                                props.carkey,
                                data[0].carResTwo,
                                'driverOne',
                            )
                        } else if (props.carkey === 2) {
                            return updateSpecificUser(
                                props.loggedinUser,
                                'skip',
                                props.carkey,
                                data[0].carResThree,
                                'driverOne',
                            )
                        }
                    } else if (Object.keys(props.thisUser).includes('driverTwo')) {
                        if (props.carkey === 0) {
                            return updateSpecificUser(
                                props.loggedinUser,
                                'skip',
                                props.carkey,
                                data[0].carResOne,
                                'driverTwo',
                            )
                        } else if (props.carkey === 1) {
                            return updateSpecificUser(
                                props.loggedinUser,
                                'skip',
                                props.carkey,
                                data[0].carResTwo,
                                'driverTwo',
                            )
                        } else if (props.carkey === 2) {
                            return updateSpecificUser(
                                props.loggedinUser,
                                'skip',
                                props.carkey,
                                data[0].carResThree,
                                'driverTwo',
                            )
                        }
                    } else if (Object.keys(props.thisUser).includes('driverThree')) {
                        if (props.carkey === 0) {
                            return updateSpecificUser(
                                props.loggedinUser,
                                'skip',
                                props.carkey,
                                data[0].carResOne,
                                'driverThree',
                            )
                        } else if (props.carkey === 1) {
                            return updateSpecificUser(
                                props.loggedinUser,
                                'skip',
                                props.carkey,
                                data[0].carResTwo,
                                'driverThree',
                            )
                        } else if (props.carkey === 2) {
                            return updateSpecificUser(
                                props.loggedinUser,
                                'skip',
                                props.carkey,
                                data[0].carResThree,
                                'driverThree',
                            )
                        }
                    }
                } else if (choice === 'location') {
                    if (Object.keys(props.thisUser).includes('driverOne')) {
                        if (props.carkey === 0) {
                            return updateSpecificUser(
                                props.loggedinUser,
                                'location',
                                props.carkey,
                                data[0].carResOne,
                                'driverOne',
                            )
                        } else if (props.carkey === 1) {
                            return updateSpecificUser(
                                props.loggedinUser,
                                'location',
                                props.carkey,
                                data[0].carResTwo,
                                'driverOne',
                            )
                        } else if (props.carkey === 2) {
                            return updateSpecificUser(
                                props.loggedinUser,
                                'location',
                                props.carkey,
                                data[0].carResThree,
                                'driverOne',
                            )
                        }
                    } else if (Object.keys(props.thisUser).includes('driverTwo')) {
                        if (props.carkey === 0) {
                            return updateSpecificUser(
                                props.loggedinUser,
                                'location',
                                props.carkey,
                                data[0].carResOne,
                                'driverTwo',
                            )
                        } else if (props.carkey === 1) {
                            return updateSpecificUser(
                                props.loggedinUser,
                                'location',
                                props.carkey,
                                data[0].carResTwo,
                                'driverTwo',
                            )
                        } else if (props.carkey === 2) {
                            return updateSpecificUser(
                                props.loggedinUser,
                                'location',
                                props.carkey,
                                data[0].carResThree,
                                'driverTwo',
                            )
                        }
                    } else if (Object.keys(props.thisUser).includes('driverThree')) {
                        if (props.carkey === 0) {
                            return updateSpecificUser(
                                props.loggedinUser,
                                'location',
                                props.carkey,
                                data[0].carResOne,
                                'driverThree',
                            )
                        } else if (props.carkey === 1) {
                            return updateSpecificUser(
                                props.loggedinUser,
                                'location',
                                props.carkey,
                                data[0].carResTwo,
                                'driverThree',
                            )
                        } else if (props.carkey === 2) {
                            return updateSpecificUser(
                                props.loggedinUser,
                                'location',
                                props.carkey,
                                data[0].carResThree,
                                'driverThree',
                            )
                        }
                    }
                } else if (choice === 'now') {
                    const moveElement = document.querySelector('.stepsWrapper')
                    moveElement.style.transform = `translateX(-300vw)`
                }
            }
        }
    }

    const changeState = (e) => {
        if (window.location.pathname === '/deposit') {
            setSelected(e.currentTarget.value)
        } else if (window.location.pathname === '/verification') {
            setSelected(e.currentTarget.value)
        }
    }

    const updateSpecificUser = async (user, userChoice, index, currentDB, driverObj) => {
        console.log(props)
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
            if (window.location.pathname.includes('deposit')) {
                if (stateOne) {
                    return updateDBwithPayMethod(
                        props.loggedinUser,
                        'oneDriver',
                        currentDB,
                        userChoice,
                    )
                } else if (stateTwo) {
                    return updateDBwithPayMethod(
                        props.loggedinUser,
                        'twoDrivers',
                        currentDB,
                        userChoice,
                    )
                } else if (stateThree) {
                    return updateDBwithPayMethod(
                        props.loggedinUser,
                        'threeDrivers',
                        currentDB,
                        userChoice,
                    )
                }
            } else if (window.location.pathname.includes('verification')) {
                if (stateOne) {
                    return updateDBwithVerifyMethod(
                        props.loggedinUser,
                        'oneDriver',
                        currentDB,
                        userChoice,
                        driverObj,
                    )
                } else if (stateTwo) {
                    return updateDBwithVerifyMethod(
                        props.loggedinUser,
                        'twoDrivers',
                        currentDB,
                        userChoice,
                        driverObj,
                    )
                } else if (stateThree) {
                    return updateDBwithVerifyMethod(
                        props.loggedinUser,
                        'threeDrivers',
                        currentDB,
                        userChoice,
                        driverObj,
                    )
                }
            }
        }

        if (props.carkey === 0) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResOne: updateWithSettings() })
                .eq('userID', props.loggedinUser.userID)
            if (!data) {
                console.log(error)
            } else {
                setTimeout(() => {
                    redirect()
                }, 100)
            }
        } else if (props.carkey === 1) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResTwo: updateWithSettings() })
                .eq('userID', props.loggedinUser.userID)
            if (!data) {
                console.log(error)
            } else {
                setTimeout(() => {
                    redirect()
                }, 100)
            }
        } else if (props.carkey === 2) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResThree: updateWithSettings() })
                .eq('userID', props.loggedinUser.userID)
            if (!data) {
                console.log(error)
            } else {
                setTimeout(() => {
                    redirect()
                }, 100)
            }
        }
    }

    console.log(props.reservation)
    console.log(props)
    const redirect = async () => {
        if (window.location.pathname.includes('verification')) {
            window.location.href = '/verification'
            // if (props.carkey === 0) {
            //     const { data, error } = await supabase
            //         .from('users')
            //         .select()
            //         .eq('userID', props.loggedinUser.userID)
            //     if (!data) {
            //         console.log(error)
            //     } else {
            //         const driverOne = data[0].carResOne.driverOne
            //         const driverTwo = data[0].carResOne.driverTwo
            //         const driverThree = data[0].carResOne.driverThree
            //         console.log('test test ', data[0].carResOne)
            //         if (driverOne.method === 'location' || driverOne.method === 'skip') {
            //             console.log('methode is defined')
            //             if (driverTwo.method === '' || driverTwo.method === 'skip') {
            //                 window.location.href = '/verification'
            //             } else if (driverTwo.method === '' || driverTwo.method === 'skip') {
            //                 window.location.href = '/verification'
            //             } else {
            //                 window.location.href = '/deposit'
            //             }
            //         } else if (driverTwo.method === 'location' || driverTwo.method === 'skip') {
            //             console.log('methode 2 is defined')
            //         } else if (driverThree.method === 'location' || driverThree.method === 'skip') {
            //             console.log('methode 3 is defined')
            //         }
            //     }
            // } else if (props.carkey === 1) {
            //     const { data, error } = await supabase
            //         .from('users')
            //         .select()
            //         .eq('userID', props.loggedinUser.userID)
            //     if (!data) {
            //         console.log(error)
            //     } else {
            //         console.log('test test ', data[0].carResTwo)
            //     }
            // } else if (props.carkey === 3) {
            //     const { data, error } = await supabase
            //         .from('users')
            //         .select()
            //         .eq('userID', props.loggedinUser.userID)
            //     if (!data) {
            //         console.log(error)
            //     } else {
            //         console.log('test test ', data[0].carResThree)
            //     }
            // }
            // console.log(index)

            // console.log('props reserv', props.reservation)

            // //window.location.href = '/deposit'
            // // Create an array with drivers that have skipped verification
            // const skippedDrivers = []
            // // Create an array with all drivers
            // const drivers = Object.keys(props.reservation).filter((key) => key.includes('driver'))
            // // Check if driver was not verified and if method = skip
            // drivers.forEach((driver) => {
            //     console.log('selected', selected)
            //     console.log(props.reservation[driver])
            //     if (props.reservation[driver].method === '') {
            //         skippedDrivers.push(props.reservation[driver].driver)
            //     }
            // })
            // console.log(skippedDrivers)
        } else if (window.location.pathname.includes('deposit')) {
            window.location.href = '/qr'
        }
    }

    let depositAmount
    if (props.reservation.deposit) {
        depositAmount = (
            <section>
                <Label text="Borg" />
                <p>€ {deposit}</p>
            </section>
        )
    }

    return (
        <Styles.Section>
            <div className="testje">
                <header>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <Icons type="close" width="1.5rem" height="1.5em" />
                </header>
                <article>
                    {depositAmount}

                    <form>
                        <Label text={props.labelText} />
                        <RadioInput
                            title={props.oneTitle}
                            text={props.oneText}
                            name="choose"
                            value="now"
                            id="now"
                            changeState={changeState}
                            checked
                        />
                        <RadioInput
                            title={props.twoTitle}
                            text={props.twoText}
                            name="choose"
                            value="location"
                            id="location"
                            changeState={changeState}
                        />
                        <RadioInput
                            title={props.threeTitle}
                            text={props.threeText}
                            name="choose"
                            value="skip"
                            id="skip"
                            changeState={changeState}
                        />
                    </form>
                    <p className="progress">{props.progressText}</p>
                </article>
            </div>

            <VerificationButtons
                typeSecondary="btn"
                typePrimary="btn"
                textPrimary="Volgende"
                textSecondary="Terug"
                linkPrimary="#"
                linkSecondary="#"
                callbackSecondary={moveRight}
                callbackPrimary={() => checkStateAndMove(selected)}
            />
        </Styles.Section>
    )
}

export default UserChoice
