 const express = require('express')
 const bodyParser = require('body-parser')
 const app = express()
 const mongoose = require('mongoose')
 const api_routes = require('./routes/api')
 const dotEnv= require('dotenv') 
 const {body} = require('express-validator')


 dotEnv.config();
 mongoose.connect( process.env.MONGO_URI )
  .then(() => console.log('DB Connected'))

  mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
  });

  app.use(bodyParser.json())

 app.get('/',api_routes)
 app.get('/about',api_routes)
 
 app.post('/posts',body('title','title is to short').notEmpty(),api_routes)
 app.get('/posts',api_routes)
 app.get('/posts/:id',api_routes)

 app.listen(process.env.PORT || 8080)
