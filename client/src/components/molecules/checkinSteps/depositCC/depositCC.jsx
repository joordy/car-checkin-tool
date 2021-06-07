// React & Module imports
import React, { useState, useEffect } from 'react'
import * as Styles from './depositCC.styles.js'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useSelector, useDispatch } from 'react-redux'
import { paid } from 'constants/actions'

// React component
const DepositCC = ({ labelText, children }) => {
    // Stripe code adapted from: https://stripe.com/docs/payments/integration-builder
    const [succeeded, setSucceeded] = useState(false)
    const [error, setError] = useState(null)
    const [processing, setProcessing] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const paidVal = useSelector((state) => state.paidReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        window
            .fetch(`${process.env.REACT_APP_BACKEND}/create-payment-intent`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
            })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setClientSecret(data.clientSecret)
            })
    }, [])

    const cardStyle = {
        style: {
            hidePostalCode: true,
            base: {
                // hidePostalCode: true
                color: '#32325d',
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '14px',
                '::placeholder': {
                    color: '#32325d',
                },
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a',
            },
        },
    }

    const handleChange = async (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty)
        setError(event.error ? event.error.message : '')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        })

        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`)
            setProcessing(false)
        } else {
            setError(null)
            setProcessing(false)
            setSucceeded(true)
            // convert paid to true when successfull
            dispatch(paid())
        }
    }
    return (
        <Styles.DepositForm onSubmit={handleSubmit}>
            <fieldset>
                <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
                <button disabled={processing || disabled || succeeded} id="submit">
                    <span id="button-text">
                        {processing ? <div className="spinner" id="spinner"></div> : 'Betaal'}
                    </span>
                </button>
            </fieldset>

            {error && (
                <div className="card-error" role="alert">
                    {error}
                </div>
            )}

            <p className={succeeded ? 'result-message' : 'result-message hidden'}>
                Payment succeeded, see the result in your
                <a href={`https://dashboard.stripe.com/test/payments`}> Stripe dashboard.</a>{' '}
                Refresh the page to pay again.
            </p>
        </Styles.DepositForm>
    )
}

export default DepositCC
