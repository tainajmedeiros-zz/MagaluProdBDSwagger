const fornecedor = (sequelize, DataTypes) => {
    const Fornecedor = sequelize.define('Fornecedor', {
      nome: {
        type: DataTypes.STRING,
      }
    }, {
      tableName: 'fornecedor'
    })
  
    return Fornecedor
  }
  
  module.exports = fornecedor