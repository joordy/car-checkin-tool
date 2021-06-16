// React & Modules imports
import { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import axios from 'axios'
import * as Styles from './reservationCard.styles.js'

// Components
import { Icons } from 'components/atoms/index'
import { CheckinButtons, DealerLocations } from 'components/molecules/index'
import { verifiedDriver } from 'constants/actions/index.js'

// React Component
const ReservationCard = (props) => {
    const [reservation, setReservation] = useState(null)
    const [loadingData, setLoadingData] = useState(false)
    const [showConditionalText, setShowConditionalText] = useState(false)

    const getData = async () => {
        try {
            const data = await axios
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

    function whoIsVerified() {
        // Create an array with drivers that have skipped verification
        const skipedDrivers = []
        // Create an array with all drivers
        const drivers = Object.keys(reservation).filter((key) => key.includes('driver'))
        // Check if driver was not verified and if method = skip
        drivers.forEach((driver) => {
            if (reservation[driver].method === 'skip' && !reservation[driver].verified) {
                skipedDrivers.push(reservation[driver].driver)
            }
        })
        if (skipedDrivers.length === 0) {
            return (
                <>
                    <div className="wrapper">
                        <div>
                            <Icons type="userCheck" />
                        </div>
                        <p>Verificatie rijbewijs</p>
                    </div>
                </>
            )
        } else if (skipedDrivers.length === 1) {
            return (
                <>
                    <div className="wrapper incomplete">
                        <div>
                            <Icons type="userCheck" />
                        </div>
                        <p>Verificatie rijbewijs</p>
                        <p>Bestuurder &quot;{skipedDrivers[0]}&quot; ontbreekt</p>
                    </div>
                </>
            )
        } else if (skipedDrivers.length > 1) {
            return (
                <>
                    <div className="wrapper incomplete">
                        <div>
                            <Icons type="userCheck" />
                        </div>
                        <p>Verificatie rijbewijs</p>
                        <p>Bestuurders {skipedDrivers.join(', ')} ontbreken</p>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            {loadingData ? (
                <>
                    <Styles.Card>
                        <img src={reservation.carImage} alt="Car image" />
                        <h3>{reservation.class}</h3>
                        <article>
                            <>
                                <span>
                                    <svg
                                        width="14"
                                        height="57"
                                        viewBox="0 0 14 57"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <ellipse
                                            cx="7.16413"
                                            cy="6"
                                            rx="6.83284"
                                            ry="6"
                                            fill="#CCCCD6"
                                        />
                                        <ellipse
                                            cx="7.16413"
                                            cy="51"
                                            rx="6.83284"
                                            ry="6"
                                            fill="#CCCCD6"
                                        />
                                        <line
                                            x1="7.66406"
                                            y1="14"
                                            x2="7.66406"
                                            y2="43"
                                            stroke="#CCCCD6"
                                        />
                                    </svg>
                                </span>

                                <DealerLocations {...reservation} />
                            </>

                            {showConditionalText && (
                                <>
                                    <Styles.StatusCheck>
                                        <h4>Online Check-In</h4>
                                        <span></span>
                                        <p>
                                            <span>{calcSteps(reservation)}</span> van de{' '}
                                            <span>3</span> stappen voltooid
                                        </p>
                                        <ul>
                                            <li>
                                                {reservation.orderDetails ? (
                                                    <div className="wrapper active">
                                                        <div>
                                                            <Icons type="data" />
                                                        </div>
                                                        <p>Controle gegevens</p>
                                                    </div>
                                                ) : (
                                                    <div className="wrapper">
                                                        <div>
                                                            <Icons type="data" />
                                                        </div>
                                                        <p>Controle gegevens</p>
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
                                                    whoIsVerified()
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
                                        </ul>
                                    </Styles.StatusCheck>
                                </>
                            )}
                            <CheckinButtons
                                reservation={reservation}
                                carIndexKey={props.reservationKey}
                                user={props.user}
                            />
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

export default ReservationCard
