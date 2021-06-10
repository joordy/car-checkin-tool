// React imports
import { useState } from 'react'
import supabase from 'db/supabase.js'
import axios from 'axios'
import * as Styles from './userChoice.styles.js'
import { updateDBwithMethod } from 'db/updateDatabase'

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

    console.log('userChoice reservation data = ', props.reservation)

    const checkStateAndMove = async (choice) => {
        if (window.location.pathname == '/deposit') {
            if (choice === 'skip') {
                const res = await axios
                    .post('/api/payMethod', {
                        paid: false,
                        carkey: props.reservation.carkey,
                        method: 'skip',
                    })
                    .then(
                        (res) => console.log(res),
                        (window.location.href = '/qr'),
                        await getSpecificUser('skip', props.reservation),
                    )
            } else if (choice === 'now') {
                const moveElement = document.querySelector('.stepsWrapper')
                moveElement.style.transform = `translateX(-200vw)`
            } else if (choice === 'location') {
                const res = await axios
                    .post('/api/payMethod', {
                        paid: false,
                        carkey: props.reservation.carkey,
                        method: 'location',
                    })
                    .then(
                        (res) => console.log(res),
                        (window.location.href = '/qr'),
                        await getSpecificUser('location', props.reservation),
                    )
            }
        } else if (window.location.pathname == '/verification') {
            const moveElement = document.querySelector('.stepsWrapper')
            moveElement.style.transform = `translateX(-300vw)`
        }
    }

    const changeState = (e) => {
        setSelected(e.currentTarget.value)
        if (window.location.pathname === '/deposit') {
            // console.log(e.currentTarget.value)
            setSelected(e.currentTarget.value)
        } else if (window.location.pathname === '/verification') {
            console.log('verification page')
            console.log(e.currentTarget.value)
        }
        // console.log(e.currentTarget.value)
    }

    const getSpecificUser = async (userChoice, reservation) => {
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
                return updateDBwithMethod('oneDriver', props.reservation, userChoice)
            } else if (stateTwo) {
                return updateDBwithMethod('twoDrivers', props.reservation, userChoice)
            } else if (stateThree) {
                return updateDBwithMethod('threeDrivers', props.reservation, userChoice)
            }
        }

        if (props.reservation.carkey === 0) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResOne: updateWithSettings() })
                .eq('userID', props.reservation.user.userID)
            if (!data) {
                console.log(error)
            } else {
                console.log(data)
            }
        } else if (props.reservation.carkey === 1) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResTwo: updateWithSettings() })
                .eq('userID', props.reservation.user.userID)
            if (!data) {
                console.log(error)
            } else {
                console.log(data)
            }
        } else if (props.reservation.carkey === 2) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResThree: updateWithSettings() })
                .eq('userID', props.reservation.user.userID)
            if (!data) {
                console.log(error)
            } else {
                console.log(data)
            }
        }
    }

    let depositAmount
    if (props.deposit) {
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
