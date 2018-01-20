const FriendList = require('../db/models/friendListModel')

const friendListController={
    addFriend: (req, res)=> {
        console.log('inside of friendListController, req.body', req.body)

        FriendList.findAll({
            where:{userId : req.body.userId, friendId: req.body.friendId, isFriend: 'pending'}
        })
        .then(response=> {
            if(response.length){
                console.log('request is already in the database', response)
                res.send();
                // FriendList.update({isFriend:'p'},{where:{userId: req.body.userId, friendId: req.body.friendId}})
                //            .then(result=>{
                //                console.log('successfully saved to database', result)
                //            })
                //            .catch(err=> {console.log('Error finding friend request', err)})
            }else{
                FriendList.create({
                    friendId: req.body.friendId,
                    userId: req.body.userId,
                    isFriend: 'pending'
                })
                .then(response=> {
                    res.send()
                })
                .catch(err => {console.log('Error saving friend request',err)})

            }
        })

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
    },
    acceptRequest: (req, res)=> {
        console.log('accept request is running here is the req.body', req.body)
        FriendList.findAll({where:{}}) // find userId
                  .then(response1=> {
                        FriendList.update({isFriend: 'yes'},{
                            where:{userId:[req.body.userId, req.body.friendId]}
                        })
                                 .then(response2=> {
                                     console.log('updated the isfriend', response2)
                                     res.send()
                                 })
                                 .catch(err=> {console.log('Error updating isfriend', err)})
                        // res.send()
                   })
                  .catch(err=> {console.log('Err',err)})
    }
}

module.exports = friendListController