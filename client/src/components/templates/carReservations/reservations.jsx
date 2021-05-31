// React imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './reservations.styles.js'
import { ReservationCard, ReservationHeader } from 'components/organisms/index'

// React component
const Reservations = () => {
    const [reservations, setReservations] = useState([])
    const [items, setItems] = useState('')

    const readDB = async () => {
        const { data, error } = await supabase.from('users').select()
        setReservations(data)
    }

    const fetchItems = async () => {
        const data = await fetch('/reservations')
        const items = await data.json()
        setItems(items)
    }

    useEffect(() => {
        readDB()
        fetchItems()
    }, [])

    console.log('items', items)
    console.log(reservations)

    return (
        <>
            {(() => {
                if (reservations[0]) {
                    return <ReservationHeader user={reservations[0]} />
                } else {
                    return <ReservationHeader user={{ firstName: 'Lars' }} />
                }
            })()}

            <Styles.Main>
                <h2>Mijn Reserveringen</h2>
                {(() => {
                    if (reservations[0]) {
                        return reservations[0].cars.map((item) => {
                            return <ReservationCard key={item.reservation} {...item} />
                        })
                    } else {
                        return <p>Undefined</p>
                    }
                })()}
            </Styles.Main>
        </>
    )
}

export default Reservations
