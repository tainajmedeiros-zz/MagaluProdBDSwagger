const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Produto = require('./produto')
const Fornecedor = require('./fornecedor')

const produto = Produto(sequelize, Sequelize.DataTypes)
const fornecedor = Fornecedor(sequelize, Sequelize.DataTypes)

produto.belongsTo(fornecedor)

const db = {
  produto,
  fornecedor,
  sequelize
}

module.exports = db