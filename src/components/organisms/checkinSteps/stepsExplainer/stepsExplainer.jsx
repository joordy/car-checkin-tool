// React imports
import { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import axios from 'axios'
import * as Styles from './stepsExplainer.styles.js'

// Componenten
import { VerificationButtons, IconListItem } from 'components/molecules/index'

// React component
const StepsExplainer = (props) => {
    const [currentReservation, setCurrentReservation] = useState(null)
    const [loadingData, setLoadingData] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    const [currentKey, setCurrentKey] = useState(null)

    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-100vw)'
    }

    // Get user data from back-end
    const getData = async () => {
        try {
            const data = await axios
                .get(`https://us-central1-car-check-in.cloudfunctions.net/app/api/order-details`)
                .then((res) => {
                    if (res.data) {
                        const index = res.data.carkey
                        const userID = res.data.user.userID
                        setCurrentUser(res.data.user)
                        setCurrentKey(res.data.carkey)
                        getSpecificReservation(userID, index)
                    }
                })
        } catch (e) {
            console.log(e)
        }
    }

    // Set default content
    let title = 'Inchecken in slechts 3 stappen'
    let buttonText = 'Volgende'
    let time
    let step1 = false
    let step2 = false
    let step3 = false

    // Fetch current reservation data from Supabase
    async function getSpecificReservation(userID, index) {
        if (index == 0) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                await setCurrentReservation(data[0].carResOne)
                await setLoadingData(true)
            }
        } else if (index == 1) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                await setCurrentReservation(data[0].carResTwo)
                await setLoadingData(true)
            }
        } else if (index == 2) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                await setCurrentReservation(data[0].carResThree)
                await setLoadingData(true)
            }
        }
    }

    // Fetch data when component is mounted
    useEffect(() => {
        getData()
    }, [])

    // If data has finished loading > Change content based on completed steps
    if (loadingData) {
        step1 = currentReservation.orderDetails
        step2 = currentReservation.verificationProcess
        const driverVerification = currentReservation.driverOne.method
        const payMethod = currentReservation.paidDeposit.method
        step3 = currentReservation.paidDeposit.paid

        console.log(currentReservation)
        console.log(step1, step2, step3, driverVerification, payMethod)

        if (!step1 && !step2 && !step3) {
            title = 'Inchecken in 3 stappen'
            buttonText = 'Check gegevens'
            time = (
                <p className="time">Dit proces neemt ongeveer 5 minuten van jouw tijd in beslag.</p>
            )
        } else if (step1 && !step2 && !step3) {
            title = 'Gelukt! Je kunt verder'
            buttonText = 'Verder'
        } else if (
            (step1 && step2 && !step3) ||
            (step1 && driverVerification == 'skip' && !step3) ||
            (step1 && driverVerification == 'location' && !step3)
        ) {
            title = 'Gelukt! Je bent bijna klaar'
            buttonText = 'Verder'
        } else if (
            (step1 && step2 && step3) ||
            (step1 && step2 && payMethod == 'skip') ||
            (step1 && step2 && payMethod == 'location') ||
            (step1 && driverVerification == 'skip' && payMethod == 'skip') ||
            (step1 && driverVerification == 'location' && payMethod == 'location') ||
            (step1 && driverVerification == 'skip' && step3) ||
            (step1 && driverVerification == 'location' && step3)
        ) {
            title = 'Geregeld! Ontvang nu je QR-code'
            buttonText = 'Afronden'
        } else if (step1 && !step2 && step3) {
            title = 'Ga verder met de verificatie'
            buttonText = 'Doorgaan'
        } else if (step1 && step2 && !step3) {
            title = 'Bijna klaar! Regel nu de borg '
            buttonText = 'Doorgaan'
        }
    }

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
                textSecondary="Terug naar overzicht"
                linkPrimary="#"
                linkSecondary="/reservations"
                callbackPrimary={moveRight}
            />
        </Styles.Section>
    )
}

export default StepsExplainer
