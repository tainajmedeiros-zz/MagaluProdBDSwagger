const swaggerAutogen = require('swagger-autogen')()

const outputFile = './src/swagger_output.json';
const endpointFiles = ['./src/app.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "Magalu Produtos API",
        description: "Projeto desenvolvido para ensinar swagger"
    },
    host: "localhost:3001",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        { 
            "name": "Produto",
            "description": "Endpoints relacionados ao recuso de produto"
        }
    ],
    definitions: {
        Produto: {
            id: 1,
            nome: 'Dell',
            preco: 12345,
            updated_at: '2021-12-12 03:03:00',
            created_at: '2021-12-12 03:03:00'
        },
        NovoProduto: {
            $nome: 'Dell',
            $preco: 12345
        }
    }
}

swaggerAutogen(outputFile, endpointFiles, doc)