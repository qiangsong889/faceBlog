const Users = require('../db/models/usersModel')
const postsController = require('./postsController')
const commentsController = require('./commentsController')


const userController = {
    getUsersInfo: (req, res)=> {
        let query = req.query
        console.log('inside of userController. this is the req.query', req.query)
        Users.findAll( {where: {userName: query.uid}})
          .then(user=> {
            console.log('query users table result ===>>>>', user)
            if(user.length){
                postsController.getUsersPosts(user.id,posts=> {
                    commentsController.getUsersComments(user.id, comments=> {
                        res.send({user: user, posts: posts, comments: comments})
                    })
                })
            }else{
                Users.create({
                    userName: query.uid
                })
                .then(response=> {
                    console.log('here is the response if user just been created ==>>', response)
                    res.send({userName: uid, comments: 'user has no info cause just created'})
                })
                .catch(err=> {console.log('having problem creating user into table==>>>',err)})
            }


          })
          .catch(err=> {
              console.log('problem query users table err ====>>>', err)
          })
    }
}

module.exports = userController