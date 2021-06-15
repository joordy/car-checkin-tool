export const updateDBwithPayMethod = (loggedinUser, driversCount, thisReservation, userChoice) => {
    console.log('curr', thisReservation)
    switch (driversCount) {
        case 'oneDriver':
            return {
                class: thisReservation.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.checkedIn,
                driverOne: {
                    role: thisReservation.driverOne.role,
                    driver: thisReservation.driverOne.driver,
                    method: thisReservation.driverOne.method,
                    verified: thisReservation.driverOne.verified,
                },
                otherInfo: {
                    freeKM: thisReservation.otherInfo.freeKM,
                    deposit: thisReservation.otherInfo.deposit,
                    ownRisk: thisReservation.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.rentPrice,
                handInDate: thisReservation.handInDate,
                handInTime: thisReservation.handInTime,
                pickUpDate: thisReservation.pickUpDate,
                pickUpTime: thisReservation.pickUpTime,
                extraDriver: thisReservation.extraDriver,
                paidDeposit: {
                    paid: thisReservation.paidDeposit.paid,
                    method: userChoice,
                },
                lowerOwnRisk: thisReservation.lowerOwnRisk,
                orderDetails: thisReservation.orderDetails,
                reservationID: thisReservation.reservationID,
                handInLocation: thisReservation.handInLocation,
                pickUpLocation: thisReservation.pickUpLocation,
                walletSerialNumber: thisReservation.walletSerialNumber,
                verificationProcess: thisReservation.verificationProcess,
                qrCode: thisReservation.qrCode,
            }
        case 'twoDrivers':
            return {
                class: thisReservation.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.checkedIn,
                driverOne: {
                    role: thisReservation.driverOne.role,
                    driver: thisReservation.driverOne.driver,
                    method: thisReservation.driverOne.method,
                    verified: thisReservation.driverOne.verified,
                },
                driverTwo: {
                    role: thisReservation.driverTwo.role,
                    driver: thisReservation.driverTwo.driver,
                    method: thisReservation.driverTwo.method,
                    verified: thisReservation.driverTwo.verified,
                },
                otherInfo: {
                    freeKM: thisReservation.otherInfo.freeKM,
                    deposit: thisReservation.otherInfo.deposit,
                    ownRisk: thisReservation.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.rentPrice,
                handInDate: thisReservation.handInDate,
                handInTime: thisReservation.handInTime,
                pickUpDate: thisReservation.pickUpDate,
                pickUpTime: thisReservation.pickUpTime,
                extraDriver: thisReservation.extraDriver,
                paidDeposit: {
                    paid: thisReservation.paidDeposit.paid,
                    method: userChoice,
                },
                lowerOwnRisk: thisReservation.lowerOwnRisk,
                orderDetails: thisReservation.orderDetails,
                reservationID: thisReservation.reservationID,
                handInLocation: thisReservation.handInLocation,
                pickUpLocation: thisReservation.pickUpLocation,
                walletSerialNumber: thisReservation.walletSerialNumber,
                verificationProcess: thisReservation.verificationProcess,
                qrCode: thisReservation.qrCode,
            }
        case 'threeDrivers':
            return {
                class: thisReservation.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.checkedIn,
                driverOne: {
                    role: thisReservation.driverOne.role,
                    driver: thisReservation.driverOne.driver,
                    method: thisReservation.driverOne.method,
                    verified: thisReservation.driverOne.verified,
                },
                driverTwo: {
                    role: thisReservation.driverTwo.role,
                    driver: thisReservation.driverTwo.driver,
                    method: thisReservation.driverTwo.method,
                    verified: thisReservation.driverTwo.verified,
                },
                driverThree: {
                    role: thisReservation.driverThree.role,
                    driver: thisReservation.driverThree.driver,
                    method: thisReservation.driverThree.method,
                    verified: thisReservation.driverThree.verified,
                },
                otherInfo: {
                    freeKM: thisReservation.otherInfo.freeKM,
                    deposit: thisReservation.otherInfo.deposit,
                    ownRisk: thisReservation.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.rentPrice,
                handInDate: thisReservation.handInDate,
                handInTime: thisReservation.handInTime,
                pickUpDate: thisReservation.pickUpDate,
                pickUpTime: thisReservation.pickUpTime,
                extraDriver: thisReservation.extraDriver,
                paidDeposit: {
                    paid: thisReservation.paidDeposit.paid,
                    method: userChoice,
                },
                lowerOwnRisk: thisReservation.lowerOwnRisk,
                orderDetails: thisReservation.orderDetails,
                reservationID: thisReservation.reservationID,
                handInLocation: thisReservation.handInLocation,
                pickUpLocation: thisReservation.pickUpLocation,
                walletSerialNumber: thisReservation.walletSerialNumber,
                verificationProcess: thisReservation.verificationProcess,
                qrCode: thisReservation.qrCode,
            }
    }
}

export const updateDBwithVerifyMethod = (
    loggedinUser,
    driversCount,
    thisReservation,
    userChoice,
    driverObj,
) => {
    console.log('curr', thisReservation)
    switch (driversCount) {
        case 'oneDriver':
            console.log('1')
            return {
                class: thisReservation.class,
                carImage: thisReservation.Image,
                checkedIn: thisReservation.checkedIn,
                driverOne: {
                    role: thisReservation.driverOne.role,
                    driver: `${currentUserDB.firstName} ${currentUserDB.lastName}`,
                    method: `${userChoice}`,
                    verified: false,
                },
                otherInfo: {
                    freeKM: thisReservation.otherInfo.freeKM,
                    deposit: thisReservation.otherInfo.deposit,
                    ownRisk: thisReservation.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.rentPrice,
                handInDate: thisReservation.handInDate,
                handInTime: thisReservation.handInTime,
                pickUpDate: thisReservation.pickUpDate,
                pickUpTime: thisReservation.pickUpTime,
                extraDriver: thisReservation.extraDriver,
                paidDeposit: {
                    paid: thisReservation.paidDeposit.paid,
                    method: thisReservation.paidDeposit.method,
                },
                lowerOwnRisk: thisReservation.lowerOwnRisk,
                orderDetails: thisReservation.orderDetails,
                reservationID: thisReservation.reservationID,
                handInLocation: thisReservation.handInLocation,
                pickUpLocation: thisReservation.pickUpLocation,
                walletSerialNumber: thisReservation.walletSerialNumber,
                verificationProcess: thisReservation.verificationProcess,
                qrCode: thisReservation.qrCode,
            }

        case 'twoDrivers':
            console.log('2')
            if (driverObj === 'driverOne') {
                console.log('driver one')
                return {
                    class: thisReservation.class,
                    carImage: thisReservation.Image,
                    checkedIn: thisReservation.checkedIn,
                    driverOne: {
                        role: thisReservation.driverOne.role,
                        driver: `${loggedinUser.firstName} ${loggedinUser.lastName}`,
                        method: `${userChoice}`,
                        verified: false,
                    },
                    driverTwo: {
                        role: thisReservation.driverTwo.role,
                        driver: thisReservation.driverTwo.driver,
                        method: thisReservation.driverTwo.method,
                        verified: thisReservation.driverTwo.verified,
                    },
                    otherInfo: {
                        freeKM: thisReservation.otherInfo.freeKM,
                        deposit: thisReservation.otherInfo.deposit,
                        ownRisk: thisReservation.otherInfo.ownRisk,
                        priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                    },
                    rentPrice: thisReservation.rentPrice,
                    handInDate: thisReservation.handInDate,
                    handInTime: thisReservation.handInTime,
                    pickUpDate: thisReservation.pickUpDate,
                    pickUpTime: thisReservation.pickUpTime,
                    extraDriver: thisReservation.extraDriver,
                    paidDeposit: {
                        paid: thisReservation.paidDeposit.paid,
                        method: thisReservation.paidDeposit.method,
                    },
                    lowerOwnRisk: thisReservation.lowerOwnRisk,
                    orderDetails: thisReservation.orderDetails,
                    reservationID: thisReservation.reservationID,
                    handInLocation: thisReservation.handInLocation,
                    pickUpLocation: thisReservation.pickUpLocation,
                    walletSerialNumber: thisReservation.walletSerialNumber,
                    verificationProcess: thisReservation.verificationProcess,
                    qrCode: thisReservation.qrCode,
                }
            } else if (driverObj === 'driverTwo') {
                console.log('driver two')
                return {
                    class: thisReservation.class,
                    carImage: thisReservation.Image,
                    checkedIn: thisReservation.checkedIn,
                    driverOne: {
                        role: thisReservation.driverOne.role,
                        driver: `${loggedinUser.firstName} ${loggedinUser.lastName}`,
                        method: thisReservation.driverOne.method,
                        verified: thisReservation.driverOne.verified,
                    },
                    driverTwo: {
                        role: thisReservation.driverTwo.role,
                        driver: thisReservation.driverTwo.driver,
                        method: `${userChoice}`,
                        verified: false,
                    },
                    otherInfo: {
                        freeKM: thisReservation.otherInfo.freeKM,
                        deposit: thisReservation.otherInfo.deposit,
                        ownRisk: thisReservation.otherInfo.ownRisk,
                        priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                    },
                    rentPrice: thisReservation.rentPrice,
                    handInDate: thisReservation.handInDate,
                    handInTime: thisReservation.handInTime,
                    pickUpDate: thisReservation.pickUpDate,
                    pickUpTime: thisReservation.pickUpTime,
                    extraDriver: thisReservation.extraDriver,
                    paidDeposit: {
                        paid: thisReservation.paidDeposit.paid,
                        method: thisReservation.paidDeposit.method,
                    },
                    lowerOwnRisk: thisReservation.lowerOwnRisk,
                    orderDetails: thisReservation.orderDetails,
                    reservationID: thisReservation.reservationID,
                    handInLocation: thisReservation.handInLocation,
                    pickUpLocation: thisReservation.pickUpLocation,
                    walletSerialNumber: thisReservation.walletSerialNumber,
                    verificationProcess: thisReservation.verificationProcess,
                    qrCode: thisReservation.qrCode,
                }
            }

        case 'threeDrivers':
            // console.log('3')
            if (driverObj === 'driverOne') {
                console.log('driver one')
                return {
                    class: thisReservation.class,
                    carImage: thisReservation.Image,
                    checkedIn: thisReservation.checkedIn,
                    driverOne: {
                        role: thisReservation.driverOne.role,
                        driver: `${loggedinUser.firstName} ${loggedinUser.lastName}`,
                        method: `${userChoice}`,
                        verified: false,
                    },
                    driverTwo: {
                        role: thisReservation.driverTwo.role,
                        driver: thisReservation.driverTwo.driver,
                        method: thisReservation.driverTwo.method,
                        verified: thisReservation.driverTwo.verified,
                    },
                    driverThree: {
                        role: thisReservation.driverThree.role,
                        driver: thisReservation.driverThree.driver,
                        method: thisReservation.driverThree.method,
                        verified: thisReservation.driverThree.verified,
                    },
                    otherInfo: {
                        freeKM: thisReservation.otherInfo.freeKM,
                        deposit: thisReservation.otherInfo.deposit,
                        ownRisk: thisReservation.otherInfo.ownRisk,
                        priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                    },
                    rentPrice: thisReservation.rentPrice,
                    handInDate: thisReservation.handInDate,
                    handInTime: thisReservation.handInTime,
                    pickUpDate: thisReservation.pickUpDate,
                    pickUpTime: thisReservation.pickUpTime,
                    extraDriver: thisReservation.extraDriver,
                    paidDeposit: {
                        paid: thisReservation.paidDeposit.paid,
                        method: thisReservation.paidDeposit.method,
                    },
                    lowerOwnRisk: thisReservation.lowerOwnRisk,
                    orderDetails: thisReservation.orderDetails,
                    reservationID: thisReservation.reservationID,
                    handInLocation: thisReservation.handInLocation,
                    pickUpLocation: thisReservation.pickUpLocation,
                    walletSerialNumber: thisReservation.walletSerialNumber,
                    verificationProcess: thisReservation.verificationProcess,
                    qrCode: thisReservation.qrCode,
                }
            } else if (driverObj === 'driverTwo') {
                console.log('driver two')
                return {
                    class: thisReservation.class,
                    carImage: thisReservation.Image,
                    checkedIn: thisReservation.checkedIn,
                    driverOne: {
                        role: thisReservation.driverOne.role,
                        driver: `${loggedinUser.firstName} ${loggedinUser.lastName}`,
                        method: thisReservation.driverOne.method,
                        verified: thisReservation.driverOne.verified,
                    },
                    driverTwo: {
                        role: thisReservation.driverTwo.role,
                        driver: thisReservation.driverTwo.driver,
                        method: `${userChoice}`,
                        verified: false,
                    },
                    driverThree: {
                        role: thisReservation.driverThree.role,
                        driver: thisReservation.driverThree.driver,
                        method: thisReservation.driverThree.method,
                        verified: thisReservation.driverThree.verified,
                    },
                    otherInfo: {
                        freeKM: thisReservation.otherInfo.freeKM,
                        deposit: thisReservation.otherInfo.deposit,
                        ownRisk: thisReservation.otherInfo.ownRisk,
                        priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                    },
                    rentPrice: thisReservation.rentPrice,
                    handInDate: thisReservation.handInDate,
                    handInTime: thisReservation.handInTime,
                    pickUpDate: thisReservation.pickUpDate,
                    pickUpTime: thisReservation.pickUpTime,
                    extraDriver: thisReservation.extraDriver,
                    paidDeposit: {
                        paid: thisReservation.paidDeposit.paid,
                        method: thisReservation.paidDeposit.method,
                    },
                    lowerOwnRisk: thisReservation.lowerOwnRisk,
                    orderDetails: thisReservation.orderDetails,
                    reservationID: thisReservation.reservationID,
                    handInLocation: thisReservation.handInLocation,
                    pickUpLocation: thisReservation.pickUpLocation,
                    walletSerialNumber: thisReservation.walletSerialNumber,
                    verificationProcess: thisReservation.verificationProcess,
                    qrCode: thisReservation.qrCode,
                }
            } else if (driverObj === 'driverThree') {
                console.log('driver three')
                return {
                    class: thisReservation.class,
                    carImage: thisReservation.Image,
                    checkedIn: thisReservation.checkedIn,
                    driverOne: {
                        role: thisReservation.driverOne.role,
                        driver: `${loggedinUser.firstName} ${loggedinUser.lastName}`,
                        method: thisReservation.driverOne.method,
                        verified: thisReservation.driverOne.verified,
                    },
                    driverTwo: {
                        role: thisReservation.driverTwo.role,
                        driver: thisReservation.driverTwo.driver,
                        method: thisReservation.driverTwo.method,
                        verified: thisReservation.driverTwo.verified,
                    },
                    driverThree: {
                        role: thisReservation.driverThree.role,
                        driver: thisReservation.driverThree.driver,
                        method: `${userChoice}`,
                        verified: false,
                    },
                    otherInfo: {
                        freeKM: thisReservation.otherInfo.freeKM,
                        deposit: thisReservation.otherInfo.deposit,
                        ownRisk: thisReservation.otherInfo.ownRisk,
                        priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                    },
                    rentPrice: thisReservation.rentPrice,
                    handInDate: thisReservation.handInDate,
                    handInTime: thisReservation.handInTime,
                    pickUpDate: thisReservation.pickUpDate,
                    pickUpTime: thisReservation.pickUpTime,
                    extraDriver: thisReservation.extraDriver,
                    paidDeposit: {
                        paid: thisReservation.paidDeposit.paid,
                        method: thisReservation.paidDeposit.method,
                    },
                    lowerOwnRisk: thisReservation.lowerOwnRisk,
                    orderDetails: thisReservation.orderDetails,
                    reservationID: thisReservation.reservationID,
                    handInLocation: thisReservation.handInLocation,
                    pickUpLocation: thisReservation.pickUpLocation,
                    walletSerialNumber: thisReservation.walletSerialNumber,
                    verificationProcess: thisReservation.verificationProcess,
                    qrCode: thisReservation.qrCode,
                }
            }
    }
}

export const updateDBwithPayMethodAndValue = (driversCount, thisReservation) => {
    // console.log('curr', thisReservation)
    switch (driversCount) {
        case 'oneDriver':
            return {
                class: thisReservation.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.checkedIn,
                driverOne: {
                    role: thisReservation.driverOne.role,
                    driver: thisReservation.driverOne.driver,
                    method: thisReservation.driverOne.method,
                    verified: thisReservation.driverOne.verified,
                },
                otherInfo: {
                    freeKM: thisReservation.otherInfo.freeKM,
                    deposit: thisReservation.otherInfo.deposit,
                    ownRisk: thisReservation.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.rentPrice,
                handInDate: thisReservation.handInDate,
                handInTime: thisReservation.handInTime,
                pickUpDate: thisReservation.pickUpDate,
                pickUpTime: thisReservation.pickUpTime,
                extraDriver: thisReservation.extraDriver,
                paidDeposit: {
                    paid: true,
                    method: 'card',
                },
                lowerOwnRisk: thisReservation.lowerOwnRisk,
                orderDetails: thisReservation.orderDetails,
                reservationID: thisReservation.reservationID,
                handInLocation: thisReservation.handInLocation,
                pickUpLocation: thisReservation.pickUpLocation,
                walletSerialNumber: thisReservation.walletSerialNumber,
                verificationProcess: thisReservation.verificationProcess,
                qrCode: thisReservation.qrCode,
            }
        case 'twoDrivers':
            return {
                class: thisReservation.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.checkedIn,
                driverOne: {
                    role: thisReservation.driverOne.role,
                    driver: thisReservation.driverOne.driver,
                    method: thisReservation.driverOne.method,
                    verified: thisReservation.driverOne.verified,
                },
                driverTwo: {
                    role: thisReservation.driverTwo.role,
                    driver: thisReservation.driverTwo.driver,
                    method: thisReservation.driverTwo.method,
                    verified: thisReservation.driverTwo.verified,
                },
                otherInfo: {
                    freeKM: thisReservation.otherInfo.freeKM,
                    deposit: thisReservation.otherInfo.deposit,
                    ownRisk: thisReservation.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.rentPrice,
                handInDate: thisReservation.handInDate,
                handInTime: thisReservation.handInTime,
                pickUpDate: thisReservation.pickUpDate,
                pickUpTime: thisReservation.pickUpTime,
                extraDriver: thisReservation.extraDriver,
                paidDeposit: {
                    paid: true,
                    method: 'card',
                },
                lowerOwnRisk: thisReservation.lowerOwnRisk,
                orderDetails: thisReservation.orderDetails,
                reservationID: thisReservation.reservationID,
                handInLocation: thisReservation.handInLocation,
                pickUpLocation: thisReservation.pickUpLocation,
                walletSerialNumber: thisReservation.walletSerialNumber,
                verificationProcess: thisReservation.verificationProcess,
                qrCode: thisReservation.qrCode,
            }
        case 'threeDrivers':
            return {
                class: thisReservation.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.checkedIn,
                driverOne: {
                    role: thisReservation.driverOne.role,
                    driver: thisReservation.driverOne.driver,
                    method: thisReservation.driverOne.method,
                    verified: thisReservation.driverOne.verified,
                },
                driverTwo: {
                    role: thisReservation.driverTwo.role,
                    driver: thisReservation.driverTwo.driver,
                    method: thisReservation.driverTwo.method,
                    verified: thisReservation.driverTwo.verified,
                },
                driverThree: {
                    role: thisReservation.driverThree.role,
                    driver: thisReservation.driverThree.driver,
                    method: thisReservation.driverThree.method,
                    verified: thisReservation.driverThree.verified,
                },
                otherInfo: {
                    freeKM: thisReservation.otherInfo.freeKM,
                    deposit: thisReservation.otherInfo.deposit,
                    ownRisk: thisReservation.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.rentPrice,
                handInDate: thisReservation.handInDate,
                handInTime: thisReservation.handInTime,
                pickUpDate: thisReservation.pickUpDate,
                pickUpTime: thisReservation.pickUpTime,
                extraDriver: thisReservation.extraDriver,
                paidDeposit: {
                    paid: true,
                    method: 'card',
                },
                lowerOwnRisk: thisReservation.lowerOwnRisk,
                orderDetails: thisReservation.orderDetails,
                reservationID: thisReservation.reservationID,
                handInLocation: thisReservation.handInLocation,
                pickUpLocation: thisReservation.pickUpLocation,
                walletSerialNumber: thisReservation.walletSerialNumber,
                verificationProcess: thisReservation.verificationProcess,
                qrCode: thisReservation.qrCode,
            }
    }
}

// Update Database with order-detail page information
export const updateDBwithOrderDetails = (driversCount, thisReservation, currentUserDB) => {
    switch (driversCount) {
        case 'oneDriver':
            return {
                class: thisReservation.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.checkedIn,
                driverOne: {
                    role: thisReservation.driverOne.role,
                    driver: `${currentUserDB.firstName} ${currentUserDB.lastName}`,
                    method: thisReservation.driverOne.method,
                    verified: thisReservation.driverOne.verified,
                },
                otherInfo: {
                    freeKM: thisReservation.otherInfo.freeKM,
                    deposit: thisReservation.otherInfo.deposit,
                    ownRisk: thisReservation.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.rentPrice,
                handInDate: thisReservation.handInDate,
                handInTime: thisReservation.handInTime,
                pickUpDate: thisReservation.pickUpDate,
                pickUpTime: thisReservation.pickUpTime,
                extraDriver: thisReservation.extraDriver,
                paidDeposit: {
                    paid: thisReservation.paidDeposit.paid,
                    method: thisReservation.paidDeposit.method,
                },
                lowerOwnRisk: thisReservation.lowerOwnRisk,
                orderDetails: true,
                reservationID: thisReservation.reservationID,
                handInLocation: thisReservation.handInLocation,
                pickUpLocation: thisReservation.pickUpLocation,
                walletSerialNumber: thisReservation.walletSerialNumber,
                verificationProcess: thisReservation.verificationProcess,
                qrCode: thisReservation.qrCode,
            }
        case 'twoDrivers':
            return {
                class: thisReservation.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.checkedIn,
                driverOne: {
                    role: thisReservation.driverOne.role,
                    driver: `${currentUserDB.firstName} ${currentUserDB.lastName}`,
                    method: thisReservation.driverOne.method,
                    verified: thisReservation.driverOne.verified,
                },
                driverTwo: {
                    role: thisReservation.driverTwo.role,
                    driver: thisReservation.driverTwo.driver,
                    method: thisReservation.driverTwo.method,
                    verified: thisReservation.driverTwo.verified,
                },
                otherInfo: {
                    freeKM: thisReservation.otherInfo.freeKM,
                    deposit: thisReservation.otherInfo.deposit,
                    ownRisk: thisReservation.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.rentPrice,
                handInDate: thisReservation.handInDate,
                handInTime: thisReservation.handInTime,
                pickUpDate: thisReservation.pickUpDate,
                pickUpTime: thisReservation.pickUpTime,
                extraDriver: thisReservation.extraDriver,
                paidDeposit: {
                    paid: thisReservation.paidDeposit.paid,
                    method: thisReservation.paidDeposit.method,
                },
                lowerOwnRisk: thisReservation.lowerOwnRisk,
                orderDetails: true,
                reservationID: thisReservation.reservationID,
                handInLocation: thisReservation.handInLocation,
                pickUpLocation: thisReservation.pickUpLocation,
                walletSerialNumber: thisReservation.walletSerialNumber,
                verificationProcess: thisReservation.verificationProcess,
                qrCode: thisReservation.qrCode,
            }
        case 'threeDrivers':
            return {
                class: thisReservation.class,
                carImage:
                    'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
                checkedIn: thisReservation.checkedIn,
                driverOne: {
                    role: thisReservation.driverOne.role,
                    driver: `${currentUserDB.firstName} ${currentUserDB.lastName}`,
                    method: thisReservation.driverOne.method,
                    verified: thisReservation.driverOne.verified,
                },
                driverTwo: {
                    role: thisReservation.driverTwo.role,
                    driver: thisReservation.driverTwo.driver,
                    method: thisReservation.driverTwo.method,
                    verified: thisReservation.driverTwo.verified,
                },
                driverThree: {
                    role: thisReservation.driverThree.role,
                    driver: thisReservation.driverThree.driver,
                    method: thisReservation.driverThree.method,
                    verified: thisReservation.driverThree.verified,
                },
                otherInfo: {
                    freeKM: thisReservation.otherInfo.freeKM,
                    deposit: thisReservation.otherInfo.deposit,
                    ownRisk: thisReservation.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.rentPrice,
                handInDate: thisReservation.handInDate,
                handInTime: thisReservation.handInTime,
                pickUpDate: thisReservation.pickUpDate,
                pickUpTime: thisReservation.pickUpTime,
                extraDriver: thisReservation.extraDriver,
                paidDeposit: {
                    paid: thisReservation.paidDeposit.paid,
                    method: thisReservation.paidDeposit.method,
                },
                lowerOwnRisk: thisReservation.lowerOwnRisk,
                orderDetails: true,
                reservationID: thisReservation.reservationID,
                handInLocation: thisReservation.handInLocation,
                pickUpLocation: thisReservation.pickUpLocation,
                walletSerialNumber: thisReservation.walletSerialNumber,
                verificationProcess: thisReservation.verificationProcess,
                qrCode: thisReservation.qrCode,
            }
    }
}

export const tester = () => {
    console.log('hi')
}

export const updateDBwithDriverOne = (
    driversCount,
    thisReservation,
    currentUserDB,
    method,
    verified,
    driverObj,
) => {
    console.log(currentUserDB)
    console.log(thisReservation)
    switch (driversCount) {
        case 'oneDriver':
            console.log('1')
            return {
                class: thisReservation.class,
                carImage: thisReservation.Image,
                checkedIn: thisReservation.checkedIn,
                driverOne: {
                    role: thisReservation.driverOne.role,
                    driver: `${currentUserDB.firstName} ${currentUserDB.lastName}`,
                    method: `${method}`,
                    verified: verified,
                },
                otherInfo: {
                    freeKM: thisReservation.otherInfo.freeKM,
                    deposit: thisReservation.otherInfo.deposit,
                    ownRisk: thisReservation.otherInfo.ownRisk,
                    priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                },
                rentPrice: thisReservation.rentPrice,
                handInDate: thisReservation.handInDate,
                handInTime: thisReservation.handInTime,
                pickUpDate: thisReservation.pickUpDate,
                pickUpTime: thisReservation.pickUpTime,
                extraDriver: thisReservation.extraDriver,
                paidDeposit: {
                    paid: thisReservation.paidDeposit.paid,
                    method: thisReservation.paidDeposit.method,
                },
                lowerOwnRisk: thisReservation.lowerOwnRisk,
                orderDetails: thisReservation.orderDetails,
                reservationID: thisReservation.reservationID,
                handInLocation: thisReservation.handInLocation,
                pickUpLocation: thisReservation.pickUpLocation,
                walletSerialNumber: thisReservation.walletSerialNumber,
                verificationProcess: thisReservation.verificationProcess,
                qrCode: thisReservation.qrCode,
            }

        case 'twoDrivers':
            console.log('2')
            if (driverObj === 'driverOne') {
                console.log('driver one')
                return {
                    class: thisReservation.class,
                    carImage: thisReservation.Image,
                    checkedIn: thisReservation.checkedIn,
                    driverOne: {
                        role: thisReservation.driverOne.role,
                        driver: `${currentUserDB.firstName} ${currentUserDB.lastName}`,
                        method: `${method}`,
                        verified: verified,
                    },
                    driverTwo: {
                        role: thisReservation.driverTwo.role,
                        driver: thisReservation.driverTwo.driver,
                        method: thisReservation.driverTwo.method,
                        verified: thisReservation.driverTwo.verified,
                    },
                    otherInfo: {
                        freeKM: thisReservation.otherInfo.freeKM,
                        deposit: thisReservation.otherInfo.deposit,
                        ownRisk: thisReservation.otherInfo.ownRisk,
                        priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                    },
                    rentPrice: thisReservation.rentPrice,
                    handInDate: thisReservation.handInDate,
                    handInTime: thisReservation.handInTime,
                    pickUpDate: thisReservation.pickUpDate,
                    pickUpTime: thisReservation.pickUpTime,
                    extraDriver: thisReservation.extraDriver,
                    paidDeposit: {
                        paid: thisReservation.paidDeposit.paid,
                        method: thisReservation.paidDeposit.method,
                    },
                    lowerOwnRisk: thisReservation.lowerOwnRisk,
                    orderDetails: thisReservation.orderDetails,
                    reservationID: thisReservation.reservationID,
                    handInLocation: thisReservation.handInLocation,
                    pickUpLocation: thisReservation.pickUpLocation,
                    walletSerialNumber: thisReservation.walletSerialNumber,
                    verificationProcess: thisReservation.verificationProcess,
                    qrCode: thisReservation.qrCode,
                }
            } else if (driverObj === 'driverTwo') {
                console.log('driver two')
                return {
                    class: thisReservation.class,
                    carImage: thisReservation.Image,
                    checkedIn: thisReservation.checkedIn,
                    driverOne: {
                        role: thisReservation.driverOne.role,
                        driver: `${currentUserDB.firstName} ${currentUserDB.lastName}`,
                        method: thisReservation.driverOne.method,
                        verified: thisReservation.driverOne.verified,
                    },
                    driverTwo: {
                        role: thisReservation.driverTwo.role,
                        driver: thisReservation.driverTwo.driver,
                        method: `${method}`,
                        verified: verified,
                    },
                    otherInfo: {
                        freeKM: thisReservation.otherInfo.freeKM,
                        deposit: thisReservation.otherInfo.deposit,
                        ownRisk: thisReservation.otherInfo.ownRisk,
                        priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                    },
                    rentPrice: thisReservation.rentPrice,
                    handInDate: thisReservation.handInDate,
                    handInTime: thisReservation.handInTime,
                    pickUpDate: thisReservation.pickUpDate,
                    pickUpTime: thisReservation.pickUpTime,
                    extraDriver: thisReservation.extraDriver,
                    paidDeposit: {
                        paid: thisReservation.paidDeposit.paid,
                        method: thisReservation.paidDeposit.method,
                    },
                    lowerOwnRisk: thisReservation.lowerOwnRisk,
                    orderDetails: thisReservation.orderDetails,
                    reservationID: thisReservation.reservationID,
                    handInLocation: thisReservation.handInLocation,
                    pickUpLocation: thisReservation.pickUpLocation,
                    walletSerialNumber: thisReservation.walletSerialNumber,
                    verificationProcess: thisReservation.verificationProcess,
                    qrCode: thisReservation.qrCode,
                }
            }

        case 'threeDrivers':
            // console.log('3')
            if (driverObj === 'driverOne') {
                console.log('driver one')
                return {
                    class: thisReservation.class,
                    carImage: thisReservation.Image,
                    checkedIn: thisReservation.checkedIn,
                    driverOne: {
                        role: thisReservation.driverOne.role,
                        driver: `${currentUserDB.firstName} ${currentUserDB.lastName}`,
                        method: `${method}`,
                        verified: verified,
                    },
                    driverTwo: {
                        role: thisReservation.driverTwo.role,
                        driver: thisReservation.driverTwo.driver,
                        method: thisReservation.driverTwo.method,
                        verified: thisReservation.driverTwo.verified,
                    },
                    driverThree: {
                        role: thisReservation.driverThree.role,
                        driver: thisReservation.driverThree.driver,
                        method: thisReservation.driverThree.method,
                        verified: thisReservation.driverThree.verified,
                    },
                    otherInfo: {
                        freeKM: thisReservation.otherInfo.freeKM,
                        deposit: thisReservation.otherInfo.deposit,
                        ownRisk: thisReservation.otherInfo.ownRisk,
                        priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                    },
                    rentPrice: thisReservation.rentPrice,
                    handInDate: thisReservation.handInDate,
                    handInTime: thisReservation.handInTime,
                    pickUpDate: thisReservation.pickUpDate,
                    pickUpTime: thisReservation.pickUpTime,
                    extraDriver: thisReservation.extraDriver,
                    paidDeposit: {
                        paid: thisReservation.paidDeposit.paid,
                        method: thisReservation.paidDeposit.method,
                    },
                    lowerOwnRisk: thisReservation.lowerOwnRisk,
                    orderDetails: thisReservation.orderDetails,
                    reservationID: thisReservation.reservationID,
                    handInLocation: thisReservation.handInLocation,
                    pickUpLocation: thisReservation.pickUpLocation,
                    walletSerialNumber: thisReservation.walletSerialNumber,
                    verificationProcess: thisReservation.verificationProcess,
                    qrCode: thisReservation.qrCode,
                }
            } else if (driverObj === 'driverTwo') {
                console.log('driver two')
                return {
                    class: thisReservation.class,
                    carImage: thisReservation.Image,
                    checkedIn: thisReservation.checkedIn,
                    driverOne: {
                        role: thisReservation.driverOne.role,
                        driver: `${currentUserDB.firstName} ${currentUserDB.lastName}`,
                        method: thisReservation.driverOne.method,
                        verified: thisReservation.driverOne.verified,
                    },
                    driverTwo: {
                        role: thisReservation.driverTwo.role,
                        driver: thisReservation.driverTwo.driver,
                        method: `${method}`,
                        verified: verified,
                    },
                    driverThree: {
                        role: thisReservation.driverThree.role,
                        driver: thisReservation.driverThree.driver,
                        method: thisReservation.driverThree.method,
                        verified: thisReservation.driverThree.verified,
                    },
                    otherInfo: {
                        freeKM: thisReservation.otherInfo.freeKM,
                        deposit: thisReservation.otherInfo.deposit,
                        ownRisk: thisReservation.otherInfo.ownRisk,
                        priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                    },
                    rentPrice: thisReservation.rentPrice,
                    handInDate: thisReservation.handInDate,
                    handInTime: thisReservation.handInTime,
                    pickUpDate: thisReservation.pickUpDate,
                    pickUpTime: thisReservation.pickUpTime,
                    extraDriver: thisReservation.extraDriver,
                    paidDeposit: {
                        paid: thisReservation.paidDeposit.paid,
                        method: thisReservation.paidDeposit.method,
                    },
                    lowerOwnRisk: thisReservation.lowerOwnRisk,
                    orderDetails: thisReservation.orderDetails,
                    reservationID: thisReservation.reservationID,
                    handInLocation: thisReservation.handInLocation,
                    pickUpLocation: thisReservation.pickUpLocation,
                    walletSerialNumber: thisReservation.walletSerialNumber,
                    verificationProcess: thisReservation.verificationProcess,
                    qrCode: thisReservation.qrCode,
                }
            } else if (driverObj === 'driverThree') {
                console.log('driver three')
                return {
                    class: thisReservation.class,
                    carImage: thisReservation.Image,
                    checkedIn: thisReservation.checkedIn,
                    driverOne: {
                        role: thisReservation.driverOne.role,
                        driver: `${currentUserDB.firstName} ${currentUserDB.lastName}`,
                        method: thisReservation.driverOne.method,
                        verified: thisReservation.driverOne.verified,
                    },
                    driverTwo: {
                        role: thisReservation.driverTwo.role,
                        driver: thisReservation.driverTwo.driver,
                        method: thisReservation.driverTwo.method,
                        verified: thisReservation.driverTwo.verified,
                    },
                    driverThree: {
                        role: thisReservation.driverThree.role,
                        driver: thisReservation.driverThree.driver,
                        method: `${method}`,
                        verified: verified,
                    },
                    otherInfo: {
                        freeKM: thisReservation.otherInfo.freeKM,
                        deposit: thisReservation.otherInfo.deposit,
                        ownRisk: thisReservation.otherInfo.ownRisk,
                        priceExtraKM: thisReservation.otherInfo.priceExtraKM,
                    },
                    rentPrice: thisReservation.rentPrice,
                    handInDate: thisReservation.handInDate,
                    handInTime: thisReservation.handInTime,
                    pickUpDate: thisReservation.pickUpDate,
                    pickUpTime: thisReservation.pickUpTime,
                    extraDriver: thisReservation.extraDriver,
                    paidDeposit: {
                        paid: thisReservation.paidDeposit.paid,
                        method: thisReservation.paidDeposit.method,
                    },
                    lowerOwnRisk: thisReservation.lowerOwnRisk,
                    orderDetails: thisReservation.orderDetails,
                    reservationID: thisReservation.reservationID,
                    handInLocation: thisReservation.handInLocation,
                    pickUpLocation: thisReservation.pickUpLocation,
                    walletSerialNumber: thisReservation.walletSerialNumber,
                    verificationProcess: thisReservation.verificationProcess,
                    qrCode: thisReservation.qrCode,
                }
            }
    }
}
