const Users = require('../db/models/usersModel')

const searchController={
    searchUser: (req, res)=> {
        Users.findAll({where: {displayName: req.query.displayName}})
             .then(response=> {
                 res.send(response)
             })
             .catch(err=> {console.log('Error searching user searchUser controller', err)})
    }
}

module.exports = searchController