// React imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './reservations.styles.js'
import { ReservationCard, ReservationHeader } from 'components/organisms/index'

// React component
const Reservations = () => {
    const [reservations, setReservations] = useState([])

    const readDB = async () => {
        const { data, error } = await supabase.from('users').select()
        setReservations(data)
    }

    useEffect(() => {
        readDB()
    }, [])

    const firstUser = reservations[0]

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
                    if (firstUser) {
                        return firstUser.cars.map((item) => {
                            return (
                                <ReservationCard
                                    key={item.reservationID}
                                    {...item}
                                    user={firstUser}
                                />
                            )
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
