const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended:false})
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const BaseUrl = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'

// define the home page route 

// Method Get
router.get('/',(req, res) =>{
    fetchJson(BaseUrl)
    .then(function(JsonData) {
        res.render('smartzones', {
            title:'Smart Zones',
            smartzones: JsonData.data
        })
    })
    
})
// Method Post
router.post('/add', urlencodedParser, (req, res) =>{
    const postData = {
        method:'POST',
        body:JSON.stringify(req.body),
        headers:  {'Content-Type': 'application/json'}

    }

    fetchJson(BaseUrl, postData).then(function () {
        response.render('add', {
          title: 'add new post',
        })
      })

})






async function fetchJson(url) {
    return await fetch(url)
      .then((response) => response.json())
      .catch((error) => error);
  }

module.exports = router
