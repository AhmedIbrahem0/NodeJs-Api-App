const postModel = require('../models/post')
const createPost = (req, res) => {

    const post = new postModel(req.body)
    post.save().then((result)=>{
        res.status(200).json({
            post: result
        });
    });

}

const getPosts = (req , res)=>{
    postModel.find().exec().then((result)=>{
        res.status(200).json({
            posts: result
        });
    })
}

const getPost =(req ,res)=>{
  postModel.findById(req.params.id).exec().then((result)=>{
      res.status(200).json({
          post: result
      });
  }).catch((err)=>{
      res.status(500).json({
          error: err
      });
  })
}
module.exports = {
    createPost,
    getPosts,
    getPost
}