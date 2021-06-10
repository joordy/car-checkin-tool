// React & Module imports
import { useState, useEffect } from 'react'
import axios from 'axios'
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
            const data = await axios.get(`/api/reservations`).then((res) => {
                console.log('res.data', res)
                setCurrentUser(res.data)
                setAllReservations([res.data.carResOne, res.data.carResTwo, res.data.carResThree])
            })
            console.log(data)
            setLoadingData(true)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(async () => {
        getData()
    }, [])

    // console.log('allReservations', allReservations)
    // console.log('currentUser', currentUser)

    return (
        <>
            {loadingData ? (
                <>
                    <ReservationHeader user={{ firstName: currentUser.firstName }} />
                    <Styles.Main>
                        {allReservations.length > 1 ? (
                            <>
                                <h2>Mijn Reserveringen</h2>
                                {allReservations.map((item, index) => {
                                    return (
                                        <ReservationCard
                                            key={item.reservationID}
                                            data={item}
                                            reservationKey={index}
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
