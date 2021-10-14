const router = require("express").Router();
const User = require("../models/User");
const Blog = require("../models/Blogs")


// CREATE BLOG POST
router.post("/", async (req, res) => {
    const newPost = new Blog(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch(err) {
        res.status(500).json(err)
    }
  });
  

// UPDATE BLOG POST
router.put("/:id", async (req, res) => {
    try {
        const post = await Blog.findById(req.params.id);

        if(post.username === req.body.username) {
            try {
                const updatedPost = await Blog.findByIdAndUpdate(req.params.id, 
                    {
                     $set: req.body,
                    },
                    { new: true }
                    );
                    res.status(200).json(updatedPost)
            } catch(err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can only update your post")
        }
        
    } catch(err) {
        res.status(500).json(err)
    }
});

// DELETE BLOG POST

router.delete("/:id", async (req, res) => {
    try {
        const post = await Blog.findById(req.params.id);

        if(post.username === req.body.username) {
            try {
                await post.delete()
                res.status(200).json("Blog post deleted")
            } catch(err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can only update your post")
        }
        
    } catch(err) {
        res.status(500).json(err)
    }
});


// GET BLOG POST
router.get("/:id", async (req, res) => {
    try {
        const post = await Blog.findById(req.params.id);
        res.status(200).json(post);
    } catch(err) {
        res.status(500).json(err)
    }
});

// GET ALL BLOG POSTS
router.get("/", async (req, res) => {
    const username = req.query.user;
    try {
        let posts;
        if(username){
            posts = await Blog.find({username})
        } else {
            posts = await Blog.find();
        }
        res.status(200).json(posts)
    } catch(err) {
        res.status(500).json(err)
    }
});


module.exports = router