 const express = require('express')
 const router = express.Router()
 const api_controller = require('../controllers/ApiController')

 // @route GET api

 router.get('/',api_controller.getHomeUrl)
 router.get('/about',api_controller.getAboutUrl)

 module.exports = router