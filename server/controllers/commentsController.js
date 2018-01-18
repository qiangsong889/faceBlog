const Comments = require('../db/models/commentsModel')

const commentsController = {
    getPostComments: (posts, cb)=>{
        if(!posts.length){
            cb([]);
        }else{
            Comments.findAll({where:{postId: posts[0].id}})
              .then(comments=> {
                  cb(comments)
              })
              .catch(err=> {console.log('err query comments table ==>>>>',err)})
        }
    },
    getUsersComments: (id, cb)=> {
        Comments.findAll({where: {userId: id}})
          .then(comments => {
              console.log('here is the comments of current user', comments)
              cb(comments)
          })
          .catch(err=> {
              console.log('Error query table Comments with userID', id, 'Error==>>',err)
          })
    }
}

module.exports = commentsController