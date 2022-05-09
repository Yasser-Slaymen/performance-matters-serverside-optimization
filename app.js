const express = require('express')
const app = express()
const port = 4000;

// Stel een static map in
app.use(express.static('public'))

// Stel ejs in als template engine
app.set('view engine', 'ejs')
app.set('views', './views')

// Routes
const smartzoneRoute = require('./routes/smartzone')
app.use('/',smartzoneRoute)

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
  });
