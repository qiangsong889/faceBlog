const Sequelize = require('sequelize')
const db = require('../')

const postsModel = db.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },  
    post: {
        type: Sequelize.STRING 
    },
    img: {
        type: Sequelize.STRING
    }
})

module.exports = postsModel;