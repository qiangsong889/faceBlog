const Sequelize = require('sequelize');
const db = require('../')

const usersModel = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primarykey: true,
        autoIncrement: true
    },
    userName: {
        type: Sequelize.STRING,
    },
    displayName: {
        type: Sequelize.STRING
    },
    bio: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.STRING
    },
    school: {
        type: Sequelize.STRING
    }
})

module.exports = usersModel;