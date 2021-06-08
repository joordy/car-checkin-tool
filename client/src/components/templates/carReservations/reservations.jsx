// React & Module imports
import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import supabase from 'db/supabase.js'
import * as Styles from './reservations.styles.js'

// Components
import { ReservationCard, ReservationHeader, EmptyReservation } from 'components/organisms/index'

// React component
const Reservations = () => {
    const [currentUser, setCurrentUser] = useState({})
    const [reservations, setReservations] = useState([])

    const getData = async () => {
        const data = await fetch(`${process.env.REACT_APP_BACKEND}/reservations`)
        const response = await data.json()
        if (response === 'undefined') {
            console.log(response)
            window.location.href = '/'
        } else {
            setCurrentUser(response)
            setReservations([...response.carResOne, ...response.carResTwo, ...response.carResThree])
        }
    }

    useEffect(async () => {
        getData()
        if (currentUser.userID) {
            const { data, error } = await supabase
                .from('users')
                .select()
                .eq('userID', currentUser.userID)
            if (!data) {
                console.log(error)
            } else {
                setReservations([
                    ...data[0].carResOne,
                    ...data[0].carResTwo,
                    ...data[0].carResThree,
                ])
            }
        }
    }, [])

    console.log('currentUser', currentUser)
    console.log('reservations', reservations)

    return (
        <>
            {currentUser.firstName ? (
                <>
                    <ReservationHeader user={{ firstName: currentUser.firstName }} />
                    <Styles.Main>
                        {reservations.length > 1 ? (
                            <>
                                <h2>Mijn Reserveringen</h2>
                                {reservations.map((item) => {
                                    return (
                                        <ReservationCard
                                            key={item.reservationID}
                                            {...item}
                                            user={currentUser}
                                        />
                                    )
                                })}
                            </>
                        ) : (
                            <EmptyReservation />
                        )}
                    </Styles.Main>
                </>
            ) : (
                <p>The condition must be false!</p>
            )}
        </>
    )
}

export default Reservations
