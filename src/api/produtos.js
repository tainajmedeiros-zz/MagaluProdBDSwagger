const express = require("express");
const router = express.Router()
const { produto } = require('../models')
const ProdutoService = require('../services/produtos')
const { body, check, validationResult } = require('express-validator')

const produtoService = new ProdutoService(produto)

router.get('/', async (req, res) => {
  /*
    #swagger.tags = ['Produtos']
    #swagger.description = 'Endpoint parra obter uma lista de produto' 

    #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Produto"},
      description: 'Produto encontrado'
    }
    #swagger.responses[404] = {
      description: 'Produto não encontrado'
    }
    #swagger.responses[400] = {
      description: 'Desculpe, tivemos um problema com a requisição'
    }
  */
  const produtos = await produtoService.get()
  res.status(200).json(produtos)
})

router.post('/', 
  body('nome').not().isEmpty().trim().escape(),
  check('preco')
    .not().isEmpty()
    .matches(/\d/)
    .withMessage('Deve ser um número válido!'),
  async (req, res) => {
    /*
      #swagger.tags = ['Produtos']
      #swagger.description = 'Endpoint para criar um produto'
      #swagger.parameters['novoProduto] = {
        in: 'body',
        description: 'Informações do produto',
        required: true,
        type: 'object',
        schema: { $ref: '#/definitions/NovoProduto'}
      }

      #swager.responses[201] = {
        description: 'Produto criado com sucesso'
      }

      #swagger.responses[400] = {
        description: 'Nome e preço são obrigatórios'
      }
    */
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { nome, preco } = req.body
    try {
      await produtoService.adicionar({ nome, preco })
      res.status(201).send('Produto adicionado com sucesso!')
    } catch(erro) {
      res.status(400).send(erro.message)
    }
})

module.exports = router