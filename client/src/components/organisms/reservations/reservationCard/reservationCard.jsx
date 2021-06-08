// React & Modules imports
import * as Styles from './reservationCard.styles.js'

// Components
import { Icons } from 'components/atoms/index'
import { CheckinButtons, DealerLocations } from 'components/molecules/index'

// React Component
const ReservationCard = ({ data, reservationKey, user }) => {
    const reservation = data
    console.log('data', data)
    return (
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
                                <ellipse cx="7.16413" cy="6" rx="6.83284" ry="6" fill="#CCCCD6" />
                                <ellipse cx="7.16413" cy="51" rx="6.83284" ry="6" fill="#CCCCD6" />
                                <line x1="7.66406" y1="14" x2="7.66406" y2="43" stroke="#CCCCD6" />
                            </svg>
                        </span>

                        <DealerLocations {...data} />
                    </>

                    <Styles.StatusCheck>
                        <h4>Online Check-In</h4>
                        <p>
                            <span>1</span> van de <span>3</span> stappen voltooid
                        </p>
                        <ul>
                            <li>
                                {data.orderDetails ? (
                                    <div className="wrapper active">
                                        <div>
                                            <Icons type="data" width="1.5rem" height="1.5rem" />
                                        </div>
                                        <p>Gegevens</p>
                                    </div>
                                ) : (
                                    <div className="wrapper">
                                        <div>
                                            <Icons type="data" width="1.5rem" height="1.5rem" />
                                        </div>
                                        <p>Gegevens</p>
                                    </div>
                                )}
                            </li>
                            <li>
                                {data.driverOne.verified && data.driverTwo.verified ? (
                                    <div className="wrapper active">
                                        <div>
                                            <Icons
                                                type="userCheck"
                                                width="1.5rem"
                                                height="1.5rem"
                                            />
                                        </div>
                                        <p>Verificatie</p>
                                    </div>
                                ) : (
                                    <div className="wrapper">
                                        <div>
                                            <Icons
                                                type="userCheck"
                                                width="1.5rem"
                                                height="1.5rem"
                                            />
                                        </div>
                                        <p>Verificatie</p>
                                    </div>
                                )}
                            </li>
                            <li>
                                {data.paidDeposit.paid ? (
                                    <div className="wrapper active">
                                        <div>
                                            <Icons
                                                type="creditcard"
                                                width="1.5rem"
                                                height="1.5rem"
                                            />
                                        </div>
                                        <p>Borg</p>
                                    </div>
                                ) : (
                                    <div className="wrapper">
                                        <div>
                                            <Icons
                                                type="creditcard"
                                                width="1.5rem"
                                                height="1.5rem"
                                            />
                                        </div>
                                        <p>Borg</p>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </Styles.StatusCheck>
                    <CheckinButtons reservation={data} carIndexKey={reservationKey} user={user} />
                </article>
            </Styles.Card>
        </>
    )
}

export default ReservationCard

{
    /*<Styles.StatusCheck>
                        <h4>Online Check-In</h4>
                        <p>
                            <span>1</span> van de <span>3</span> stappen voltooid
                        </p>
                        <ul>
                            <li>
                                {reservation.orderDetails ? (
                                    <p>The condition must be true!</p>
                                ) : (
                                    <p>The condition must be false!</p>
                                )}
                                Gegevens
                            </li>
                            <li>
                                {reservation.verification[0].verified ? (
                                    <p>The condition must be true!</p>
                                ) : (
                                    <p>The condition must be false!</p>
                                )}
                                Verificatie
                            </li>
                            <li>
                                {reservation.paidDeposit.paid ? (
                                    <p>The condition must be true!</p>
                                ) : (
                                    <p>The condition must be false!</p>
                                )}
                                Borg
                            </li>
                        </ul>
                                </Styles.StatusCheck>*/
}
