import React, { createContext, useState } from 'react'

export const CurrentCarContext = createContext()

const CurrentCarProvider = (props) => {
    const [carReservation, setCarReservation] = useState([])
    const text = 'hello'
    return (
        <CurrentCarContext.Provider value={[carReservation, setCarReservation]}>
            {props.children}
        </CurrentCarContext.Provider>
    )
}

export default CurrentCarProvider
