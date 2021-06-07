const cors = require('cors');

const corsOptions = {
  // origin: 'https://europcar.netlify.app',
  origin: 'http://localhost:3000',
  optionSuccessStatus: 200,
};

module.exports = cors(corsOptions);
