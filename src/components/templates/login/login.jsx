// React imports
import { useState, useEffect } from 'react'
import axios from 'axios'
import * as Styles from './login.styles.js'
import { Login, LoginLanding, LoginDesktop } from 'components/organisms/index'
import Media from 'react-media'
import { device } from 'styles/devices'

// React component
const LoginPage = () => {
    const [allReservations, setAllReservations] = useState([])
    const [currentUser, setCurrentUser] = useState([])
    const [loadingData, setLoadingData] = useState(false)

    const getData = async () => {
        try {
            const res = await fetch('/api')
            const data = await res.json()
            console.log(data)

            const res1 = await fetch('/users').then(async (res) => {
                const test = await res.clone().json()
                console.log(test)
            })

            // const data = await fetch(`/api`).then((res) => {
            //     console.log('response', res.json())
            // })
            // const data2 = await fetch(`/users`).then((res) => {
            //     console.log('response 2', res)
            // })
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
            <Media
                queries={{
                    small: device.mobile,
                    large: device.tablet,
                }}
            >
                {(matches) => (
                    <>
                        {matches.small && (
                            <>
                                <LoginLanding />
                                <Login />{' '}
                            </>
                        )}
                        {matches.large && <LoginDesktop />}
                    </>
                )}
            </Media>
        </>
    )
}

export default LoginPage
