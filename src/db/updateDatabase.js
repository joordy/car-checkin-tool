export const updateDBwithPayMethod = (loggedinUser, driversCount, thisReservation, userChoice) => {
    console.log('curr', thisReservation)
    switch (driversCount) {
        case 'oneDriver':
            return {
                class: thisReservation.class,
                carImage: thisReservation.carImage,
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
                carImage: thisReservation.carImage,
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
                carImage: thisReservation.carImage,
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
                carImage: thisReservation.carImage,
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
                carImage: thisReservation.carImage,
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
                carImage: thisReservation.carImage,
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
                carImage: thisReservation.carImage,
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
                carImage: thisReservation.carImage,
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
                carImage: thisReservation.carImage,
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

export const updateDBwithDriverOne = (
    driversCount,
    thisReservation,
    currentUserDB,
    method,
    verified,
    driverObj,
) => {
    console.log(thisReservation)
    console.log(currentUserDB)
    switch (driversCount) {
        case 'oneDriver':
            console.log('1')
            return {
                class: thisReservation.class,
                carImage: thisReservation.Image,
                checkedIn: thisReservation.checkedIn,
                driverOne: {
                    role: thisReservation.driverOne.role,
                    driver: thisReservation.driverOne.driver,
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
                        driver: thisReservation.driverOne.driver,
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
                        driver: thisReservation.driverOne.driver,
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
                        driver: thisReservation.driverOne.driver,
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
                        driver: thisReservation.driverOne.driver,
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

export const updateDBwithQRCodeWallet = (driversCount, thisReservation, walletSerialNumber) => {
    //console.log('curr', thisReservation)
    switch (driversCount) {
        case 'oneDriver':
            return {
                class: thisReservation.class,
                carImage: thisReservation.carImage,
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
                    method: thisReservation.paidDeposit.method,
                },
                lowerOwnRisk: thisReservation.lowerOwnRisk,
                orderDetails: thisReservation.orderDetails,
                reservationID: thisReservation.reservationID,
                handInLocation: thisReservation.handInLocation,
                pickUpLocation: thisReservation.pickUpLocation,
                walletSerialNumber: walletSerialNumber,
                verificationProcess: thisReservation.verificationProcess,
                qrCode: true,
            }
        case 'twoDrivers':
            return {
                class: thisReservation.class,
                carImage: thisReservation.carImage,
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
                    method: thisReservation.paidDeposit.method,
                },
                lowerOwnRisk: thisReservation.lowerOwnRisk,
                orderDetails: thisReservation.orderDetails,
                reservationID: thisReservation.reservationID,
                handInLocation: thisReservation.handInLocation,
                pickUpLocation: thisReservation.pickUpLocation,
                walletSerialNumber: walletSerialNumber,
                verificationProcess: thisReservation.verificationProcess,
                qrCode: true,
            }
        case 'threeDrivers':
            return {
                class: thisReservation.class,
                carImage: thisReservation.carImage,
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
                    method: thisReservation.paidDeposit.method,
                },
                lowerOwnRisk: thisReservation.lowerOwnRisk,
                orderDetails: thisReservation.orderDetails,
                reservationID: thisReservation.reservationID,
                handInLocation: thisReservation.handInLocation,
                pickUpLocation: thisReservation.pickUpLocation,
                walletSerialNumber: walletSerialNumber,
                verificationProcess: thisReservation.verificationProcess,
                qrCode: true,
            }
    }
}

export const updateDBwithVerifiedProcess = (driversCount, thisReservation, currentUserDB) => {
    switch (driversCount) {
        case 'oneDriver':
            return {
                class: currentUserDB.class,
                carImage: currentUserDB.carImage,
                checkedIn: currentUserDB.checkedIn,
                driverOne: {
                    role: currentUserDB.driverOne.role,
                    driver: currentUserDB.driverOne.driver,
                    method: currentUserDB.driverOne.method,
                    verified: currentUserDB.driverOne.verified,
                },
                otherInfo: {
                    freeKM: currentUserDB.otherInfo.freeKM,
                    deposit: currentUserDB.otherInfo.deposit,
                    ownRisk: currentUserDB.otherInfo.ownRisk,
                    priceExtraKM: currentUserDB.otherInfo.priceExtraKM,
                },
                rentPrice: currentUserDB.rentPrice,
                handInDate: currentUserDB.handInDate,
                handInTime: currentUserDB.handInTime,
                pickUpDate: currentUserDB.pickUpDate,
                pickUpTime: currentUserDB.pickUpTime,
                extraDriver: currentUserDB.extraDriver,
                paidDeposit: {
                    paid: currentUserDB.paidDeposit.paid,
                    method: currentUserDB.paidDeposit.method,
                },
                lowerOwnRisk: currentUserDB.lowerOwnRisk,
                orderDetails: currentUserDB.orderDetails,
                reservationID: currentUserDB.reservationID,
                handInLocation: currentUserDB.handInLocation,
                pickUpLocation: currentUserDB.pickUpLocation,
                walletSerialNumber: currentUserDB.walletSerialNumber,
                verificationProcess: true,
                qrCode: currentUserDB.qrCode,
            }
        case 'twoDrivers':
            return {
                class: currentUserDB.class,
                carImage: currentUserDB.carImage,
                checkedIn: currentUserDB.checkedIn,
                driverOne: {
                    role: currentUserDB.driverOne.role,
                    driver: currentUserDB.driverOne.driver,
                    method: currentUserDB.driverOne.method,
                    verified: currentUserDB.driverOne.verified,
                },
                driverTwo: {
                    role: currentUserDB.driverTwo.role,
                    driver: currentUserDB.driverTwo.driver,
                    method: currentUserDB.driverTwo.method,
                    verified: currentUserDB.driverTwo.verified,
                },
                otherInfo: {
                    freeKM: currentUserDB.otherInfo.freeKM,
                    deposit: currentUserDB.otherInfo.deposit,
                    ownRisk: currentUserDB.otherInfo.ownRisk,
                    priceExtraKM: currentUserDB.otherInfo.priceExtraKM,
                },
                rentPrice: currentUserDB.rentPrice,
                handInDate: currentUserDB.handInDate,
                handInTime: currentUserDB.handInTime,
                pickUpDate: currentUserDB.pickUpDate,
                pickUpTime: currentUserDB.pickUpTime,
                extraDriver: currentUserDB.extraDriver,
                paidDeposit: {
                    paid: currentUserDB.paidDeposit.paid,
                    method: currentUserDB.paidDeposit.method,
                },
                lowerOwnRisk: currentUserDB.lowerOwnRisk,
                orderDetails: currentUserDB.orderDetails,
                reservationID: currentUserDB.reservationID,
                handInLocation: currentUserDB.handInLocation,
                pickUpLocation: currentUserDB.pickUpLocation,
                walletSerialNumber: currentUserDB.walletSerialNumber,
                verificationProcess: true,
                qrCode: currentUserDB.qrCode,
            }
        case 'threeDrivers':
            return {
                class: currentUserDB.class,
                carImage: currentUserDB.carImage,
                checkedIn: currentUserDB.checkedIn,
                driverOne: {
                    role: currentUserDB.driverOne.role,
                    driver: currentUserDB.driverOne.driver,
                    method: currentUserDB.driverOne.method,
                    verified: currentUserDB.driverOne.verified,
                },
                driverTwo: {
                    role: currentUserDB.driverTwo.role,
                    driver: currentUserDB.driverTwo.driver,
                    method: currentUserDB.driverTwo.method,
                    verified: currentUserDB.driverTwo.verified,
                },
                driverThree: {
                    role: currentUserDB.driverThree.role,
                    driver: currentUserDB.driverThree.driver,
                    method: currentUserDB.driverThree.method,
                    verified: currentUserDB.driverThree.verified,
                },
                otherInfo: {
                    freeKM: currentUserDB.otherInfo.freeKM,
                    deposit: currentUserDB.otherInfo.deposit,
                    ownRisk: currentUserDB.otherInfo.ownRisk,
                    priceExtraKM: currentUserDB.otherInfo.priceExtraKM,
                },
                rentPrice: currentUserDB.rentPrice,
                handInDate: currentUserDB.handInDate,
                handInTime: currentUserDB.handInTime,
                pickUpDate: currentUserDB.pickUpDate,
                pickUpTime: currentUserDB.pickUpTime,
                extraDriver: currentUserDB.extraDriver,
                paidDeposit: {
                    paid: currentUserDB.paidDeposit.paid,
                    method: currentUserDB.paidDeposit.method,
                },
                lowerOwnRisk: currentUserDB.lowerOwnRisk,
                orderDetails: currentUserDB.orderDetails,
                reservationID: currentUserDB.reservationID,
                handInLocation: currentUserDB.handInLocation,
                pickUpLocation: currentUserDB.pickUpLocation,
                walletSerialNumber: currentUserDB.walletSerialNumber,
                verificationProcess: true,
                qrCode: currentUserDB.qrCode,
            }
    }
}
