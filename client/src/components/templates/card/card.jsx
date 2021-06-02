// React imports
import React, { useState, useEffect } from 'react'
import * as Styles from './card.styles.js'
import { useParams } from 'react-router-dom'
import { Icons } from 'components/atoms/index'

// React component
const Card = () => {
    const { id } = useParams()

    function getCard(serial) {
        fetch(`https://api.passslot.com/v1/passes/pass.slot.generic/${serial}`, {
            headers: {
                Authorization: `Basic ${process.env.REACT_APP_WALLET_SECRET}`,
            },
        })
            .then((response) => response.blob())
            .then((blob) => {
                var url = window.URL.createObjectURL(blob)
                var a = document.querySelector('a#card')
                a.href = url
                a.download = 'europcar.pkpass'
                a.click()
                a.remove()
            })
            .catch((error) => console.error('Error with fetch', error))
    }

    useEffect(() => {
        getCard(id)
    }, [])

    return (
        <Styles.Main>
            <Icons type="success" width="5em" height="5em" />
            <h1>Je check-in kaart wordt gedownload!</h1>
            <p>
                Je kunt deze kaart toevoegen aan je Apple Wallet en gebruiken wanneer je incheckt
                bij de Europcar locatie. We wensen je veel plezier en een fijne reis!
            </p>
            <a id="card"></a>
        </Styles.Main>
    )
}

export default Card
