const Posts = require('../db/models/postsModel')
const commentsController = require('./commentsController')

const postsController = {
    getUsersPosts: (id, cb)=> {
      Posts.findAll({where:{userId: id}})
        .then(posts=> {
            console.log('query Posts table, result====>>>', posts)
            commentsController.getPostComments(posts, comments=> {
                cb({posts: posts, comments: comments})
            })
        })
        .catch(err=> {
            console.log('Error query Posts table ===>>>', err)
        })
    }
}

module.exports = postsController