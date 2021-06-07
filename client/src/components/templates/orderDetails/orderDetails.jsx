// React & Components imports
import React, { useState, useEffect, useContext } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './orderDetails.styles.js'
import { StepsExplainer, CheckUserInfo, CheckBookingInfo } from 'components/organisms/index'

// Component
const OrderDetails = () => {
    console.log(process.env.REACT_APP_BACKEND)
    console.log(process.env.REACT_APP_BACKEND)
    const [carReservation, setCarReservation] = useState([])

    const getData = async () => {
        const data = await fetch(`${process.env.REACT_APP_BACKEND}/order-details`)
        console.log(data)
        const response = await data.json()
        if (response === 'undefined') {
            console.log(response)
            // window.location.href = '/reservations'
        } else {
            setCarReservation(response)
        }
    }

    const readDB = async () => {
        const { data, error } = await supabase.from('users').select()
        // .filter('userID', 'eq', `${carReservation.user.userID}`)
        if (!error) {
            // setReservations(data)
        } else {
            console.log(error)
        }
        // console.log(data)
    }

    useEffect(() => {
        getData()
        readDB()
    }, [])

    console.log('current reservation:', carReservation)

    let viewportHeight = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${viewportHeight}px`)

    return (
        <Styles.Main className="page">
            <div className="stepsWrapper">
                <StepsExplainer backLink="/reservations" step="0" completedSteps={completedSteps} />
                <CheckUserInfo />
                <CheckBookingInfo />
            </div>
        </Styles.Main>
    )
}

export default OrderDetails
