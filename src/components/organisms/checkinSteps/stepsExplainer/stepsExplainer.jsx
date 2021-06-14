// React imports
import { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import axios from 'axios'
import * as Styles from './stepsExplainer.styles.js'

// Componenten
import { VerificationButtons, IconListItem } from 'components/molecules/index'

// React component
const StepsExplainer = (props) => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-100vw)'
    }

    let title = 'Inchecken in slechts 3 stappen'
    let buttonText = 'Volgende'
    let time
    let step1 = false
    let step2 = false
    let step3 = false

    // console.log('props', props)
    if (props.loading) {
        // console.log(psrops.reservation)
        step1 = props.reservation.orderDetails
        step2 = props.reservation.verificationProcess
        const payMethod = props.reservation.paidDeposit.method
        step3 = props.reservation.paidDeposit.paid

        if (!step1 && !step2 && !step3) {
            title = 'Inchecken in 3 stappen'
            buttonText = 'Check gegevens'
            time = (
                <p className="time">Dit proces neemt ongeveer 5 minuten van jouw tijd in beslag.</p>
            )
        } else if (step1 && !step2 && !step3) {
            title = 'Gelukt! Je kunt verder naar stap 2'
            buttonText = 'Start verificatie'
        } else if (step1 && step2 && !step3 && !payMethod) {
            title = 'Gelukt! Je bent bijna klaar'
            buttonText = 'Regel borg'
        } else if (step1 && step2 && step3) {
            title = 'Geregeld! Ontvang nu je QR-code'
            buttonText = 'Afronden'
        } else if (step1 && !step2 && step3) {
            title = 'Ga verder met de verificatie'
            buttonText = 'Doorgaan'
        } else if (step1 && step2 && !step3 && payMethod) {
            title = 'Bijna klaar! Regel nu de borg '
            buttonText = 'Doorgaan'
        }
    }
    // const getSpecificUser = async (userID, index) => {
    //     if (index == 0) {
    //         const { data, error } = await supabase.from('users').select().eq('userID', userID)
    //         if (!data) {
    //             console.log(error)
    //         } else {
    //             setDBdata(data[0].carResOne)
    //             setLoadingData(true)
    //         }
    //     } else if (index == 1) {
    //         const { data, error } = await supabase.from('users').select().eq('userID', userID)
    //         if (!data) {
    //             console.log(error)
    //         } else {
    //             setDBdata(data[0].carResTwo)
    //             setLoadingData(true)
    //         }
    //     } else if (index == 2) {
    //         const { data, error } = await supabase.from('users').select().eq('userID', userID)
    //         if (!data) {
    //             console.log(error)
    //         } else {
    //             setDBdata(data[0].carResThree)
    //             setLoadingData(true)
    //         }
    //     } else {
    //         console.log('not existing')
    //     }
    // }

    // if (props.loading) {
    //     console.log('server loaded')
    //     const userID = props.reservation.user.userID
    //     const index = props.reservation.carkey
    //     console.log(userID, index)
    //     // step1 = props.reservation.car.orderDetails
    //     // step2 = props.reservation.car.verificationProcess
    //     // const payMethod = props.reservation.car.paidDeposit.method
    //     // step3 = props.reservation.car.paidDeposit.paid

    //     // if (!step1 && !step2 && !step3) {
    //     //     title = 'Inchecken in 3 stappen'
    //     //     buttonText = 'Check gegevens'
    //     //     time = (
    //     //         <p className="time">Dit proces neemt ongeveer 5 minuten van jouw tijd in beslag.</p>
    //     //     )
    //     // } else if (step1 && !step2 && !step3) {
    //     //     title = 'Gelukt! Je kunt verder naar stap 2'
    //     //     buttonText = 'Start verificatie'
    //     // } else if (step1 && step2 && !step3 && !payMethod) {
    //     //     title = 'Gelukt! Je bent bijna klaar'
    //     //     buttonText = 'Regel borg'
    //     // } else if (step1 && step2 && step3) {
    //     //     title = 'Geregeld! Ontvang nu je QR-code'
    //     //     buttonText = 'Afronden'
    //     // } else if (step1 && !step2 && step3) {
    //     //     title = 'Ga verder met de verificatie'
    //     //     buttonText = 'Doorgaan'
    //     // } else if (step1 && step2 && !step3 && payMethod) {
    //     //     title = 'Bijna klaar! Regel nu de borg '
    //     //     buttonText = 'Doorgaan'
    //     // }
    // }

    // const [dbData, setDBdata] = useState([])
    // const [currentCarkey, setCurrentCarkey] = useState(null)
    // const [currentUser, setCurrentUser] = useState(null)
    // const [databaseSteps, setDatabaseSteps] = useState([false])
    // const [loadingData, setLoadingData] = useState(false)
    // const [carkey, setCarkey] = useState()

    // const [dbData, setDBdata] = useState()
    // const [loadingData, setLoadingData] = useState(false)

    // const moveRight = () => {
    //     const moveElement = document.querySelector('.stepsWrapper')
    //     moveElement.style.transform = 'translateX(-100vw)'
    // }

    // let title = 'Inchecken in slechts 3 stappen'
    // let buttonText = 'Volgende'
    // let time
    // let step1 = false
    // let step2 = false
    // let step3 = false

    // const getSpecificUser = async (userID, index) => {
    //     if (index == 0) {
    //         const { data, error } = await supabase.from('users').select().eq('userID', userID)
    //         if (!data) {
    //             console.log(error)
    //         } else {
    //             setDBdata(data[0].carResOne)
    //             setLoadingData(true)
    //         }
    //     } else if (index == 1) {
    //         const { data, error } = await supabase.from('users').select().eq('userID', userID)
    //         if (!data) {
    //             console.log(error)
    //         } else {
    //             setDBdata(data[0].carResTwo)
    //             setLoadingData(true)
    //         }
    //     } else if (index == 2) {
    //         const { data, error } = await supabase.from('users').select().eq('userID', userID)
    //         if (!data) {
    //             console.log(error)
    //         } else {
    //             setDBdata(data[0].carResThree)
    //             setLoadingData(true)
    //         }
    //     } else {
    //         console.log('not existing')
    //     }
    // }

    // const getData = async () => {
    //     try {
    //         const data = await axios.get(`/api/order-details`).then((res) => {
    //             console.log('res', res)
    //             setCurrentCarkey(res.data.carkey)
    //             setCurrentUser(res.data.user.userID)
    //             setLoadingData(true)
    //         })
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // useEffect(() => {
    //     getData()
    //     if (currentCarkey) {
    //         getData()
    //         // console.log('bestaat')
    //         // getSpecificUser(currentCarkey, currentUser)
    //         // } else {
    //     }
    // }, [])

    // async function getSpecificUser(index, userID) {
    //     console.log(userID)
    //     console.log(index)
    //     if (index == 0) {
    //         const { data, error } = await supabase.from('users').select().eq('userID', userID)
    //         if (!data) {
    //             console.log(error)
    //         } else {
    //             console.log('data', data)
    //             setDBdata(data[0].carResOne)
    //             setLoadingData(true)
    //         }
    //     } else if (index == 1) {
    //         const { data, error } = await supabase.from('users').select().eq('userID', userID)
    //         if (!data) {
    //             console.log(error)
    //         } else {
    //             setDBdata(data[0].carResTwo)
    //             setLoadingData(true)
    //         }
    //     } else if (index == 2) {
    //         const { data, error } = await supabase.from('users').select().eq('userID', userID)
    //         if (!data) {
    //             console.log(error)
    //         } else {
    //             setDBdata(data[0].carResThree)
    //             setLoadingData(true)
    //         }
    //     } else {
    //         console.log('not existing')
    //     }
    // }

    // function tester() {
    //     console.log('test')
    // }

    // if (loadingData) {
    //     console.log('hello')
    // }

    // console.log(props)
    // getSpecificUser(props.reservation.user.userID, props.reservation.carkey)
    // useEffect(() => {
    //     if (props.loading) {
    //         getSpecificUser(props.reservation.user.userID, props.reservation.carkey)
    //         if (loadingData && dbData) {
    //             console.log('dbData', dbData)
    //         }

    //         step1 = dbData.orderDetails
    //         step2 = dbData.verificationProcess
    //         const payMethod = dbData.paidDeposit.method
    //         step3 = dbData.paidDeposit.paid

    //         if (!step1 && !step2 && !step3) {
    //             title = 'Inchecken in 3 stappen'
    //             buttonText = 'Check gegevens'
    //             time = (
    //                 <p className="time">
    //                     Dit proces neemt ongeveer 5 minuten van jouw tijd in beslag.
    //                 </p>
    //             )
    //         } else if (step1 && !step2 && !step3) {
    //             title = 'Gelukt! Je kunt verder naar stap 2'
    //             buttonText = 'Start verificatie'
    //         } else if (step1 && step2 && !step3 && !payMethod) {
    //             title = 'Gelukt! Je bent bijna klaar'
    //             buttonText = 'Regel borg'
    //         } else if (step1 && step2 && step3) {
    //             title = 'Geregeld! Ontvang nu je QR-code'
    //             buttonText = 'Afronden'
    //         } else if (step1 && !step2 && step3) {
    //             title = 'Ga verder met de verificatie'
    //             buttonText = 'Doorgaan'
    //         } else if (step1 && step2 && !step3 && payMethod) {
    //             title = 'Bijna klaar! Regel nu de borg '
    //             buttonText = 'Doorgaan'
    //         }
    //     }
    // }, [])

    // async function getSpecificUser(props) {
    //     if (props.reservation.carkey == 0) {
    //         const { data, error } = await supabase
    //             .from('users')
    //             .select()
    //             .eq('userID', props.reservation.user.userID)
    //         if (!data) {
    //             console.log(error)
    //         } else {
    //             setDatabaseSteps(data[0].carResOne)
    //             setLoadingData(true)
    //         }
    //     } else if (props.reservation.carkey == 1) {
    //         const { data, error } = await supabase
    //             .from('users')
    //             .select()
    //             .eq('userID', props.reservation.user.userID)
    //         if (!data) {
    //             console.log(error)
    //         } else {
    //             setDatabaseSteps(data[0].carResTwo)
    //             setLoadingData(true)
    //         }
    //     } else if (props.reservation.carkey == 2) {
    //         const { data, error } = await supabase
    //             .from('users')
    //             .select()
    //             .eq('userID', props.reservation.user.userID)
    //         if (!data) {
    //             console.log(error)
    //         } else {
    //             setDatabaseSteps(data[0].carResThree)
    //             setLoadingData(true)
    //         }
    //     } else {
    //         console.log('not existing')
    //     }
    // }

    // const getData = async () => {
    //     try {
    //         const data = await axios.get(`/api/order-details`).then((res) => {
    //             console.log('res', res)
    //             setCarkey(res.data.carkey)
    //         })
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // console.log(carkey)

    // if (carkey) {
    //     console.log(carkey)
    // }

    // console.log(props)

    // let title = 'Inchecken in slechts 3 stappen'
    // let buttonText = 'Volgende'
    // let time
    // let step1 = false
    // let step2 = false
    // let step3 = false

    // getSpecificUser(props)

    // console.log(props)

    // if (loadingData) {
    //     console.log(props)
    //     // getSpecificUser(props)
    // }
    // // const updateSteps = (status) => {
    //     step1 = status.orderDetails
    //     step2 = status.verificationProcess
    //     console.log(status.paidDeposit)
    //     const payMethod = status.paidDeposit.method
    //     step3 = status.paidDeposit.paid

    //     if (!step1 && !step2 && !step3) {
    //         title = 'Inchecken in 3 stappen'
    //         buttonText = 'Check gegevens'
    //         time = (
    //             <p className="time">Dit proces neemt ongeveer 5 minuten van jouw tijd in beslag.</p>
    //         )
    //     } else if (step1 && !step2 && !step3) {
    //         title = 'Gelukt! Je kunt verder naar stap 2'
    //         buttonText = 'Start verificatie'
    //     } else if (step1 && step2 && !step3 && !payMethod) {
    //         title = 'Gelukt! Je bent bijna klaar'
    //         buttonText = 'Regel borg'
    //     } else if (step1 && step2 && step3) {
    //         title = 'Geregeld! Ontvang nu je QR-code'
    //         buttonText = 'Afronden'
    //     } else if (step1 && !step2 && step3) {
    //         title = 'Ga verder met de verificatie'
    //         buttonText = 'Doorgaan'
    //     } else if (step1 && step2 && !step3 && payMethod) {
    //         title = 'Bijna klaar! Regel nu de borg '
    //         buttonText = 'Doorgaan'
    //     }
    // }

    // console.log(props.loading)

    return (
        <Styles.Section id="introduction">
            <article>
                <h1>{title}</h1>
                <ul>
                    <IconListItem
                        iconName="DataIcon"
                        opacity="0.75"
                        title="Gegevens"
                        text="Controleer of de gegevens van je reservering juist zijn."
                        completed={step1}
                    />
                    <IconListItem
                        iconName="UserCheckIcon"
                        opacity="0.75"
                        title="Verificatie"
                        text="We controleren of je een geldig rijbewijs hebt en of je minimaal 23 jaar oud bent."
                        completed={step2}
                    />
                    <IconListItem
                        iconName="CreditcardIcon"
                        opacity="0.75"
                        title="Borg"
                        text="Geef een garantie op je creditcard of betaal contant."
                        completed={step3}
                    />
                </ul>
                {time}
            </article>

            <VerificationButtons
                typeSecondary="href"
                typePrimary="btn"
                textPrimary={buttonText}
                textSecondary="Terug"
                linkPrimary="#"
                linkSecondary={props.backLink}
                callbackPrimary={moveRight}
            />
        </Styles.Section>
    )
}

export default StepsExplainer
