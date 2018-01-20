const Users = require('./usersModel')
const Posts = require('./postsModel')
const Comments = require('./commentsModel')
const FriendList = require('./friendListModel')

Posts.belongsTo(Users);
FriendList.belongsTo(Users);
Comments.belongsTo(Users);
Comments.belongsTo(Posts);


Users.sync()
  .then(()=> {
      console.log('connected to table Users')
  })
  .catch((err)=> {
      console.log('Error connecting Users table ===>', err)
  })

FriendList.sync()
  .then(()=> {
      console.log('connected to table FriendList')
  })
  .catch((err)=> {
      console.log('Error connectiong FriendList table')
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