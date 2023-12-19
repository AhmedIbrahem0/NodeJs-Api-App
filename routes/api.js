 const express = require('express')
 const router = express.Router()
 const api_controller = require('../controllers/ApiController')
 const post_controller = require('../controllers/PostController')

 // @route GET api

 router.get('/',api_controller.getHomeUrl)
 router.get('/about',api_controller.getAboutUrl)
 router.get('/posts',post_controller.getPosts)
 router.get('/posts/:id',post_controller.getPost)

 // @route Post api

router.post('/posts',post_controller.createPost)

 module.exports = router