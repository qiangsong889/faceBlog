const Comments = require('../db/models/commentsModel')

const commentsController = {
    getPostComments: (req, res)=>{
        // console.log('inside of getPostComments function here is the req.query', req.query)
        Comments.findAll({
            where: {postId: req.query.postId}
        })
        .then(response=> {
            res.send(response)
        })
        .catch(err=> {
            console.log('Error searching post comments, ',err)
        })
    },
    getUsersComments: (id, cb)=> {

        Comments.findAll({where: {userId: id}})
          .then(comments => {
            //   console.log('here is the comments of current userid and user',id, comments)
              cb(comments)
          })
          .catch(err=> {
              console.log('Error query table Comments with userID', id, 'Error==>>',err)
          })
    },
    addComment: (req, res) => {
        // console.log('inside of addComment function here is the req.body', req.body)
        Comments.create({
            comments: req.body.comments,
            userId: req.body.userId,
            postId: req.body.postId
        })
        .then(response=> {
            // console.log('i think the comment is saved to comments table')
            res.send()
        })
        .catch(err=> {
            console.log('Error having problem saving comments!', err)
        })
    }
}

module.exports = commentsController