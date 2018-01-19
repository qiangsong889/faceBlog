const Users = require('./usersModel')
const Posts = require('./postsModel')
const Comments = require('./commentsModel')

Posts.belongsTo(Users);
Comments.belongsTo(Users);
Comments.belongsTo(Posts);


Users.sync()
  .then(()=> {
      console.log('connected to table Users')
  })
  .catch((err)=> {
      console.log('Error connecting Users table ===>', err)
  })

Posts.sync()
  .then(()=> {
      console.log('connected to table Posts')
  })
  .catch((err)=> {
      console.log('Error connecting Posts table ===>', err)
  })

Comments.sync()
  .then(()=> {
      console.log('connected to table Comments')
  })
  .catch((err)=> {
      console.log('Error connecting Comments table ===>', err)
  })

  module.exports = {Comments, Posts, Users}