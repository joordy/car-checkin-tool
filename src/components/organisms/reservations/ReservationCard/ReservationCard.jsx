// React imports
import React from 'react'
import * as Styles from './ReservationCard.styles.js'
import { ButtonPrimaryLarge, ButtonTertiaryMore } from 'components/atoms/index'

// React component
const ReservationCard = () => {
    const imageSrc =
        'https://user-images.githubusercontent.com/48051912/119339694-c8330a00-bc91-11eb-9af5-3cde4338756e.png'
    const type = 'Elektrisch'
    const pickupLocation = 'Overtoom, Amsterdam'
    const deliverLocation = 'Stadshart, Amstelveen'
    const pickupDate = 'vrijdag 28 mei 2021'
    const pickupTime = '10:30'
    const deliverDate = 'vrijdag 28 mei 2021'
    const deliverTime = '17:30'

    return (
        <>
            <Styles.Card>
                <img src={imageSrc} alt="Car image" />
                <h3>{type}</h3>
                <article>
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
                    <ul>
                        <li>
                            <h4>{pickupLocation}</h4>
                            <h5>
                                {pickupDate} <span>X</span> {pickupTime}
                            </h5>
                        </li>
                        <li>
                            <h4>{deliverLocation}</h4>
                            <h5>
                                {deliverDate} <span>X</span> {deliverTime}
                            </h5>
                        </li>
                    </ul>
                    <div>
                        <ButtonPrimaryLarge text="Inchecken" linkTo="#" width="230px" />
                        <ButtonTertiaryMore linkTo="#" />
                    </div>
                </article>
            </Styles.Card>
        </>
    )
}

export default ReservationCard
