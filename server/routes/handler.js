const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const stripe = require('stripe')(`${process.env.STRIPE_TEST_KEY}`);
const stripe = require("stripe")(
  "sk_test_51IsTukJEAzd2OWuLk3FnSrJQnDxX3VuWZRtUIkCCvEBhK20GOantGHhar8kn1eqtYLtZ1qSX0hvVZ2lwyRWkCl5n002JbZmNr2"
);

let reservation;
let loggedInUser;
<<<<<<< HEAD

// Posts user object to server, to use later on
router.post("/reservations", (req, res) => {
=======
let carIndexKey;

// Post routes
router.post('/api/reservations', postReservation);
router.post('/api/order-details', postOrderDetails);
router.post('/api/carIndexKey', postCarIndexKey);
router.post('/api/create-verification-session', postCreateVerificationSession);
router.post('/api/create-checkin', postCreateCheckin);
router.post('/api/create-payment-intent', postCreatePaymentIntent);

// Get routes
router.get('/api/reservations', getReservation);
router.get('/api/carIndexKey', getCarIndexKey);
router.get('/api/order-details', getOrderDetails);
router.get('/api/verification', getVerification);
router.get('/api/deposit', getDeposit);

// Post user info to server when logging in
function postReservation(req, res) {
>>>>>>> 4ad927893673caee0eaed6e239b686ea7b17e5ec
  loggedInUser = req.body;
  console.log(loggedInUser);
  // res.end(JSON.stringify(req.body));
}

<<<<<<< HEAD
// Receives logged in user from signed in user
router.get("/reservations", (req, res) => {
  res.end(JSON.stringify(loggedInUser));
});

// Post specific car obj to server, to fetch on later.
router.post("/order-details", (req, res) => {
=======
// Get logged in user information
function getReservation(req, res) {
  setTimeout(() => {
    console.log('all reservations of current user', reservation);
    res.send(loggedInUser);
  }, 100);
}

// Post specific car obj to server, to fetch on later.
function postOrderDetails(req, res) {
>>>>>>> 4ad927893673caee0eaed6e239b686ea7b17e5ec
  reservation = req.body;
  console.log('this is the one', req.body);
  res.send(req.body);
}

// Save chosen car index key on server
function postCarIndexKey(req, res) {
  console.log('this is the key index', req.body);

  carIndexKey = req.body;
  res.send(req.body);
}

// Receive chosen car index key
function getCarIndexKey(req, res) {
  console.log('carKeyIndex:', carIndexKey);
  res.send(carIndexKey);
}

// Receives selected car obj from signed in user
<<<<<<< HEAD
router.get("/order-details", (req, res) => {
  console.log("reservation", reservation);
=======
function getOrderDetails(req, res) {
  console.log('current reservation', reservation);
>>>>>>> 4ad927893673caee0eaed6e239b686ea7b17e5ec
  const data = () => {
    if (!reservation) {
    } else {
      return reservation;
    }
  };

  res.send(data());
}

<<<<<<< HEAD
router.get("/verification", (req, res) => {
=======
//
function getVerification(req, res) {
>>>>>>> 4ad927893673caee0eaed6e239b686ea7b17e5ec
  console.log(reservation);
  const data = () => {
    if (!reservation) {
      return "undefined";
    } else {
      return reservation;
    }
  };

  res.send(data());
}

<<<<<<< HEAD
router.get("/deposit", (req, res) => {
=======
// Get information
function getDeposit(req, res) {
>>>>>>> 4ad927893673caee0eaed6e239b686ea7b17e5ec
  console.log(reservation);
  const data = () => {
    if (!reservation) {
      return "undefined";
    } else {
      return reservation;
    }
  };

  res.send(data());
}

<<<<<<< HEAD
router.post("/create-checkin", (req, res) => {
  const { firstName, email, pickUpLocation, pickUpDateTime, reservationID } =
    req.body;
=======
// Handle client-side verification
async function postCreateCheckin(req, res) {
  const { firstName, email, pickUpLocation, pickUpDateTime, reservationID } = req.body;
>>>>>>> 4ad927893673caee0eaed6e239b686ea7b17e5ec

  async function postData(url, data) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        Authorization: `Basic ${process.env.WALLET_SECRET}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  postData(process.env.WALLET_URL, req.body).then((data) => {
    if (!data.errors) {
      console.log(getDate(pickUpDateTime));
      const msg = {
        to: email,
        from: { email: "europauto2021@outlook.com", name: "Europauto Checkin" },
        templateId: "d-d13520409a12422783f1f2bf35983b45",
        dynamicTemplateData: {
          firstName: firstName,
          pickUpLocation: pickUpLocation,
          pickUpDateTime: getDate(pickUpDateTime),
          serialNumber: data.serialNumber,
          reservationID: reservationID,
        },
      };
      sgMail
        .send(msg)
        .then(() => {
          console.log("Email sent");
        })
        .catch((error) => {
          console.error(error);
        });

      res.send({
        status: "200",
        serialNumber: data.serialNumber,
      });
    } else {
      res.send({
        status: "404",
        errors: data.errors,
      });
    }
  });
}

<<<<<<< HEAD
router.post("/create-verification-session", async (req, res) => {
  const verificationSession = await stripe.identity.verificationSessions.create(
    {
      type: "document",
      metadata: {
        user_id: "{{USER_ID}}",
      },
    }
  );
=======
// Post verification to client
async function postCreateVerificationSession(req, res) {
  const verificationSession = await stripe.identity.verificationSessions.create({
    type: 'document',
    metadata: {
      user_id: '{{USER_ID}}',
    },
  });
>>>>>>> 4ad927893673caee0eaed6e239b686ea7b17e5ec

  const clientSecret = verificationSession.client_secret;

  console.log("User verification");
  res.end(JSON.stringify(clientSecret));
}

// Stripe code adapted from: https://stripe.com/docs/payments/integration-builder
const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

<<<<<<< HEAD
router.post("/create-payment-intent", async (req, res) => {
=======
// Function to handle payments of stripe
async function postCreatePaymentIntent(req, res) {
>>>>>>> 4ad927893673caee0eaed6e239b686ea7b17e5ec
  console.log(req.body);
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}

// Function to calculate specific dates
function getDate(date) {
  const dateTime = date.split(" ");
  const dateElements = dateTime[0].split("-");
  const newDate = `${dateElements[2]}-${dateElements[1]}-${dateElements[0]} ${dateTime[1]}`;
  const dateObject = new Date(newDate);
  const day = dateObject.toLocaleString("nl-NL", { day: "numeric" });
  const month = dateObject.toLocaleString("nl-NL", { month: "long" });
  const year = dateObject.toLocaleString("nl-NL", { year: "numeric" });
  const time = dateObject.toLocaleString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return `${day} ${month} ${year} om ${time} uur`;
}

module.exports = router;
