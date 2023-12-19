const mongoose = require('mongoose')

const postShema = new mongoose.Schema({
    title:{
        type:String,
        required:"Title is required",
        minLength:3,
        maxLength:150
    },
    body:{
        type: String,
        required:"Body is required",
        minLength:3,
        maxLength:2000
    }
})

module.exports = mongoose.model('Post',postShema)