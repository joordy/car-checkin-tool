// React & Modules imports
import { useState } from 'react'
import * as Styles from './checkIdentity.styles.js'
import { useSelector, useDispatch } from 'react-redux'
import { verifiedDriver } from 'constants/actions'
import { loadStripe } from '@stripe/stripe-js'

// Components
import { Icons, ButtonPrimary } from 'components/atoms/index'
import { VerificationButtons } from 'components/molecules/index'

// Set up
const stripePromise = loadStripe(
    'pk_test_51IsTukJEAzd2OWuLXMthwYCSoAGWjPoQntvnjXvvx1V5SrORa7YcifsL2G2mfwNpH5HBJG4fdNM9boA6ugGST6ir005GZ4jgMO',
)

// React component
const CheckIdentity = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [consentDeclined, setConsentDeclined] = useState(false)

    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-200vw)'
    }

    const moveLeft = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-400vw)'
    }

    const handleClick = async (event) => {
        console.log('CLICKY')
        setIsLoading(true)
        const stripe = await stripePromise
        // Connect to backend to fetch the verification session
        const response = await fetch(`/api/create-verification-session`, { method: 'POST' })
        const client_secret = await response.json()
        // Opens verification modal
        const result = await stripe.verifyIdentity(client_secret)

        if (result.error) {
            // If `verifyIdentity` fails, display the localized error
            // message using `result.error.message`.
            setIsLoading(false)
            console.log('ERRROR', result)
            if (result.error.code === 'consent_declined') {
                setConsentDeclined(true)
            }
        } else {
            setIsLoading(false)
            dispatch(verifiedDriver())
        }
    }

    const isVerifiedDriver = useSelector((state) => state.verifiedDriverReducer)
    const dispatch = useDispatch()

    console.log(isLoading, 'isLoading')
    return (
        <Styles.Section id="identity">
            <header>
                <h1>Maak een foto van je rijbewijs</h1>
                <p>
                    We beschermen je gegevens en gebruiken de foto uitsluitend om te verifiëren of
                    je in het bezit bent van een geldig rijbewijs. Na de huurperiode verwijderen we
                    dit onmiddelijk.
                </p>
                <Icons type="close" width="1.5rem" height="1.5em" />
            </header>

            <Styles.IdentityChecker>
                {isLoading ? (
                    <>
                        <Styles.LoadingBtn>
                            <Icons type="loader" width="2.5rem" height="2.5rem" />
                            <p>Verificatie wordt gestart</p>
                            <p>Dit kan even duren</p>
                        </Styles.LoadingBtn>
                    </>
                ) : (
                    <></>
                )}
                {isVerifiedDriver ? (
                    <>
                        <Styles.LoadingBtn>
                            <Icons type="success" width="3rem" height="3rem" />
                            <p>Verificatie gelukt</p>
                            <p>Druk op “Volgende” om verder te gaan</p>
                        </Styles.LoadingBtn>
                    </>
                ) : (
                    <></>
                )}
                {consentDeclined ? (
                    <>
                        <Styles.LoadingBtn>
                            <Icons type="warning" width="2.5rem" height="2.5rem" />
                            <p>Toestemming geweigerd</p>
                            <p>
                                Probeer het opnieuw of ga terug naar de vorige stap als je op
                                locatie bij Europcar wilt verifiëren.
                            </p>
                            <ButtonPrimary
                                type="btn"
                                text="Probeer opnieuw"
                                _callback={handleClick}
                            />
                        </Styles.LoadingBtn>
                    </>
                ) : (
                    <></>
                )}
                <Styles.StartBtn role="link" onClick={handleClick}>
                    <Icons type="camera" width="2.5rem" />
                </Styles.StartBtn>
            </Styles.IdentityChecker>

            {isVerifiedDriver ? (
                <VerificationButtons
                    typeSecondary="btn"
                    typePrimary="btn"
                    textPrimary="Volgende"
                    textSecondary="Terug"
                    linkPrimary="#"
                    linkSecondary="#"
                    callbackSecondary={moveRight}
                    callbackPrimary={moveLeft}
                />
            ) : (
                <VerificationButtons
                    typeSecondary="btn"
                    typePrimary="btn"
                    textPrimary="Volgende"
                    textSecondary="Terug"
                    linkPrimary="#"
                    linkSecondary="#"
                    callbackSecondary={moveRight}
                    disabled
                />
            )}
        </Styles.Section>
    )
}

export default CheckIdentity
