const express = require('express')
const app = express()
const port = 4000;
const bodyParser = require('body-parser')


// Stel een static map in
app.use(express.static('public'))
app.use('/assets', express.static('assets'))
app.use(bodyParser.urlencoded({ extended: true }));

// Stel ejs in als template engine
app.set('view engine', 'ejs')
app.set('views', './views')

// Routes
const smartzoneRoute = require('./routes/smartzone')
const addRoute = require('./routes/add')

app.use('/',smartzoneRoute)
app.use('/',addRoute)


app.listen(port, () => {
    console.log(`app listening on port ${port}`);
  });
