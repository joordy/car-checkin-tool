// React imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './qr.styles.js'
import { StepsExplainer, ShowQRCode } from 'components/organisms/index'

// React component
const PageOne = () => {
    const [reservations, setReservations] = useState([])

    const readDB = async () => {
        const { data, error } = await supabase.from('users').select()
        setReservations(data)
    }

    useEffect(() => {
        readDB()
        // postData('https://api.passslot.com/v1/templates/5119469477953536/pass', {
        //     reservationId: '123456789',
        //     pickLocation: 'Overtoom',
        //     name: 'Kelly van Tester',
        //     dropLocation: 'Overtoom',
        //     dropDate: '19-06-2021',
        //     pickDate: '20-06-201',
        // }).then((data) => {
        //     console.log(data) // JSON data parsed by `data.json()` call
        // })
    }, [])

    return (
        <Styles.Main>
            <div className="stepsWrapper">
                <StepsExplainer backLink="/deposit" step="3" />
                <ShowQRCode title="Reservering 1234" />
            </div>
            {/*
            <VerificationOne />
            <VerificationTwo />
            <VerificationThree />
            <VerificationFour />
            <StepsBorg />
            <BorgPayments /> */}
        </Styles.Main>
    )
}

export default PageOne
