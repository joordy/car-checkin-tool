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
<<<<<<< HEAD
            const data = await axios
                .get(`${process.env.REACT_APP_BACKEND}/reservations`)
                .then((res) => {
                    console.log(res.data)
                    setCurrentUser(res.data)
                    setAllReservations([
                        res.data.carResOne,
                        res.data.carResTwo,
                        res.data.carResThree,
                    ])
                })
=======
            const data = await axios.get(`/api/reservations`).then((res) => {
                console.log('res.data', res.data)
                setCurrentUser(res.data)
                setAllReservations([res.data.carResOne, res.data.carResTwo, res.data.carResThree])
            })
            console.log(data)
>>>>>>> 4ad927893673caee0eaed6e239b686ea7b17e5ec
            setLoadingData(true)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(async () => {
        getData()
    }, [])

<<<<<<< HEAD
    console.log(allReservations)
    console.log(currentUser)
=======
    // console.log('allReservations', allReservations)
    // console.log('currentUser', currentUser)
>>>>>>> 4ad927893673caee0eaed6e239b686ea7b17e5ec

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
