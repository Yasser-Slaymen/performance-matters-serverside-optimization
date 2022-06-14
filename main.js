require('dotenv').config()
const express = require('express')
const compression = require('compression')
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(compression())

// Stel caching headers in
app.use(function (req, res, next) {
  if (req.method == 'GET') {
    res.set('Cache-control', 'public, max-age=300')
  } else {
    res.set('Cache-control', `no-store`)
  }
  next()
})

// Stel een static map in
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', function (req, res) {
  // res.send('Hello world!')
  res.render('index', {
    pageTitle: 'Performance Optimalisatie',
  })
})

//  de server aan
app.set('port', process.env.PORT || 8000)
const server = app.listen(app.get('port'), function () {
  console.log(`Application started on port: ${app.get('port')}`)
})
