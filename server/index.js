const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const app = express();
const PORT = 5000; // backend routing port

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routesHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
