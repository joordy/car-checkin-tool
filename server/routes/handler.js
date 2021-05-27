const express = require('express');
const router = express.Router();

router.get('/checkin', (req, res) => {
  console.log('testje');
  const str = [
    {
      name: 'Codr Kai',
      msg: 'This is my first tweet!',
      username: 'codrkai',
    },
    {
      name: 'Samantha Kai',
      msg: 'React JS is so simple!',
      username: 'samanthakai',
    },
    {
      name: 'John K',
      msg: 'Sweep the leg!',
      username: 'johnk',
    },
  ];
  res.end(JSON.stringify(str));
});

router.post('/addTweet', (req, res) => {
  console.log(req.body.textvalue);
  res.end('NA');
});

module.exports = router;
