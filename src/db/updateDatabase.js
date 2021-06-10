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
