const {body} = require('express-validator')
const createPostValidator = (req, res, next) => {
    body('title','').notEmpty()   
}

exports.createPostValidator = createPostValidator