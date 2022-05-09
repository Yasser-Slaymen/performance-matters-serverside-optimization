const postcss = require('postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const fs = require('fs')

// const cssFile = __dirname + '/../public/style.css'

const cssFile = __dirname + './public/css/smart.css'
const minCssFile = __dirname + './public/css/smart.min.css'

fs.readFile(cssFile, 'utf-8', (err, data) => {
  console.log('Before:')
  // console.log(data)

  postcss([cssnano, autoprefixer])
    .process(data)
    .then((data) => {
      // console.log('\r\nAfter:')
      console.log(data.css)

      // Wegschrijven naar het bestand
      fs.writeFile(minCssFile, data.css, (err) => {
        if (err) console.log(err)
        console.log('Successfully written minified css to ' + minCssFile + '.')
      })
    })
})
