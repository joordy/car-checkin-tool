// React imports
import React, { useState, useEffect } from 'react'
import * as Styles from './showQRCode.styles.js'
import { Icons } from 'components/atoms/index'
import { SingleButtonWrapper } from 'components/molecules/index'
import { data } from 'browserslist'

// React component
const ShowQRCode = ({ title }) => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(0)'
    }

    const moveLeft = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-200vw)'
    }

    const user2 = {
        firstName: 'Jelly',
        lastName: 'de Jonger',
        email: 'soyvvwbcezrullgosg@miucce.com',
        password: 'Welkom123',
        phone: '+31 6 12345678',
        birthDate: '01-01-1997',
        userID: '2e93f955-0632-493c-801f-3c1870fb6cad',
        reservations: [
            {
                reservationID: '2e93f955-0632-493c-801f-3c1870fb6cad',
                checkedIn: false,
                pickUpLocation: 'Amsterdam, Overtoom',
                pickUpDate: '02-06-2021',
                pickUpTime: '09:00',
                handInLocation: 'Amsterdam, Overtoom',
                handInDate: '05-06-2921',
                handInTime: '17:00',
                class: 'A',
                rentPrice: 600,
                extraDriver: 0,
                lowerOwnRisk: false,
                otherInfo: {
                    ownRisk: 450,
                    deposit: 500,
                    freeKM: 600,
                    priceExtraKM: 0.3,
                },
                orderDetails: false,
                verification: {
                    method: 'location',
                    verified: false,
                },
                paidDeposit: {
                    method: 'location',
                    paid: false,
                },
                wallet: {
                    choice: Boolean,
                    paid: Boolean,
                },
                qrCode: true,
                walletSerialNumber: '4eab2de7-05f2-4c70-b229-c8a183d85d03',
            },
        ],
    }

    const [walletSerial, setWalletSerial] = useState('')

    const currentReservation = '2e93f955-0632-493c-801f-3c1870fb6cad'
    const currentReservationData =
        user2.reservations[
            user2.reservations
                .map((reservation) => reservation.reservationID)
                .indexOf(currentReservation)
        ]

    const {
        pickUpLocation,
        handInLocation,
        pickUpDate,
        pickUpTime,
        handInDate,
        handInTime,
        reservationID,
        qrCode,
        walletSerialNumber,
    } = currentReservationData

    async function verifyCheckin() {
        if (currentReservationData && qrCode === true) {
            setWalletSerial(walletSerialNumber)
        } else if (currentReservationData && qrCode === false) {
            const userData = {
                firstName: user2.firstName,
                fullName: `${user2.firstName} ${user2.lastName}`,
                email: user2.email,
                pickUpLocation: pickUpLocation,
                handInLocation: handInLocation,
                pickUpDateTime: `${pickUpDate} ${pickUpTime}`,
                handInDateTime: `${handInDate} ${handInTime}`,
                reservationID: reservationID,
            }

            createCheckin(userData).then((data) => {
                if (data && data.status === '200') {
                    currentReservationData.qrCode = true
                    currentReservationData.walletSerialNumber = data.serialNumber
                    setWalletSerial(data.serialNumber)
                } else {
                    console.error('Kan pas niet aanmaken')
                    console.log(data.errors)
                }
            })
        }
    }

    async function createCheckin(data) {
        const response = await fetch(`${process.env.REACT_APP_BACKEND}/create-checkin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        return response.json()
    }

    useEffect(() => {
        verifyCheckin()
    }, [])

    return (
        <Styles.Section>
            <header>
                <h1>Incheckbewijs</h1>
                <p>Toon onderstaande QR-code bij de Express-balie</p>
            </header>
            <article>
                <section>
                    <div>
                        <h3>Ophaallocatie</h3>
                        <p>Amsterdam, Overtoom</p>
                    </div>
                    <div>
                        <h3>Afleverlocatie</h3>
                        <p>Amsterdam, Overtoom</p>
                    </div>
                    <div>
                        <h3>Ophaaldatum</h3>
                        <p>16 juni 2021 16:00</p>
                    </div>
                    <div>
                        <h3>Afleverdatum</h3>
                        <p>18 juni 2021 11:00</p>
                    </div>
                </section>
                <p className="klasse">Klasse A</p>
                <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${reservationID}`}
                    alt="qr code met reserveringsinformatie"
                />
                <a
                    href={`/card/${walletSerial}`}
                    target="_blank"
                    id="wallet"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://support.apple.com/library/content/dam/edam/applecare/images/nl_NL/iOS/add-to-apple-wallet-logo.png"
                        alt="Voeg toe aan Apple Wallet"
                    />
                </a>
            </article>

            <SingleButtonWrapper type="href" text="Terug naar account" link="/reservations" />
        </Styles.Section>
    )
}

export default ShowQRCode
