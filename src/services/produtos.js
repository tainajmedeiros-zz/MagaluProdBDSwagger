class ProdutoService {
    constructor (ProdutoModel) {
      this.produto = ProdutoModel
    }
  
    async get () {
      const produtos = await this.produto.findAll()
      return produtos
    }
  
    async adicionar (produtoDTO) {
      // verifica se já existe produto com o mesmo nome
      const produto = await this.produto.findOne({
        where: {
          nome: produtoDTO.nome
        }
      })
      if (produto != null) {
        throw new Error('Já existe um produto cadastrado com esse nome!')
      }
      try {
        await this.produto.create(produtoDTO)
      } catch (erro) {
        console.erro(erro.message)
        throw erro
      }
    }
  }
  
  module.exports = ProdutoService
  