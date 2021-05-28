const express = require('express');
const router = express.Router();

router.get('/reservations', (req, res) => {
  console.log('reservation page');
  const str = 'reservation page';
  res.end(JSON.stringify(str));
});

router.get('/verification', (req, res) => {
  console.log('User verification');
  const str = 'veri page';
  res.end(JSON.stringify(str));
});

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
