import { v4 as uuidv4 } from 'uuid'

const user = {
    firstName: 'Robert',
    lastName: 'Spier',
    email: 'robert@gmail.com',
    password: 'Welkom123',
    phoneNumber: '+31 6 12345678',
    birthDate: '01-01-1997',
    userID: uuidv4(),
    cars: [
        {
            carImage:
                'https://user-images.githubusercontent.com/48051912/120997146-42ca5200-c787-11eb-9b01-1a458b0664ed.png',
            reservationID: uuidv4(),
            checkedIn: false,
            pickUpLocation: 'Amsterdam, Overtoom',
            pickUpDate: '14-06-2021',
            pickUpTime: '09:00:00',
            handInLocation: 'Amsterdam, Overtoom',
            handInDate: '19-06-2921',
            handInTime: '17:00:00',
            class: 'Electric',
            rentPrice: 600,
            extraDriver: 0,
            lowerOwnRisk: false,
            otherInfo: {
                ownRisk: 450,
                deposit: 500,
                freeKM: 600,
                priceExtraKM: 0.3,
            },
            orderDetails: false,
            verification: [
                {
                    driver: 'Robert Spier',
                    role: 'hoofdbestuurder',
                    method: 'location',
                    verified: false,
                },
                {
                    driver: 'Justus Sturkeboom',
                    role: 'extra',
                    method: 'location',
                    verified: false,
                },
                {
                    driver: 'Janno Kapritsias',
                    role: 'extra',
                    method: 'location',
                    verified: false,
                },
            ],
            verificationProcess: false,
            paidDeposit: {
                method: 'location',
                paid: false,
            },
            qrCode: Boolean,
            walletSerialNumber: 'String',
        },
        {
            carImage:
                'https://user-images.githubusercontent.com/48051912/120997155-44941580-c787-11eb-9c99-03983138a782.png',
            reservationID: uuidv4(),
            checkedIn: false,
            pickUpLocation: 'Amsterdam, Overtoom',
            pickUpDate: '16-06-2021',
            pickUpTime: '09:00:00',
            handInLocation: 'Amsterdam, Overtoom',
            handInDate: '18-06-2921',
            handInTime: '17:00:00',
            class: 'C',
            rentPrice: 600,
            extraDriver: 0,
            lowerOwnRisk: false,
            otherInfo: {
                ownRisk: 450,
                deposit: 500,
                freeKM: 600,
                priceExtraKM: 0.3,
            },
            orderDetails: false,
            verification: [
                {
                    driver: 'Robert Spier',
                    role: 'hoofdbestuurder',
                    method: 'location',
                    verified: false,
                },
            ],
            verificationProcess: false,
            paidDeposit: {
                method: 'location',
                paid: false,
            },
            qrCode: Boolean,
            walletSerialNumber: 'String',
        },
        {
            carImage:
                'https://user-images.githubusercontent.com/48051912/120997155-44941580-c787-11eb-9c99-03983138a782.png',
            reservationID: uuidv4(),
            checkedIn: false,
            pickUpLocation: 'Amsterdam, Overtoom',
            pickUpDate: '18-06-2021',
            pickUpTime: '09:00:00',
            handInLocation: 'Amsterdam, Overtoom',
            handInDate: '20-06-2921',
            handInTime: '17:00:00',
            class: 'A',
            rentPrice: 600,
            extraDriver: 0,
            lowerOwnRisk: false,
            otherInfo: {
                ownRisk: 450,
                deposit: 500,
                freeKM: 600,
                priceExtraKM: 0.3,
            },
            orderDetails: false,
            verification: [
                {
                    driver: 'Robert Spier',
                    role: 'hoofdbestuurder',
                    method: 'location',
                    verified: false,
                },
                {
                    driver: 'Janno Kapritsias',
                    role: 'extra',
                    method: 'location',
                    verified: false,
                },
            ],
            verificationProcess: false,
            paidDeposit: {
                method: 'location',
                paid: false,
            },
            qrCode: Boolean,
            walletSerialNumber: 'String',
        },
    ],
}

const insertDB = async () => {
    const { data, error } = await supabase.from('users').insert([user2])
    console.log(data)
    console.log(error)
}

insertDB()
