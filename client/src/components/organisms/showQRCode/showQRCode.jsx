// React imports
import React, { useEffect } from 'react'
import * as Styles from './showQRCode.styles.js'
import { Icons } from 'components/atoms/index'
import { SingleButtonWrapper } from 'components/molecules/index'

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

    // async function postData(url = '', data = {}) {
    //     // Default options are marked with *
    //     const response = await fetch(url, {
    //         method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //         mode: 'cors', // no-cors, *cors, same-origin
    //         credentials: 'same-origin', // include, *same-origin, omit
    //         headers: {
    //             Authorization:
    //                 'Basic QmVoc0pHTGZtWUtjaHl0TWlweE14TElQa1RvWnlwZ0tBbGZLT0h4SUd5T0diZGNwdGFodklyZm1Eem1icGtNWDpCZWhzSkdMZm1ZS2NoeXRNaXB4TXhMSVBrVG9aeXBnS0FsZktPSHhJR3lPR2JkY3B0YWh2SXJmbUR6bWJwa01Y',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data), // body data type must match "Content-Type" header
    //     })
    //     return response.json() // parses JSON response into native JavaScript objects
    // }

    // function getData(serial) {
    //     fetch(`https://api.passslot.com/v1/passes/pass.slot.generic/${serial}`, {
    //         headers: {
    //             Authorization:
    //                 'Basic QmVoc0pHTGZtWUtjaHl0TWlweE14TElQa1RvWnlwZ0tBbGZLT0h4SUd5T0diZGNwdGFodklyZm1Eem1icGtNWDpCZWhzSkdMZm1ZS2NoeXRNaXB4TXhMSVBrVG9aeXBnS0FsZktPSHhJR3lPR2JkY3B0YWh2SXJmbUR6bWJwa01Y',
    //         },
    //     })
    //         .then((response) => response.blob())
    //         .then((blob) => {
    //             var url = window.URL.createObjectURL(blob)
    //             var a = document.querySelector('a#wallet')
    //             a.href = url
    //             a.download = 'europcar.pkpass'
    //         })
    //         .catch((error) => console.error('Error with fetch', error))
    // }

    // //2026fe31-e314-4c10-9318-0b05ccb17881
    // let walletURL
    // useEffect(() => {
    //     postData('https://api.passslot.com/v1/templates/5119469477953536/pass', {
    //         reservationId: '123456789',
    //         pickLocation: 'Overtoom',
    //         name: 'Kelly de Jong',
    //         dropLocation: 'Overtoom',
    //         dropDate: '19-06-2021',
    //         pickDate: '20-06-201',
    //     }).then((data) => {
    //         console.log(data) // JSON data parsed by `data.json()` call
    //         getData(data.serialNumber)
    //     })
    // }, [])

    return (
        <Styles.Section>
            <header>
                <h1>Incheckbewijs</h1>
                <Icons type="close" width="1.5rem" height="1.5em" />
            </header>
            <article>
                <section>
                    <div>
                        <h3>Ophaallocatie</h3>
                        <p>Testen</p>
                    </div>
                    <div>
                        <h3>Afleverlocatie</h3>
                        <p>Testen</p>
                    </div>
                    <div>
                        <h3>Ophaaldatum</h3>
                        <p>Testen</p>
                    </div>
                    <div>
                        <h3>Afleverdatum</h3>
                        <p>Testen</p>
                    </div>
                </section>
                <p className="klasse">Klasse A</p>
                <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=$example"
                    alt="qr code met reserveringsinformatie"
                />
                <a id="wallet" rel="noopener noreferrer">
                    <img
                        src="https://support.apple.com/library/content/dam/edam/applecare/images/nl_NL/iOS/add-to-apple-wallet-logo.png"
                        alt="Flowers in Chania"
                    />
                </a>
            </article>

            <SingleButtonWrapper text="Terug naar account" link="#" callback={moveRight} />
        </Styles.Section>
    )
}

export default ShowQRCode
