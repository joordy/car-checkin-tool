// React & Modules imports
import { useState } from 'react'
import * as Styles from './checkIdentity.styles.js'
import { useSelector, useDispatch } from 'react-redux'
import { verifiedDriver } from 'constants/actions'
import { loadStripe } from '@stripe/stripe-js'

// Components
import { Icons } from 'components/atoms/index'
import { VerificationButtons } from 'components/molecules/index'

// Set up
const stripePromise = loadStripe(
    'pk_test_51IsTukJEAzd2OWuLXMthwYCSoAGWjPoQntvnjXvvx1V5SrORa7YcifsL2G2mfwNpH5HBJG4fdNM9boA6ugGST6ir005GZ4jgMO',
)

// React component
const CheckIdentity = () => {
    const [isLoading, setIsLoading] = useState(false)

    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-200vw)'
    }

    const moveLeft = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-400vw)'
    }

    const handleClick = async (event) => {
        setIsLoading(true)
        const stripe = await stripePromise
        // Connect to backend to fetch the verification session
        const response = await fetch(
            `${process.env.REACT_APP_BACKEND}/create-verification-session`,
            { method: 'POST' },
        )
        const client_secret = await response.json()
        // Opens verification modal
        const result = await stripe.verifyIdentity(client_secret)

        console.log('result', result)
        if (result.error) {
            // If `verifyIdentity` fails, display the localized error
            // message using `result.error.message`.
            alert(result.error.message)
        } else {
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
                <Styles.StartBtn role="link" onClick={handleClick}>
                    <Icons type="camera" width="2.5rem" />
                </Styles.StartBtn>

                {/*} {isLoading ? (
                    <>
                        <Styles.LoadingBtn role="link">
                            <Icons type="success" width="2.5rem" height="2.5rem" />
                            <p>Verificatie wordt gestart</p>
                        </Styles.LoadingBtn>
                    </>
                ) : (
                    <>
                    </>
                )} */}
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
