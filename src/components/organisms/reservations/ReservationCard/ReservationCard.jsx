// React imports
import React from 'react'
import * as Styles from './ReservationCard.styles.js'

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
                        <button>Inchecken</button>
                        <button>X</button>
                    </div>
                </article>
            </Styles.Card>
        </>
    )
}

export default ReservationCard
