const db = require('../')
const Sequelize = require('sequelize')

const friendListModel= db.define('friendList', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    friendId: {
        type: Sequelize.INTEGER
    },
    isFriend: {
        type: Sequelize.STRING
    }   
})

module.exports = friendListModel;

