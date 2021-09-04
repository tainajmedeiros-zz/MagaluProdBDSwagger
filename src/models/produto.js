const produto = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
      nome: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      preco: {
        type: DataTypes.DOUBLE
      },
    }, {
      tableName: 'produto'
    })
  
    return Produto
  }
  
  module.exports = produto