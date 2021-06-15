// React imports
import { useState, useEffect } from 'react'
import * as Styles from './showQRCode.styles.js'
import supabase from 'db/supabase.js'
import axios from 'axios'
import { updateDBwithQRCodeWallet } from 'db/updateDatabase'

// Componenten
import { Icons } from 'components/atoms/index'
import { SingleButtonWrapper } from 'components/molecules/index'
import { data } from 'browserslist'

// React component
const ShowQRCode = ({ reservation, user, carKey }) => {
    console.log(reservation)
    const [walletSerial, setWalletSerial] = useState('')

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
    } = reservation

    const updateSpecificUser = async (resID, userID, index, walletSerialNumber) => {
        const stateOne = reservation.driverOne && !reservation.driverTwo && !reservation.driverThree
        const stateTwo = reservation.driverOne && reservation.driverTwo && reservation.driverThree
        const stateThree = reservation.driverOne && reservation.driverTwo && reservation.driverThree

        const updateWithSettings = () => {
            if (stateOne) {
                return updateDBwithQRCodeWallet('oneDriver', reservation, walletSerialNumber)
            } else if (stateTwo) {
                return updateDBwithQRCodeWallet('twoDrivers', reservation, walletSerialNumber)
            } else if (stateThree) {
                return updateDBwithQRCodeWallet('threeDrivers', reservation, walletSerialNumber)
            }
        }

        if (index === 0) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResOne: updateWithSettings() })
                .eq('userID', user.userID)
            if (!data) {
                console.log(error)
            } else {
                console.log(data)
                // window.location.href = '/qr'
            }
        } else if (index === 1) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResTwo: updateWithSettings() })
                .eq('userID', user.userID)
            if (!data) {
                console.log(error)
            } else {
                console.log(data)
                // window.location.href = '/qr'
            }
        } else if (index === 2) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResThree: updateWithSettings() })
                .eq('userID', user.userID)
            if (!data) {
                console.log(error)
            } else {
                console.log(data)
                // window.location.href = '/qr'
            }
        }
    }

    async function verifyCheckin() {
        if (qrCode) {
            console.log('wel qr')
            setWalletSerial(walletSerialNumber)
        } else {
            console.log('geen qr')
            const userData = {
                firstName: user.firstName,
                fullName: `${user.firstName} ${user.lastName}`,
                email: user.email,
                pickUpLocation: pickUpLocation,
                handInLocation: handInLocation,
                pickUpDateTime: `${pickUpDate} ${pickUpTime.slice(0, -3)}`,
                handInDateTime: `${handInDate} ${handInTime.slice(0, -3)}`,
                reservationID: reservationID,
            }

            console.log('userData', userData)

            axios
                .post(
                    `https://us-central1-car-check-in.cloudfunctions.net/app/api/create-checkin`,
                    userData,
                )
                .then((res) => {
                    console.log(res.data)
                    if (res.data && res.data.status === '200') {
                        console.log('goed', data.serialNumber)
                        addPassData(res.data.serialNumber)
                    } else {
                        console.error('Kan pas niet aanmaken')
                        console.log(res.data.errors)
                    }
                })
                .catch((err) => console.log(err))
        }
    }

    async function addPassData(walletSerialNumber) {
        setWalletSerial(walletSerialNumber)
        await updateSpecificUser(reservationID, user.userID, carKey, walletSerialNumber)
    }

    useEffect(() => {
        verifyCheckin()
    }, [])

    return (
        <Styles.Section>
            <header>
                <h1>Incheckbewijs</h1>
                <p>Toon dit bij de Express-balie</p>
            </header>
            <article>
                <section>
                    <div>
                        <h3>Ophaallocatie</h3>
                        <p>{pickUpLocation}</p>
                    </div>
                    <div>
                        <h3>Afleverlocatie</h3>
                        <p>{handInLocation}</p>
                    </div>
                    <div>
                        <h3>Ophaaldatum</h3>
                        <p>
                            {pickUpDate} {pickUpTime.slice(0, -3)}
                        </p>
                    </div>
                    <div>
                        <h3>Afleverdatum</h3>
                        <p>
                            {handInDate} {handInTime.slice(0, -3)}
                        </p>
                    </div>
                </section>
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
