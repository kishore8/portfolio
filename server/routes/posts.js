const express= require('express');
const router = express.Router();
const Post = require('../models/post');



//ROUTES

router.get('/',(req,res)=>{
    const posts = Post.find().then((data) =>{
        res.json(data);
    });
    
});

router.post('/',(req,res)=>{
    const post = new Post({
        title:req.body.title,
        description:req.body.description,
    });
    
    post.save().then(data =>{
        res.status(200);
        res.json(data);
    }).catch(err =>{
        res.json({message: err});
    })
});

module.exports = router;