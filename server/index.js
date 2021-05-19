const express = require('express');
const app = express();
const path = require('path');
const router = require('./router/routes');
const hbs = require('./controller/hbsSetup');
const port = process.env.PORT || 3000;

app
  .engine('.hbs', hbs.engine)
  .set('view engine', '.hbs')
  .set('views', path.join(__dirname, './views'))
  .use(
    express.urlencoded({
      extended: true,
    })
  )
  .use(express.json())
  .use(express.static('public'))
  .use(router)
  .use((request, response, next) => {
    if (process.env.NODE_ENV != 'development' && !request.secure) {
      return response.redirect('https://' + request.headers.host + request.url);
    }
    next();
  });

app.listen(port, () => {
  console.log(`App can be opened on http://localhost:${port}`);
});
