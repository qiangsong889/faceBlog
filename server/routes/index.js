const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const postsController = require('../controllers/postsController')
const commentsController = require('../controllers/commentsController')
const searchController = require('../controllers/searchController')
const friendListController = require('../controllers/friendListController')

router.route('/user')
  .get(userController.getUsersInfo)

router.route('/post')
  .get(postsController.getUsersPosts)
  .post(postsController.addPost)

router.route('/comment')
  .post(commentsController.addComment)
  .get(commentsController.getPostComments)

router.route('/targetUser')
  .get(userController.getTargetUserInfo)

router.route('/bio')
  .post(userController.editBio)

router.route('/search')
  .get(searchController.searchUser)

router.route('/friendList')
  .post(friendListController.addFriend)
  .get(friendListController.getFriends)

router.route('/friendRequest')
  .get(friendListController.getRequest)
  .post(friendListController.acceptRequest)


module.exports = router;