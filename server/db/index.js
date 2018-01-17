const Sequelize = require('sequelize')

const db = new Sequelize('faceBlog','root', '', {
    dialect: 'mysql',
    host: "localhost",
    port: 3306,
})

db.authenticate()

  .then(() => {
    console.log('Connected to database: faceBlog');
  })
  .catch((err) => {
    console.log('Error connecting to database: faceBlog - ', err);
  })

module.exports = db;