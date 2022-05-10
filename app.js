const express = require('express')
const app = express()
const port = 4000;
const bodyParser = require('body-parser')
const compression = require('compression')


// Stel een static map in
app.use(express.static('public'))
app.use('/assets', express.static('assets'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression())

// Stel ejs in als template engine
app.set('view engine', 'ejs')
app.set('views', './views')

// Routes
const smartzoneRoute = require('./routes/smartzone')
const addRoute = require('./routes/add')
const deleteRoute = require('./routes/delete')
const editRoute = require('./routes/edit')

app.use('/',smartzoneRoute)
app.use('/',addRoute)
app.use('/',deleteRoute)
app.use('/',editRoute)

// cache headers
app.use( function (req, res, next) {
  // only cache GET requests
  if(req.method =='GET') {
    res.set('Cache-control', 'public, max-age=500')
  } else{
  // for the other requests set strict nnpm run o caching parameters
    res.set('Cache-control', `no-store`)
  }
  next()
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
  });
