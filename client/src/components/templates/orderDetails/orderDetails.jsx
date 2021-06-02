// React & Components imports
import React, { useState, useEffect, useContext } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './orderDetails.styles.js'
import { StepsExplainer, CheckUserInfo, CheckBookingInfo } from 'components/organisms/index'

// Component
const OrderDetails = () => {
    const [carReservation, setCarReservation] = useState([])

    const getData = async () => {
        const data = await fetch('/order-details')
        const response = await data.json()
        if (response === 'undefined') {
            window.location.href = '/reservations'
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

    return (
        <Styles.Main>
            <div className="stepsWrapper">
                <StepsExplainer backLink="/reservations" step="0" />
                <CheckUserInfo />
                <CheckBookingInfo />
            </div>
        </Styles.Main>
    )
}

export default OrderDetails
