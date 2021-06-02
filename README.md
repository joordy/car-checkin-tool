# Car Checkin Tool

We ([Jordy Fronik](https://github.com/joordy), [Lars Ruijs](https://github.com/lars-ruijs) & [Guus Maij](https://github.com/tsjuusmei)) have made a tool to online check-in reservations for rental cars. Because of this, the user will only have to physically pick-up the keys for the car, and will shorten the queue at the rental place.

<p align="center">
  <img src="https://user-images.githubusercontent.com/55750107/120201781-1ada6c00-c226-11eb-803c-5cbe6fd6b6ff.png" width="900px">
</p>

## Live demo link

Upcoming

## Debrief

A reservation is, most of the time, made well ahead of the rental date. Until now, the user always has to check-in physically at the location of the rental, which easily costs about 15 minutes per user.

Create a digital check-in process for the rental service, so that there is only little time needed to physically pick up the rental car. The check-in process consists of: user login, checking in a reservation, confirm the identity and driver's license and create a reservation for the deposit on a creditcard.

## Design Challenge

How can we ensure that customers, that reserved a car at the rental, can easily check-in online, so that they can quickly pick up the reserved car at the relevant location.

## Features

- User login
- Overview of reservations
- Checking in a reservation
- Confirming identity and driver's license
- Reserve deposit on a creditcard

## API

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Stripe Identity API</summary>

To confirm the identity and driver's license of the user(s), we use [Stripe Identity API](https://stripe.com/docs/identity). This service easily can easily the identity and driver's license for us.

</details>

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Stripe API</summary>

To assure the reserve deposit on a creditcard, we use [Stripe API](https://stripe.com/docs/api).

</details>

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Passslot</summary>

To add a checked-in reservation to a user's Wallet, we use [Passslot](https://www.passslot.com/developer/api/resources).

</details>

## Database

For the usage of the database, we chose [Supabase](https://supabase.io/). This is a very easy to set up database, which a very nice and easy documentation. Therefore this database seemed really easy to use, and we chose to use this for our project.

## Dataset

For this project we needed to store the users and their reservations, with all of the associated information:

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Dataset</summary>
  
  ```js
user[0]: {
  "firstName": String,
  "lastName": String,
  "email": String,
  "password": String,
  "phone": String,
  "birthDate": Date,
  "userID": String,
  "reservations": [
    {
      "reservationID": String,
      "checkedIn": Boolean,
      "pickUpLocation": String,
      "pickUpDate": Date,
      "pickUpTime": Time,
      "handInDate": Date,
  "handInLocation": String,
  "handInTime": Time,
  "class": String,
  "rentPrice": Number,
  "extraDriver": Number,
  "lowerOwnRisk": Boolean,
  "otherInfo": {
    "ownRisk": Number,
    "deposit": Number,
    "freeKM": Number,
    "priceExtraKM": Number
  },
  "orderDetails": Boolean,
  "verified": {
    "choice": Boolean,
    "id": Boolean,
    "image": Boolean
  },
  "paidDeposit": {
    "choice": Boolean,
    "paid": Boolean
  },
  "wallet": {
    "choice": Boolean,
    "paid": Boolean
  },
  "qrCode": String,
  "walletSerialNumber": String
  },
],
user[1]: {
...
}

```

</details>

## Tech-stack

The application is built in [React.js](https://reactjs.org/). This is a component based framework, where we can easily work in together.
For every feature or adjustment, we worked in branches and made pull requests of every small change or feature add-on. Every pull request must be reviewed by at least 1 of the other team members before it is able to merge onto the `development` branch.

We also used a method called [atomic webdesign](https://github.com/danilowoz/react-atomic-design). By using this, we split up every bit of code in `atoms`, `molecules`, `organisms` and `templates`. By doing this we can easily re-use components, and we have a clear overview of the components by size.

We also use [`prettier`](https://prettier.io/) as code formatter, which also uses [`eslint`](https://eslint.org/) to lint the code. This will save a lot of discussion within code reviews, because it creates the same layout for the code on every save the creator makes.

## Installation

*Use the following commands in a terminal*

1. Clone the repo

```

git clone https://github.com/joordy/car-checkin-tool.git

```

2. Navigate to the `client` folder

```

cd ./client

```

3. Create a `.env` file (in the `client` folder) with the following variables for the database and wallet connection:

```

REACT_APP_SUPABASE_URL=INSERT_SUPABASE_URL_HERE
REACT_APP_SUPABASE_PUBLIC_KEY=INSERT_PUBLIC_KEY_HERE
REACT_APP_WALLET_SECRET=INSERT_SECRET_WALLET_HERE

```

4. Install packages

```

npm install

```

5. Navigate to the `server` folder

```

cd ../server

```

6. Create a `.env` file (in the `server` folder) with the following variables for the wallet connection:

```

WALLET_URL=INSERT_WALLET_URL_HERE
WALLET_SECRET=INSERT_WALLET_SECRET_HERE

```

7. Install packages

```

npm install

```

8. Run the application (from within the `server` folder)

```

npm run dev

```

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
```
