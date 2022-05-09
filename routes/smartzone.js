const express = require('express')
const router = express.Router()
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


async function fetchJson(url) {
    return await fetch(url)
      .then((response) => response.json())
      .catch((error) => error);
  }

module.exports = router
