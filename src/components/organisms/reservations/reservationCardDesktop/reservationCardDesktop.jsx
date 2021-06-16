// React & Modules imports
import { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import axios from 'axios'
import * as Styles from './reservationCardDesktop.styles.js'

// Components
import { Icons } from 'components/atoms/index'
import { CheckinButtons, DealerLocations } from 'components/molecules/index'

// React Component
const ReservationCardDesktop = (props) => {
    const [reservation, setReservation] = useState(null)
    const [loadingData, setLoadingData] = useState(false)
    const [showConditionalText, setShowConditionalText] = useState(false)

    const getData = async () => {
        try {
            await axios
                .get(`https://us-central1-car-check-in.cloudfunctions.net/app/api/reservations`)
                .then((res) => {
                    if (res.data) {
                        getSpecificReservation(res.data.userID, props.reservationKey)
                    }
                })
        } catch (e) {
            console.log(e)
        }
    }

    async function getSpecificReservation(userID, index) {
        if (index == 0) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                await setReservation(data[0].carResOne)
                await setLoadingData(true)
                conditionalChecker(data[0].carResOne)
            }
        } else if (index == 1) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                await setReservation(data[0].carResTwo)
                await setLoadingData(true)
                conditionalChecker(data[0].carResTwo)
            }
        } else if (index == 2) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                await setReservation(data[0].carResThree)
                await setLoadingData(true)
                conditionalChecker(data[0].carResThree)
            }
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const conditionalChecker = (res) => {
        if (
            res.orderDetails === true ||
            res.verificationProcess === true ||
            res.paidDeposit.paid === true
        ) {
            console.log('yeey')
            setShowConditionalText(true)
        }
    }

    const calcSteps = (reservation) => {
        let order = reservation.orderDetails
        let verified = reservation.verificationProcess
        let paid = reservation.paidDeposit.paid

        let arr = [order, verified, paid]
        const count = arr.filter(Boolean).length

        if (count == 1) {
            return 1
        } else if (count == 2) {
            return 2
        } else if (count == 3) {
            return 3
        }
    }

    return (
        <>
            {loadingData ? (
                <>
                    <Styles.Card>
                        <article>
                            <div>
                                <img src={reservation.carImage} alt="Car image" />
                                <h3>{reservation.class}</h3>
                                <DealerLocations {...reservation} />
                                {!showConditionalText && (
                                    <CheckinButtons
                                        reservation={reservation}
                                        carIndexKey={props.reservationKey}
                                        user={props.user}
                                    />
                                )}
                            </div>
                            {showConditionalText && (
                                <>
                                    <Styles.StatusCheck>
                                        <div>
                                            <h4>Online Check-In</h4>
                                            <p>
                                                <span>{calcSteps(reservation)}</span> van de{' '}
                                                <span>3</span> stappen voltooid
                                            </p>
                                        </div>
                                        <ul>
                                            <li>
                                                {reservation.orderDetails ? (
                                                    <div className="wrapper active">
                                                        <div>
                                                            <Icons type="data" />
                                                        </div>
                                                        <p>Controle Gegevens</p>
                                                    </div>
                                                ) : (
                                                    <div className="wrapper">
                                                        <div>
                                                            <Icons type="data" />
                                                        </div>
                                                        <p>Controle Gegevens</p>
                                                    </div>
                                                )}
                                            </li>
                                            <li>
                                                {reservation.verificationProcess ? (
                                                    <div className="wrapper active">
                                                        <div>
                                                            <Icons type="userCheck" />
                                                        </div>
                                                        <p>Verificatie rijbewijs</p>
                                                    </div>
                                                ) : (
                                                    <div className="wrapper">
                                                        <div>
                                                            <Icons type="userCheck" />
                                                        </div>
                                                        <p>Verificatie rijbewijs</p>
                                                    </div>
                                                )}
                                            </li>
                                            <li>
                                                {reservation.paidDeposit.paid ? (
                                                    <div className="wrapper active">
                                                        <div>
                                                            <Icons type="creditcard" />
                                                        </div>
                                                        <p>Betaling borg</p>
                                                    </div>
                                                ) : (
                                                    <div className="wrapper">
                                                        <div>
                                                            <Icons type="creditcard" />
                                                        </div>
                                                        <p>Betaling borg</p>
                                                    </div>
                                                )}
                                            </li>
                                            <li>
                                                <CheckinButtons
                                                    reservation={reservation}
                                                    carIndexKey={props.reservationKey}
                                                    user={props.user}
                                                />
                                            </li>
                                        </ul>
                                    </Styles.StatusCheck>
                                </>
                            )}
                        </article>
                    </Styles.Card>
                </>
            ) : (
                <>
                    <p>...</p>
                </>
            )}
        </>
    )
}

export default ReservationCardDesktop
