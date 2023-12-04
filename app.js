 const express = require('express')
 const app = express()
 const mongoose = require('mongoose')
 const api_routes = require('./routes/api')
 const dotEnv= require('dotenv') 
 dotEnv.config();
 mongoose.connect( process.env.MONGO_URI )
  .then(() => console.log('DB Connected'))
   
  mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
  });


 app.get('/',api_routes)
 app.get('/about',api_routes)


 app.listen(process.env.PORT || 8080)