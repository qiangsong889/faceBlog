const Posts = require('../db/models/postsModel')
const commentsController = require('./commentsController')

const postsController = {
    getUsersPosts: (id, cb)=> {
      Posts.findAll({where:{userId: id}})
        .then(posts=> {
            // console.log('query Posts table, result====>>>', posts)

                cb(posts);

        })
        .catch(err=> {
            console.log('Error query Posts table ===>>>', err)
        })
    },
    addPost: (req, res) => {
        // console.log('inside of addPosts function, here is the req.body', req.body)
        Posts.create({
            userId: req.body.userId,
            img: req.body.img,
            post: req.body.post
        })
           .then(result=> {
            res.send();
           })
           .catch(err=> {console.log('Error in addPost function', err)})

        // Posts.create({

        // })
    }
}

module.exports = postsController