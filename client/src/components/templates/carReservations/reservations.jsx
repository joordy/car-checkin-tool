// React & Module imports
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import supabase from 'db/supabase.js'
import * as Styles from './reservations.styles.js'

// Components
import { ReservationCard, ReservationHeader, EmptyReservation } from 'components/organisms/index'

// React component
const Reservations = () => {
    const [allReservations, setAllReservations] = useState([])
    const [currentUser, setCurrentUser] = useState([])
    const [loadingData, setLoadingData] = useState(false)

    const getData = async () => {
        try {
            const data = await axios
                .get(`${process.env.REACT_APP_BACKEND}/reservations`)
                .then((res) => {
                    console.log(res.data)
                    setCurrentUser(res.data)
                    setAllReservations([
                        ...res.data.carResOne,
                        ...res.data.carResTwo,
                        ...res.data.carResThree,
                    ])
                })
            setLoadingData(true)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(async () => {
        getData()
    }, [])

    return (
        <>
            {loadingData ? (
                <>
                    <ReservationHeader user={{ firstName: currentUser.firstName }} />
                    <Styles.Main>
                        {allReservations.length > 1 ? (
                            <>
                                <h2>Mijn Reserveringen</h2>
                                {allReservations.map((item) => {
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
                <>
                    <ReservationHeader user={{ firstName: 'loading' }} />
                </>
            )}
        </>
    )
}

export default Reservations
