const Users = require('../db/models/usersModel')
const postsController = require('./postsController')
const commentsController = require('./commentsController')


const userController = {
    getUsersInfo: (req, res)=> {
        let query = req.query
        // console.log('inside of userController. this is the req.query', req.query)
        Users.findAll( {where: {userName: query.uid}})
          .then(user=> {
            // console.log('query users table result ===>>>>', user)
            if(user.length){
                // postsController.getUsersPosts(user[0].id,posts=> {
                //     commentsController.getUsersComments(user.id, comments=> {
                //         res.send({user: user, posts: posts, comments: comments})
                //     })
                // })
                res.send(user[0])
            }else{
                console.log('here is the query when you tring to create user', query)
                Users.create({
                    userName: query.uid,
                    displayName: query.displayName
                })
                .then(response=> {
                    // console.log('here is the response if user just been created ==>>', response)
                    Users.findAll( {where: {userName: query.uid}})
                         .then(response=> {
                             res.send(response[0])
                         })
                         .catch(err=> {console.log('Error after creating a user and send it back', err)})
                })
                .catch(err=> {console.log('having problem creating user into table==>>>',err)})
            }


          })
          .catch(err=> {
              console.log('problem query users table err ====>>>', err)
          })
    },
    getTargetUserInfo: (req, res)=>{
        // console.log('getTargetUserInfo, req.query', req.query)
        Users.findAll({
            where: {id: req.query.userId}
        })
        .then(response=> {
            res.send(response)
        })
        .catch(err=> {console.log('Error quering getTargetUserInfo!!!===> ,',err)})
    },
    editBio: (req, res)=> {
        console.log('editBio ',req.body)
        const bio={
            displayName: req.body.displayName,
            bio: req.body.bio,
            location: req.body.location,
            school: req.body.school
        }
        Users.update(bio, {where: {userName: req.body.userName}})
             .then(response=> {
                 res.send()
             })
             .catch(err=> {console.log('Error update bio',err)})
    }
}

module.exports = userController