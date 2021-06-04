// React imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './reservations.styles.js'
import { ReservationCard, ReservationHeader, EmptyReservation } from 'components/organisms/index'

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

    const firstUser = reservations[2]

    console.log(reservations)

    return (
        <>
            {(() => {
                if (reservations[0]) {
                    return <ReservationHeader user={firstUser} />
                } else {
                    return <ReservationHeader user={{ firstName: 'Lars' }} />
                }
            })()}

            <Styles.Main>
                {firstUser && (
                    <>
                        {firstUser.cars.length > 1 ? (
                            <>
                                <h2>Mijn Reserveringen</h2>
                                {firstUser.cars.map((item) => {
                                    return (
                                        <ReservationCard
                                            key={item.reservationID}
                                            {...item}
                                            user={firstUser}
                                        />
                                    )
                                })}
                            </>
                        ) : (
                            <EmptyReservation />
                        )}
                    </>
                )}
            </Styles.Main>
        </>
    )
}

export default Reservations
