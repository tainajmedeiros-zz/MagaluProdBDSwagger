const Sequelize = require('sequelize');
const configDatabase = require('./database')

const sequelize = new Sequelize(configDatabase)

module.exports = sequelize