// React imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './reservations.styles.js'
import { ReservationCard, ReservationHeader, EmptyReservation } from 'components/organisms/index'
import { v4 as uuidv4 } from 'uuid'

// React component
const Reservations = () => {
    const [reservations, setReservations] = useState([])
    const [loggedInUser, setLoggedInUser] = useState([])

    const getData = async () => {
        const data = await fetch(`${process.env.REACT_APP_BACKEND}/reservations`)
        console.log(data)
        const response = await data.json()
        if (response === 'undefined') {
            console.log(response)
            // window.location.href = '/reservations'
        } else {
            setLoggedInUser(response)
        }
    }

    const readDB = async () => {
        const { data, error } = await supabase.from('users').select()
        setReservations(data)
    }

    useEffect(() => {
        getData()
        readDB()
    }, [])

    console.log('current loggedInUser:', loggedInUser)

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
