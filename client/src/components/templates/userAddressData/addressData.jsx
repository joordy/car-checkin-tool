// React & Components imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './addressData.styles.js'
import { StepsExplainer, CheckUserInfo, CheckBookingInfo } from 'components/organisms/index'

// Component
const AdressData = () => {
    let currentCarCheckin = JSON.parse(window.localStorage.getItem('CurrentCarCheckin'))
    let currentUserID = JSON.parse(window.localStorage.getItem('CurrentUser'))
    let currentReservation
    const [reservations, setReservations] = useState([])

    const readDB = async () => {
        const { data, error } = await supabase
            .from('users')
            .select()
            .filter('userID', 'eq', `${currentUserID}`)
        if (!error) {
            setReservations(data)
        } else {
            console.log(error)
        }
    }

    useEffect(() => {
        readDB()
    }, [])

    const currentUser = [...reservations]

    function getCurrentReseravation() {
        if (!currentUser[0]) {
            console.log('go to reservation')
        } else {
            const cars = currentUser[0].cars

            currentReservation = cars.find(function (item) {
                return item.reservationID == currentCarCheckin
            })

            console.log(currentUser[0])
            console.log(currentReservation)
        }
    }

    getCurrentReseravation()
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

export default AdressData
