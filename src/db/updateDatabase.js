export const updateDBwithMethod = (driversCount, thisReservation, userChoice) => {
    // console.log('curr', thisReservation)
    switch (driversCount) {
        case 'oneDriver':
            return {
                class: thisReservation.car.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.car.checkedIn,
                driverOne: {
                    role: thisReservation.car.driverOne.role,
                    driver: thisReservation.car.driverOne.driver,
                    method: thisReservation.car.driverOne.method,
                    verified: thisReservation.car.driverOne.verified,
                },
                otherInfo: {
                    freeKM: thisReservation.car.otherInfo.freeKM,
                    deposit: thisReservation.car.otherInfo.deposit,
                    ownRisk: thisReservation.car.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.car.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.car.rentPrice,
                handInDate: thisReservation.car.handInDate,
                handInTime: thisReservation.car.handInTime,
                pickUpDate: thisReservation.car.pickUpDate,
                pickUpTime: thisReservation.car.pickUpTime,
                extraDriver: thisReservation.car.extraDriver,
                paidDeposit: {
                    paid: thisReservation.car.paidDeposit.paid,
                    method: userChoice,
                },
                lowerOwnRisk: thisReservation.car.lowerOwnRisk,
                orderDetails: thisReservation.car.orderDetails,
                reservationID: thisReservation.car.reservationID,
                handInLocation: thisReservation.car.handInLocation,
                pickUpLocation: thisReservation.car.pickUpLocation,
                walletSerialNumber: thisReservation.car.walletSerialNumber,
                verificationProcess: thisReservation.car.verificationProcess,
            }
        case 'twoDrivers':
            return {
                class: thisReservation.car.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.car.checkedIn,
                driverOne: {
                    role: thisReservation.car.driverOne.role,
                    driver: thisReservation.car.driverOne.driver,
                    method: thisReservation.car.driverOne.method,
                    verified: thisReservation.car.driverOne.verified,
                },
                driverTwo: {
                    role: thisReservation.car.driverTwo.role,
                    driver: thisReservation.car.driverTwo.driver,
                    method: thisReservation.car.driverTwo.method,
                    verified: thisReservation.car.driverTwo.verified,
                },
                otherInfo: {
                    freeKM: thisReservation.car.otherInfo.freeKM,
                    deposit: thisReservation.car.otherInfo.deposit,
                    ownRisk: thisReservation.car.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.car.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.car.rentPrice,
                handInDate: thisReservation.car.handInDate,
                handInTime: thisReservation.car.handInTime,
                pickUpDate: thisReservation.car.pickUpDate,
                pickUpTime: thisReservation.car.pickUpTime,
                extraDriver: thisReservation.car.extraDriver,
                paidDeposit: {
                    paid: thisReservation.car.paidDeposit.paid,
                    method: userChoice,
                },
                lowerOwnRisk: thisReservation.car.lowerOwnRisk,
                orderDetails: thisReservation.car.orderDetails,
                reservationID: thisReservation.car.reservationID,
                handInLocation: thisReservation.car.handInLocation,
                pickUpLocation: thisReservation.car.pickUpLocation,
                walletSerialNumber: thisReservation.car.walletSerialNumber,
                verificationProcess: thisReservation.car.verificationProcess,
            }
        case 'threeDrivers':
            return {
                class: thisReservation.car.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.car.checkedIn,
                driverOne: {
                    role: thisReservation.car.driverOne.role,
                    driver: thisReservation.car.driverOne.driver,
                    method: thisReservation.car.driverOne.method,
                    verified: thisReservation.car.driverOne.verified,
                },
                driverTwo: {
                    role: thisReservation.car.driverTwo.role,
                    driver: thisReservation.car.driverTwo.driver,
                    method: thisReservation.car.driverTwo.method,
                    verified: thisReservation.car.driverTwo.verified,
                },
                driverThree: {
                    role: thisReservation.car.driverThree.role,
                    driver: thisReservation.car.driverThree.driver,
                    method: thisReservation.car.driverThree.method,
                    verified: thisReservation.car.driverThree.verified,
                },
                otherInfo: {
                    freeKM: thisReservation.car.otherInfo.freeKM,
                    deposit: thisReservation.car.otherInfo.deposit,
                    ownRisk: thisReservation.car.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.car.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.car.rentPrice,
                handInDate: thisReservation.car.handInDate,
                handInTime: thisReservation.car.handInTime,
                pickUpDate: thisReservation.car.pickUpDate,
                pickUpTime: thisReservation.car.pickUpTime,
                extraDriver: thisReservation.car.extraDriver,
                paidDeposit: {
                    paid: thisReservation.car.paidDeposit.paid,
                    method: userChoice,
                },
                lowerOwnRisk: thisReservation.car.lowerOwnRisk,
                orderDetails: thisReservation.car.orderDetails,
                reservationID: thisReservation.car.reservationID,
                handInLocation: thisReservation.car.handInLocation,
                pickUpLocation: thisReservation.car.pickUpLocation,
                walletSerialNumber: thisReservation.car.walletSerialNumber,
                verificationProcess: thisReservation.car.verificationProcess,
            }
    }
}

export const updateDBwithMethodAndValue = (driversCount, thisReservation) => {
    // console.log('curr', thisReservation)
    switch (driversCount) {
        case 'oneDriver':
            return {
                class: thisReservation.car.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.car.checkedIn,
                driverOne: {
                    role: thisReservation.car.driverOne.role,
                    driver: thisReservation.car.driverOne.driver,
                    method: thisReservation.car.driverOne.method,
                    verified: thisReservation.car.driverOne.verified,
                },
                otherInfo: {
                    freeKM: thisReservation.car.otherInfo.freeKM,
                    deposit: thisReservation.car.otherInfo.deposit,
                    ownRisk: thisReservation.car.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.car.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.car.rentPrice,
                handInDate: thisReservation.car.handInDate,
                handInTime: thisReservation.car.handInTime,
                pickUpDate: thisReservation.car.pickUpDate,
                pickUpTime: thisReservation.car.pickUpTime,
                extraDriver: thisReservation.car.extraDriver,
                paidDeposit: {
                    paid: true,
                    method: 'card',
                },
                lowerOwnRisk: thisReservation.car.lowerOwnRisk,
                orderDetails: thisReservation.car.orderDetails,
                reservationID: thisReservation.car.reservationID,
                handInLocation: thisReservation.car.handInLocation,
                pickUpLocation: thisReservation.car.pickUpLocation,
                walletSerialNumber: thisReservation.car.walletSerialNumber,
                verificationProcess: thisReservation.car.verificationProcess,
            }
        case 'twoDrivers':
            return {
                class: thisReservation.car.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.car.checkedIn,
                driverOne: {
                    role: thisReservation.car.driverOne.role,
                    driver: thisReservation.car.driverOne.driver,
                    method: thisReservation.car.driverOne.method,
                    verified: thisReservation.car.driverOne.verified,
                },
                driverTwo: {
                    role: thisReservation.car.driverTwo.role,
                    driver: thisReservation.car.driverTwo.driver,
                    method: thisReservation.car.driverTwo.method,
                    verified: thisReservation.car.driverTwo.verified,
                },
                otherInfo: {
                    freeKM: thisReservation.car.otherInfo.freeKM,
                    deposit: thisReservation.car.otherInfo.deposit,
                    ownRisk: thisReservation.car.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.car.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.car.rentPrice,
                handInDate: thisReservation.car.handInDate,
                handInTime: thisReservation.car.handInTime,
                pickUpDate: thisReservation.car.pickUpDate,
                pickUpTime: thisReservation.car.pickUpTime,
                extraDriver: thisReservation.car.extraDriver,
                paidDeposit: {
                    paid: true,
                    method: 'card',
                },
                lowerOwnRisk: thisReservation.car.lowerOwnRisk,
                orderDetails: thisReservation.car.orderDetails,
                reservationID: thisReservation.car.reservationID,
                handInLocation: thisReservation.car.handInLocation,
                pickUpLocation: thisReservation.car.pickUpLocation,
                walletSerialNumber: thisReservation.car.walletSerialNumber,
                verificationProcess: thisReservation.car.verificationProcess,
            }
        case 'threeDrivers':
            return {
                class: thisReservation.car.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.car.checkedIn,
                driverOne: {
                    role: thisReservation.car.driverOne.role,
                    driver: thisReservation.car.driverOne.driver,
                    method: thisReservation.car.driverOne.method,
                    verified: thisReservation.car.driverOne.verified,
                },
                driverTwo: {
                    role: thisReservation.car.driverTwo.role,
                    driver: thisReservation.car.driverTwo.driver,
                    method: thisReservation.car.driverTwo.method,
                    verified: thisReservation.car.driverTwo.verified,
                },
                driverThree: {
                    role: thisReservation.car.driverThree.role,
                    driver: thisReservation.car.driverThree.driver,
                    method: thisReservation.car.driverThree.method,
                    verified: thisReservation.car.driverThree.verified,
                },
                otherInfo: {
                    freeKM: thisReservation.car.otherInfo.freeKM,
                    deposit: thisReservation.car.otherInfo.deposit,
                    ownRisk: thisReservation.car.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.car.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.car.rentPrice,
                handInDate: thisReservation.car.handInDate,
                handInTime: thisReservation.car.handInTime,
                pickUpDate: thisReservation.car.pickUpDate,
                pickUpTime: thisReservation.car.pickUpTime,
                extraDriver: thisReservation.car.extraDriver,
                paidDeposit: {
                    paid: true,
                    method: 'card',
                },
                lowerOwnRisk: thisReservation.car.lowerOwnRisk,
                orderDetails: thisReservation.car.orderDetails,
                reservationID: thisReservation.car.reservationID,
                handInLocation: thisReservation.car.handInLocation,
                pickUpLocation: thisReservation.car.pickUpLocation,
                walletSerialNumber: thisReservation.car.walletSerialNumber,
                verificationProcess: thisReservation.car.verificationProcess,
            }
    }
}

export const updateDBwithOrderDetails = (driversCount, thisReservation, currentUserDB) => {
    console.log('currentUserDB', currentUserDB)
    switch (driversCount) {
        case 'oneDriver':
            return {
                class: thisReservation.car.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.car.checkedIn,
                driverOne: {
                    role: thisReservation.car.driverOne.role,
                    driver: `${checkName(thisReservation, currentUserDB)}`,
                    method: thisReservation.car.driverOne.method,
                    verified: thisReservation.car.driverOne.verified,
                },
                otherInfo: {
                    freeKM: thisReservation.car.otherInfo.freeKM,
                    deposit: thisReservation.car.otherInfo.deposit,
                    ownRisk: thisReservation.car.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.car.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.car.rentPrice,
                handInDate: thisReservation.car.handInDate,
                handInTime: thisReservation.car.handInTime,
                pickUpDate: thisReservation.car.pickUpDate,
                pickUpTime: thisReservation.car.pickUpTime,
                extraDriver: thisReservation.car.extraDriver,
                paidDeposit: {
                    paid: thisReservation.car.paidDeposit.paid,
                    method: thisReservation.car.paidDeposit.method,
                },
                lowerOwnRisk: thisReservation.car.lowerOwnRisk,
                orderDetails: true,
                reservationID: thisReservation.car.reservationID,
                handInLocation: thisReservation.car.handInLocation,
                pickUpLocation: thisReservation.car.pickUpLocation,
                walletSerialNumber: thisReservation.car.walletSerialNumber,
                verificationProcess: thisReservation.car.verificationProcess,
            }
        case 'twoDrivers':
            return {
                class: thisReservation.car.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.car.checkedIn,
                driverOne: {
                    role: thisReservation.car.driverOne.role,
                    driver: `${checkName(thisReservation, currentUserDB)}`,
                    method: thisReservation.car.driverOne.method,
                    verified: thisReservation.car.driverOne.verified,
                },
                driverTwo: {
                    role: thisReservation.car.driverTwo.role,
                    driver: thisReservation.car.driverTwo.driver,
                    method: thisReservation.car.driverTwo.method,
                    verified: thisReservation.car.driverTwo.verified,
                },
                otherInfo: {
                    freeKM: thisReservation.car.otherInfo.freeKM,
                    deposit: thisReservation.car.otherInfo.deposit,
                    ownRisk: thisReservation.car.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.car.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.car.rentPrice,
                handInDate: thisReservation.car.handInDate,
                handInTime: thisReservation.car.handInTime,
                pickUpDate: thisReservation.car.pickUpDate,
                pickUpTime: thisReservation.car.pickUpTime,
                extraDriver: thisReservation.car.extraDriver,
                paidDeposit: {
                    paid: thisReservation.car.paidDeposit.paid,
                    method: thisReservation.car.paidDeposit.method,
                },
                lowerOwnRisk: thisReservation.car.lowerOwnRisk,
                orderDetails: true,
                reservationID: thisReservation.car.reservationID,
                handInLocation: thisReservation.car.handInLocation,
                pickUpLocation: thisReservation.car.pickUpLocation,
                walletSerialNumber: thisReservation.car.walletSerialNumber,
                verificationProcess: thisReservation.car.verificationProcess,
            }
        case 'threeDrivers':
            return {
                class: thisReservation.car.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.car.checkedIn,
                driverOne: {
                    role: thisReservation.car.driverOne.role,
                    driver: `${checkName(thisReservation, currentUserDB)}`,
                    method: thisReservation.car.driverOne.method,
                    verified: thisReservation.car.driverOne.verified,
                },
                driverTwo: {
                    role: thisReservation.car.driverTwo.role,
                    driver: thisReservation.car.driverTwo.driver,
                    method: thisReservation.car.driverTwo.method,
                    verified: thisReservation.car.driverTwo.verified,
                },
                driverThree: {
                    role: thisReservation.car.driverThree.role,
                    driver: thisReservation.car.driverThree.driver,
                    method: thisReservation.car.driverThree.method,
                    verified: thisReservation.car.driverThree.verified,
                },
                otherInfo: {
                    freeKM: thisReservation.car.otherInfo.freeKM,
                    deposit: thisReservation.car.otherInfo.deposit,
                    ownRisk: thisReservation.car.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.car.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.car.rentPrice,
                handInDate: thisReservation.car.handInDate,
                handInTime: thisReservation.car.handInTime,
                pickUpDate: thisReservation.car.pickUpDate,
                pickUpTime: thisReservation.car.pickUpTime,
                extraDriver: thisReservation.car.extraDriver,
                paidDeposit: {
                    paid: thisReservation.car.paidDeposit.paid,
                    method: thisReservation.car.paidDeposit.method,
                },
                lowerOwnRisk: thisReservation.car.lowerOwnRisk,
                orderDetails: true,
                reservationID: thisReservation.car.reservationID,
                handInLocation: thisReservation.car.handInLocation,
                pickUpLocation: thisReservation.car.pickUpLocation,
                walletSerialNumber: thisReservation.car.walletSerialNumber,
                verificationProcess: thisReservation.car.verificationProcess,
            }
    }
}

export const tester = () => {
    console.log('hi')
}

export const updateDBwithDriverID = (
    driversCount,
    thisReservation,
    currentUserDB,
    method,
    verified,
    driverObj,
    user,
) => {
    console.log('currentUserDB', currentUserDB)
    // console.log('driversCount', driversCount)
    console.log('thisReservation', thisReservation)
    // console.log('method', method)
    console.log('driverObj', driverObj)

    switch (driversCount) {
        case 'oneDriver':
            return {
                class: thisReservation.car.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.car.checkedIn,
                driverOne: {
                    role: thisReservation.car.driverOne.role,
                    driver: `${checkName(thisReservation, currentUserDB)}`,
                    method: method,
                    verified: verified,
                },
                otherInfo: {
                    freeKM: thisReservation.car.otherInfo.freeKM,
                    deposit: thisReservation.car.otherInfo.deposit,
                    ownRisk: thisReservation.car.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.car.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.car.rentPrice,
                handInDate: thisReservation.car.handInDate,
                handInTime: thisReservation.car.handInTime,
                pickUpDate: thisReservation.car.pickUpDate,
                pickUpTime: thisReservation.car.pickUpTime,
                extraDriver: thisReservation.car.extraDriver,
                paidDeposit: {
                    paid: thisReservation.car.paidDeposit.paid,
                    method: thisReservation.car.paidDeposit.method,
                },
                lowerOwnRisk: thisReservation.car.lowerOwnRisk,
                orderDetails: true,
                reservationID: thisReservation.car.reservationID,
                handInLocation: thisReservation.car.handInLocation,
                pickUpLocation: thisReservation.car.pickUpLocation,
                walletSerialNumber: thisReservation.car.walletSerialNumber,
                verificationProcess: thisReservation.car.verificationProcess,
            }
        case 'twoDrivers':
            return {
                class: thisReservation.car.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.car.checkedIn,
                driverOne: {
                    role: thisReservation.car.driverOne.role,
                    driver: `${checkName(thisReservation, currentUserDB)}`,
                    method: `${checkMethod(
                        thisReservation,
                        currentUserDB,
                        driverObj,
                        user,
                        method,
                    )}`,
                    verified: `${verified}`,
                },
                driverTwo: {
                    role: thisReservation.car.driverTwo.role,
                    driver: thisReservation.car.driverTwo.driver,
                    method: `${checkMethod(
                        thisReservation,
                        currentUserDB,
                        driverObj,
                        user,
                        method,
                    )}`,
                    verified: thisReservation.car.driverTwo.verified,
                },
                otherInfo: {
                    freeKM: thisReservation.car.otherInfo.freeKM,
                    deposit: thisReservation.car.otherInfo.deposit,
                    ownRisk: thisReservation.car.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.car.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.car.rentPrice,
                handInDate: thisReservation.car.handInDate,
                handInTime: thisReservation.car.handInTime,
                pickUpDate: thisReservation.car.pickUpDate,
                pickUpTime: thisReservation.car.pickUpTime,
                extraDriver: thisReservation.car.extraDriver,
                paidDeposit: {
                    paid: thisReservation.car.paidDeposit.paid,
                    method: thisReservation.car.paidDeposit.method,
                },
                lowerOwnRisk: thisReservation.car.lowerOwnRisk,
                orderDetails: true,
                reservationID: thisReservation.car.reservationID,
                handInLocation: thisReservation.car.handInLocation,
                pickUpLocation: thisReservation.car.pickUpLocation,
                walletSerialNumber: thisReservation.car.walletSerialNumber,
                verificationProcess: thisReservation.car.verificationProcess,
            }
        case 'threeDrivers':
            return {
                class: thisReservation.car.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.car.checkedIn,
                driverOne: {
                    role: thisReservation.car.driverOne.role,
                    driver: `${checkName(thisReservation, currentUserDB)}`,
                    method: `${method}`,
                    method: `${verified}`,
                },
                driverTwo: {
                    role: thisReservation.car.driverTwo.role,
                    driver: thisReservation.car.driverTwo.driver,
                    method: `${method}`,
                    method: `${verified}`,
                },
                driverThree: {
                    role: thisReservation.car.driverThree.role,
                    driver: thisReservation.car.driverThree.driver,
                    method: `${method}`,
                    method: `${verified}`,
                },
                otherInfo: {
                    freeKM: thisReservation.car.otherInfo.freeKM,
                    deposit: thisReservation.car.otherInfo.deposit,
                    ownRisk: thisReservation.car.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.car.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.car.rentPrice,
                handInDate: thisReservation.car.handInDate,
                handInTime: thisReservation.car.handInTime,
                pickUpDate: thisReservation.car.pickUpDate,
                pickUpTime: thisReservation.car.pickUpTime,
                extraDriver: thisReservation.car.extraDriver,
                paidDeposit: {
                    paid: thisReservation.car.paidDeposit.paid,
                    method: thisReservation.car.paidDeposit.method,
                },
                lowerOwnRisk: thisReservation.car.lowerOwnRisk,
                orderDetails: true,
                reservationID: thisReservation.car.reservationID,
                handInLocation: thisReservation.car.handInLocation,
                pickUpLocation: thisReservation.car.pickUpLocation,
                walletSerialNumber: thisReservation.car.walletSerialNumber,
                verificationProcess: thisReservation.car.verificationProcess,
            }
    }
}

// function checkVerified(thisReservation, currentUserDB, verified) {

// }

function checkName(thisReservation, currentUserDB) {
    if (!currentUserDB.firstName || currentUserDB.lastName) {
        return `${thisReservation.user.firstName} ${thisReservation.user.lastName}`
    } else {
        return `${currentUserDB.firstName} ${currentUserDB.lastName}`
    }
}

function checkMethod(thisReservation, currentUserDB, driverObj, user, method) {
    console.log(thisReservation)
    console.log(currentUserDB)
    console.log(user)

    if (user.driverOne) {
        console.log('rijder 1')
        return
    } else if (user.driverTwo) {
        return method
    } else if (user.driverThree) {
        console.log('rijder 3')
    }
    if (driverObj === 'driverOne') {
        return '1'
    } else if (driverObj === 'driverTwo') {
        return '2'
    } else if (driverObj === 'driverThree') {
        return '3'
    }
    // if (!currentUserDB.)
}

function checkDriver(driverObj, thisReservation, currentUserDB, method, verified) {
    if (driverObj === 'driverOne') {
        return (driverOne = {
            role: thisReservation.car.driverOne.role,
            driver: `${checkName(thisReservation, currentUserDB)}`,
            method: `${method}`,
            verified: `${verified}`,
        })
    } else if (driverObj === 'driverTwo') {
        return {
            role: thisReservation.car.driverTwo.role,
            driver: `${checkName(thisReservation, currentUserDB)}`,
            method: `${method}`,
            verified: `${verified}`,
        }
    } else if (driverObj === 'driverThree') {
        return {
            role: thisReservation.car.driverThree.role,
            driver: `${checkName(thisReservation, currentUserDB)}`,
            method: `${method}`,
            verified: `${verified}`,
        }
    }
}
