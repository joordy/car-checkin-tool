// React imports
import { useState, useEffect } from 'react'
import axios from 'axios'
import * as Styles from './login.styles.js'
import { Login, LoginLanding } from 'components/organisms/index'

// React component
const LoginPage = () => {
    const [allReservations, setAllReservations] = useState([])
    const [currentUser, setCurrentUser] = useState([])
    const [loadingData, setLoadingData] = useState(false)

    const getData = async () => {
        try {
            const data = await axios.get(`/api`).then((res) => {
                console.log('response', res)
            })
            console.log(data)
            setLoadingData(true)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(async () => {
        getData()
    }, [])
    return (
        <>
            <LoginLanding />
            <Login />
        </>
    )
}

export default LoginPage
