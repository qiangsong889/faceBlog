const FriendList = require('../db/models/friendListModel')

const friendListController={
    addFriend: (req, res)=> {
        console.log('inside of friendListController, req.body', req.body)
        FriendList.create({
            friendId: req.body.friendId,
            userId: req.body.userId,
            isFriend: 'pending'
        })
        .then(response=> {
            res.send()
        })
        .catch(err => {console.log('Error saving friend request',err)})
    },
    getFriends: (req, res)=>{
        console.log('getFriends here is the req.query ', req.query)
        FriendList.findAll({
            where: {userId: req.query.userId}
        })
        .then(response=> {
            res.send(response)
        })
        .catch(err=> {console.log('Error query friendList tables', err)})
    },
    getRequest: (req, res)=> {
        console.log('recieving getRequest here is the req.query', req.query)
        FriendList.findAll({
            where: {friendId: req.query.friendId, isFriend: req.query.isFriend}
        })
        .then(response=> {
            res.send(response)
        })
        .catch(err=> {console.log('Error getting friend request,', err)})
    }
}

module.exports = friendListController