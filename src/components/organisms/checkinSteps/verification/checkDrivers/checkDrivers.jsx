// React imports
import { useState, useEffect } from 'react'
import * as Styles from './checkDrivers.styles.js'
import { Icons, Label, ButtonPrimary } from 'components/atoms/index'
import { VerificationButtons, DriverListItem } from 'components/molecules/index'
import supabase from 'db/supabase.js'

// React component
const CheckDrivers = ({ reservation, setMakeChoice, movingRight, movingLeft }) => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = `translateX(${movingRight}vw)`
    }

    const moveLeft = () => {
        if (nonVerifiedDrivers.length > 0) {
            if (nonVerifiedDrivers.length === 1) {
                setMakeChoice([{ ...dbData[nonVerifiedDrivers[0]], last: true }])
            } else {
                setMakeChoice([{ ...dbData[nonVerifiedDrivers[0]], last: false }])
            }
            const moveElement = document.querySelector('.stepsWrapper')
            moveElement.style.transform = `translateX(${movingLeft}vw)`
        }
    }

    const [dbData, setDBdata] = useState()
    const [loadingData, setLoadingData] = useState(false)

    const getSpecificUser = async (userID, index) => {
        if (index == 0) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                setDBdata(data[0].carResOne)
                setLoadingData(true)
            }
        } else if (index == 1) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                setDBdata(data[0].carResTwo)
                setLoadingData(true)
            }
        } else if (index == 2) {
            const { data, error } = await supabase.from('users').select().eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                setDBdata(data[0].carResThree)
                setLoadingData(true)
            }
        } else {
            console.log('not existing')
        }
    }

    const changeData = async (resID, userID, index) => {
        console.log('resID', resID)
        console.log('userID', userID)

        const newObject = {
            class: reservation.car.class,
            carImage:
                'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
            checkedIn: reservation.car.checkedIn,
            driverOne: {
                role: reservation.car.driverOne.role,
                driver: reservation.car.driverOne.driver,
                method: '',
                verified: false,
            },
            driverTwo: {
                role: 'extra',
                driver: reservation.car.driverTwo.driver,
                method: '',
                verified: false,
            },
            driverThree: {
                role: 'extra',
                driver: reservation.car.driverThree.driver,
                method: '',
                verified: false,
            },
            otherInfo: {
                freeKM: reservation.car.otherInfo.freeKM,
                deposit: reservation.car.otherInfo.deposit,
                ownRisk: reservation.car.otherInfo.ownRisk,
                priceExtraKM: reservation.car.otherInfo.priceExtraKM,
            },
            rentPrice: reservation.car.rentPrice,
            handInDate: reservation.car.handInDate,
            handInTime: reservation.car.handInTime,
            pickUpDate: reservation.car.pickUpDate,
            pickUpTime: reservation.car.pickUpTime,
            extraDriver: reservation.car.extraDriver,
            paidDeposit: {
                paid: false,
                method: '',
            },
            lowerOwnRisk: reservation.car.lowerOwnRisk,
            orderDetails: reservation.car.orderDetails,
            reservationID: reservation.car.reservationID,
            handInLocation: reservation.car.handInLocation,
            pickUpLocation: reservation.car.pickUpLocation,
            walletSerialNumber: reservation.car.walletSerialNumber,
            verificationProcess: reservation.car.verificationProcess,
        }
        if (index === 0) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResOne: newObject })
                .eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                console.log(data)
            }
        } else if (index === 1) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResTwo: newObject })
                .eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                console.log(data)
            }
        } else if (index === 2) {
            const { data, error } = await supabase
                .from('users')
                .update({ carResThree: newObject })
                .eq('userID', userID)
            if (!data) {
                console.log(error)
            } else {
                console.log(data)
            }
        }
    }

    const resID = reservation.car.reservationID
    const userID = reservation.user.userID
    const index = reservation.carkey

    useEffect(async () => {
        getSpecificUser(userID, index)
        //changeData(resID, userID, index)
    }, [])

    const handleClick = () => {
        console.log('clicky')
        setTesting(true)
    }

    let driverList = []
    let nonVerifiedDrivers = []

    if (loadingData && dbData) {
        const drivers = Object.keys(dbData)
            .filter((str) => str.includes('driver'))
            .sort()
        drivers.forEach((person) => {
            const { role, driver, method, verified } = dbData[person]
            if (!verified && method != 'skip' && method != 'lobation') {
                driverList.push(
                    <DriverListItem
                        key={person}
                        name={driver}
                        subText={role == 'extra' ? 'Extra bestuurder' : 'Hoofdbestuurder'}
                    />,
                )
                nonVerifiedDrivers.push(person)
            } else if (!verified && method == 'skip') {
                driverList.push(<DriverListItem key={person} name={driver} type="skiped" />)
            } else if (!verified && method == 'location') {
                driverList.push(<DriverListItem key={person} name={driver} type="location" />)
            } else if (verified) {
                driverList.push(<DriverListItem key={person} name={driver} type="verified" />)
            }
        })
    }

    return (
        <Styles.Section id="facial">
            <header>
                <h1>Verifieer rijbewijzen</h1>
                <p>
                    We zijn verplicht om te controleren of alle bestuurders een geldig rijbwijs
                    hebben. Je kunt de rijbewijzen hier online veilig en gemakkelijk verifiëren.
                </p>
            </header>
            <section>
                <Label text="Te verifiëren bestuurders" />
                <ol>{driverList}</ol>
            </section>
            <VerificationButtons
                typeSecondary="btn"
                typePrimary="btn"
                textPrimary="Volgende"
                textSecondary="Terug"
                linkPrimary="#"
                linkSecondary="#"
                callbackSecondary={moveRight}
                callbackPrimary={moveLeft}
            />
        </Styles.Section>
    )
}

export default CheckDrivers
