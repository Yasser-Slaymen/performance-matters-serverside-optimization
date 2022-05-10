const postcss = require('postcss')
const cssnano = require('cssnano')
const autoperfixer = require('autoprefixer')
const fs = require('fs')

// alle Css
fs.readFile('./pablic/css/smart.css', async (err, data) => {
    const output = await postcss([cssnano, autoperfixer]).process(data)
    const minifeildCss = output.css;

    fs.writeFile('./public/css/style.mini.css', minifeildCss, err =>{
        if(err){
            console.log(err)
        }
    })


})


