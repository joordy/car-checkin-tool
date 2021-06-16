// React & Module imports
import { useState, useEffect } from 'react'
import axios from 'axios'
import * as Styles from './reservations.styles.js'
import Media from 'react-media'
import { device } from 'styles/devices'
import { ReservationSidebar, ReservationCardDesktop } from 'components/organisms/index'

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
                .get(`https://us-central1-car-check-in.cloudfunctions.net/app/api/reservations`)
                .then((res) => {
                    console.log('res.data', res)
                    setCurrentUser(res.data)
                    setAllReservations([
                        res.data.carResOne,
                        res.data.carResTwo,
                        res.data.carResThree,
                    ])
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

    return (
        <>
            {loadingData ? (
                <>
                    <Media
                        queries={{
                            small: device.mobile,
                            large: device.tablet,
                        }}
                    >
                        {(matches) => (
                            <>
                                {matches.small && (
                                    <>
                                        <ReservationHeader
                                            user={{ firstName: currentUser.firstName }}
                                        />
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
                                )}
                                {matches.large && (
                                    <>
                                        <ReservationSidebar user={currentUser} />{' '}
                                        {allReservations.length > 1 ? (
                                            <>
                                                <Styles.MainDesktop>
                                                    <h2>Mijn Reserveringen</h2>
                                                    {allReservations.map((item, index) => {
                                                        return (
                                                            <ReservationCardDesktop
                                                                key={item.reservationID}
                                                                data={item}
                                                                reservationKey={index}
                                                                user={currentUser}
                                                            />
                                                        )
                                                    })}
                                                </Styles.MainDesktop>
                                            </>
                                        ) : (
                                            <EmptyReservation />
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </Media>
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
