const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const postsController = require('../controllers/postsController')
const commentsController = require('../controllers/commentsController')
const searchController = require('../controllers/searchController')

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

module.exports = router;