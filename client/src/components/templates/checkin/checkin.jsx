// React imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './checkin.styles.js'
import {
    StepsExplainer,
    CheckUserInfo,
    CheckBookingInfo,
    CheckIdentity,
    CheckFacial,
} from 'components/organisms/index'

// React component
const PageOne = () => {
    const [reservations, setReservations] = useState([])
    const [items, setItems] = useState([])

    useEffect(() => {
        readDB()
        fetchItems()
    }, [])

    const readDB = async () => {
        const { data, error } = await supabase.from('users').select()
        setReservations(data)
    }

    const fetchItems = async () => {
        const data = await fetch('/checkin')
        const items = await data.json()
        setItems(items)
    }

    console.log('reservations', reservations)
    console.log('items', items)

    return (
        <Styles.Main>
            <div className="stepsWrapper">
                <StepsExplainer />
                <CheckUserInfo />
                <CheckBookingInfo />
                <CheckIdentity />
                <CheckFacial />
            </div>
        </Styles.Main>
    )
}

export default PageOne
