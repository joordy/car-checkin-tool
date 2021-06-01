import { v4 as uuidv4 } from 'uuid'

// Temporary user object
const user = {
    userID: uuidv4(),
    firstName: 'Kelly',
    lastName: 'de Jong',
    email: 'kellydejong@gmail.com',
    phone: '+31 6 1234 5678',
    birthDate: '01-02-1997',
    cars: [
        {
            reservationID: uuidv4(),
            carImage:
                'https://user-images.githubusercontent.com/48051912/119339694-c8330a00-bc91-11eb-9af5-3cde4338756e.png',
            checkedIn: false,
            pickUpLocation: 'Overtoom, Amsterdam',
            pickUpDate: '04-06-2021',
            pickUpTime: '10:30',
            handInLocation: 'Overtoom, Amsterdam',
            handInDate: '10-06-2021',
            handInTime: '17:00',
            class: 'A',
            rentPrice: 499.99,
            extraDriver: 1,
            lowerOwnRisk: false,
            otherInfo: {
                ownRisk: 400,
                deposit: 500,
                freeKM: 600,
                priceExtraKM: 0.3,
            },
            paidDeposit: false,
            qrCode: '',
        },
        {
            reservationID: uuidv4(),
            carImage:
                'https://user-images.githubusercontent.com/48051912/119339694-c8330a00-bc91-11eb-9af5-3cde4338756e.png',
            checkedIn: false,
            pickUpLocation: 'Overtoom, Amsterdam',
            pickUpDate: '06-06-2021',
            pickUpTime: '10:30',
            handInLocation: 'Zuid-Oost, Amsterdam',
            handInDate: '22-06-2021',
            handInTime: '17:00',
            class: 'Electric',
            rentPrice: 699.99,
            extraDriver: 1,
            lowerOwnRisk: false,
            otherInfo: {
                ownRisk: 600,
                deposit: 800,
                freeKM: 600,
                priceExtraKM: 0.3,
            },
            paidDeposit: false,
            qrCode: '',
        },
        {
            reservationID: uuidv4(),
            carImage:
                'https://user-images.githubusercontent.com/48051912/119339694-c8330a00-bc91-11eb-9af5-3cde4338756e.png',
            checkedIn: false,
            pickUpLocation: 'Overtoom, Amsterdam',
            pickUpDate: '06-07-2021',
            pickUpTime: '10:30',
            handInLocation: 'Zuid-Oost, Amsterdam',
            handInDate: '22-07-2021',
            handInTime: '17:00',
            class: 'Electric',
            rentPrice: 699.99,
            extraDriver: 1,
            lowerOwnRisk: false,
            otherInfo: {
                ownRisk: 600,
                deposit: 800,
                freeKM: 600,
                priceExtraKM: 0.3,
            },
            paidDeposit: false,
            qrCode: '',
        },
    ],
}

const insertDB = async () => {
    const { data, error } = await supabase.from('users').insert([user])
    console.log(data)
    console.log(error)
}
insertDB()
