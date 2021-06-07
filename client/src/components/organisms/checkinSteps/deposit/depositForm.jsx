// React imports
import React, { useState } from 'react'
import * as Styles from './depositForm.styles.js'
import { useSelector } from 'react-redux'

// Components
import { VerificationButtons, DepositType, DepositCC } from 'components/molecules/index'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

// Set up
const promise = loadStripe(
    'pk_test_51IsTukJEAzd2OWuLXMthwYCSoAGWjPoQntvnjXvvx1V5SrORa7YcifsL2G2mfwNpH5HBJG4fdNM9boA6ugGST6ir005GZ4jgMO',
)

// React component
const DepositForm = () => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-100vw)'
    }

    console.log('test data for Stripe:', {
        succes: {
            cardnr: '4242 4242 4242 4242',
            month: '08/24',
            csv: '123',
        },
        auth: {
            cardnr: '4000 0025 0000 3155',
            month: '08/24',
            csv: '123',
        },
        failed: {
            cardnr: '4000 0000 0000 9995',
            month: '08/24',
            csv: '123',
        },
    })

    const isPaid = useSelector((state) => state.paidReducer)
    console.log('paid', isPaid)

    return (
        <Styles.Section>
            <header>
                <h1>Borg reservering</h1>
                <p>
                    Bij een creditcard reservering wordt er niets afgeschreven. Kies je voor iDEAL?
                    Dan wordt de borg wel meteen afgeschreven. Je krijgt het na de huurperiode
                    automatisch weer terug, mits er geen schade is.
                </p>
            </header>

            <main>
                <article>
                    <h2>Borg:</h2>
                    <p>
                        € <span>500,-</span>
                    </p>
                </article>

                <article>
                    <h2>Betaalmethode</h2>
                    <DepositType labelText="Creditcard">
                        <Elements stripe={promise}>
                            <DepositCC />
                        </Elements>
                    </DepositType>
                    <DepositType labelText="iDeal">
                        <p>Deze betaalmethode wordt op dit moment nog niet ondersteund.</p>
                    </DepositType>
                </article>
            </main>

            {isPaid ? (
                <VerificationButtons
                    typeSecondary="btn"
                    typePrimary="btn"
                    textPrimary="Volgende"
                    textSecondary="Terug"
                    linkPrimary="/qr"
                    linkSecondary="#"
                    callbackSecondary={moveRight}
                    callbackPrimary={() => (window.location.href = '/qr')}
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

export default DepositForm
