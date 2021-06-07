// React & Module imports
import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import supabase from 'db/supabase.js'
import * as Styles from './reservations.styles.js'

// Components
import { ReservationCard, ReservationHeader, EmptyReservation } from 'components/organisms/index'

// React component
const Reservations = () => {
    const [currentUser, setCurrentUser] = useState([])
    const [loggedUser, setLoggedUser] = useState([])

    const getData = async () => {
        const data = await fetch(`${process.env.REACT_APP_BACKEND}/reservations`)
        const response = await data.json()
        if (response === 'undefined') {
            console.log(response)
            window.location.href = '/'
        } else {
            setLoggedUser(response)
        }
    }

    const getSpecificUser = async () => {
        const { data, error } = await supabase
            .from('users')
            .select()
            .eq('userID', loggedUser.userID)

        if (!data) {
            console.log(error)
        } else {
            setCurrentUser(...data)
        }
    }

    if (currentUser.length === 0) {
        getSpecificUser()
    }

    useEffect(async () => {
        getData()
    }, [])

    // console.log('loggedUser', loggedUser)
    // console.log('currentUser', currentUser)

    return (
        <>
            {currentUser.firstName ? (
                <>
                    <ReservationHeader user={{ firstName: currentUser.firstName }} />
                    <Styles.Main>
                        {currentUser.cars.length > 1 ? (
                            <>
                                <h2>Mijn Reserveringen</h2>
                                {currentUser.cars.map((item) => {
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
