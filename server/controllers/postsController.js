const Posts = require('../db/models/postsModel')
const commentsController = require('./commentsController')

const postsController = {
    getUsersPosts: (req, res)=> {
      Posts.findAll({where:{userId: req.query.userId}})
        .then(posts=> {
            // console.log('query Posts table, result====>>>', posts)

                res.send(posts)

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