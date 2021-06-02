const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
let reservation;

router.get('/reservations', (req, res) => {
  console.log('reservation page');
  const str = 'reservation page';
  res.end(JSON.stringify(str));
});

router.post('/order-details', (req, res) => {
  reservation = req.body;
  res.end(JSON.stringify(req.body));
});

router.get('/order-details', (req, res) => {
  console.log(reservation);
  const data = () => {
    if (!reservation) {
      return 'undefined';
    } else {
      return reservation;
    }
  };

  res.end(JSON.stringify(data()));
});

router.get('/verification', (req, res) => {
  console.log(reservation);
  const data = () => {
    if (!reservation) {
      return 'undefined';
    } else {
      return reservation;
    }
  };

  res.end(JSON.stringify(data()));
});

router.get('/deposit', (req, res) => {
  console.log(reservation);
  const data = () => {
    if (!reservation) {
      return 'undefined';
    } else {
      return reservation;
    }
  };

  res.end(JSON.stringify(data()));
});

router.post('/create-checkin', (req, res) => {
  const { fullName, email, pickUpLocation, handInLocation, pickUpDateTime, handInDateTime, reservationID } = req.body;

  async function postData(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        Authorization: `Basic ${process.env.WALLET_SECRET}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  postData(process.env.WALLET_URL, req.body).then((data) => {
    if (!data.errors) {
      const msg = {
        to: email,
        from: 'europauto2021@outlook.com',
        templateId: 'd-d13520409a12422783f1f2bf35983b45',
        dynamicTemplateData: {
          firstName: firstName,
          pickUpLocation: pickUpLocation,
          pickUpDateTime: pickUpDateTime,
          serialNumber: data.serialNumber,
          reservationID: reservationID,
        },
      };
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent');
        })
        .catch((error) => {
          console.error(error);
        });

      res.send({
        status: '200',
        serialNumber: data.serialNumber,
      });
    } else {
      res.send({
        status: '404',
        errors: data.errors,
      });
    }
  });
});

router.post('/create-verification-session', async (req, res) => {
  const stripe = require('stripe')(
    'sk_test_51IsTukJEAzd2OWuLk3FnSrJQnDxX3VuWZRtUIkCCvEBhK20GOantGHhar8kn1eqtYLtZ1qSX0hvVZ2lwyRWkCl5n002JbZmNr2'
  );

  const verificationSession = await stripe.identity.verificationSessions.create({
    type: 'document',
    metadata: {
      user_id: '{{USER_ID}}',
    },
  });

  const clientSecret = verificationSession.client_secret;

  console.log('User verification');
  res.end(JSON.stringify(clientSecret));
});

// All other GET requests not handled before will return our React app
// router.get('*', (req, res) => {
//   // res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
//   res.sendFile(path.join(__dirname + '../client/build/index.html'));
// });

// router.get('/addressdata', (req, res) => {
//   console.log('testje');
//   const str = [
//     {
//       name: 'Codr Kai',
//       msg: 'This is my first tweet!',
//       username: 'codrkai',
//     },
//     {
//       name: 'Samantha Kai',
//       msg: 'React JS is so simple!',
//       username: 'samanthakai',
//     },
//     {
//       name: 'John K',
//       msg: 'Sweep the leg!',
//       username: 'johnk',
//     },
//   ];
//   res.end(JSON.stringify(str));
// });

// router.get('/verification', (req, res) => {
//   console.log('testje');
//   const str = [
//     {
//       name: 'Codr Kai',
//       msg: 'This is my first tweet!',
//       username: 'codrkai',
//     },
//   ];
//   res.end(JSON.stringify(str));
// });

// router.get('/', (req, res) => {
//   console.log('testje');
//   res.end('hi');
// });

// router.post('/addTweet', (req, res) => {
//   console.log(req.body.textvalue);
//   res.end('NA');
// });

module.exports = router;
