// React imports
import React from 'react'
import * as Styles from './checkIdentity.styles.js'
import { loadStripe } from '@stripe/stripe-js'

// Components
import { CloseIcon, Icons } from 'components/atoms/index'
import { VerificationButtons } from 'components/molecules/index'

const stripePromise = loadStripe(
    'pk_test_51IsTukJEAzd2OWuLXMthwYCSoAGWjPoQntvnjXvvx1V5SrORa7YcifsL2G2mfwNpH5HBJG4fdNM9boA6ugGST6ir005GZ4jgMO',
)
// React component
const CheckIdentity = () => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-100vw)'
    }

    const moveLeft = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-300vw)'
    }

    const handleClick = async (event) => {
        const stripe = await stripePromise
        // Connect to backend to fetch the verification session
        const response = await fetch('/create-verification-session', { method: 'POST' })
        const client_secret = await response.json()
        // Opens verification modal
        const result = await stripe.verifyIdentity(client_secret)

        console.log('result', result)
        if (result.error) {
            // If `verifyIdentity` fails, display the localized error
            // message using `result.error.message`.
            alert(result.error.message)
        }
    }

    return (
        <Styles.Section id="identity">
            <header>
                <h1>Maak een foto van je rijbewijs</h1>
                <p>
                    We beschermen je gegevens en gebruiken de foto uitsluitend om te verifiëren of
                    je in het bezit bent van een geldig rijbewijs. Na de huurperiode verwijderen we
                    dit onmiddelijk.
                </p>
                <CloseIcon width="1.5rem" height="1.5em" />
                <Icons type="close" />
            </header>

            <Styles.IdentityChecker>
                <button role="link" onClick={handleClick}>
                    Verify
                </button>
            </Styles.IdentityChecker>

            <VerificationButtons
                textPrimary="Volgende"
                textSecondary="Terug"
                linkPrimary="#"
                linkSecondary="#"
                callbackSecondary={moveRight}
                callbackPrimary={moveLeft}
            />
        </Styles.Section>
    )
}

export default CheckIdentity
