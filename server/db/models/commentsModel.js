const Sequelize = require('sequelize');
const db = require('../');

const commentsModel = db.define('comments', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
  comments: {
    type: Sequelize.STRING
  }
});

module.exports = commentsModel;