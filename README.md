<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Magalu Produtos API</h3>

  <p align="center">
    Rest API para endpoints do sistema de Produtos!
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre o Projeto</a>
      <ul>
        <li><a href="#built-with">Rodar com</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Começando</a>
      <ul>
        <li><a href="#installation">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#usage">Uso</a></li>
    <li><a href="#contact">Contato</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o projeto

Essa é uma API para endpoints de acesso a informações do produto. 

[![Imagem do Swagger Completo][swagger-completo]]


O projeto é formado pela seguinte estrutura:
* Acesso aos endpoints para ser usado por uma aplicação frontend.
* Endpoints that will be used to write error logs to a relational database
* The API allows access only with a valid authentication token 

:smile:

### Rodar com

O projeto foi criado usando as tecnologias:
* [Javasdcript]
* [NodeJs]
* [Postgres]


<!-- GETTING STARTED -->
## Começando

Siga as instruções para executar a API.

### Instalando

1. Clone o repositório
   ```sh
   git clone https://github.com/tainajmedeiros/MagaluProdBDSwagger.git
   ```
2. Para atualizar documentação do swagger
   ```sh
   npm swagger
   ```
3. Subindo o servidor
   ```sh
   npm start
   ```

[![Tela com os comandos dos scripts][imagem-script]]


<!-- USAGE EXAMPLES -->
## Usando

Voce tem acesso aos endpoints, produto e fornecedo.

_Produtos Endpoints_
[![Swagger de produto][swagger-endpoint-produto]]

<!-- CONTACT -->
## Contato

Tainá Medeiros - [@taina_medeiros](https://twitter.com/taina_medeiros) - tainajmedeiros@gmail.com

LinkedIn: [/tainamedeiros](https://www.linkedin.com/in/tainamedeiros)

Project Link: [https://github.com/tainajmedeiros/MagaluProdBDSwagger](https://github.com/tainajmedeiros/MagaluProdBDSwagger)



<!-- MARKDOWN LINKS & IMAGES -->
[swagger-completo]: images/swagger-completo.png
[imagem-script]: images/imagem-scripts.png
[swagger-endpoint-produto]: images/swagger-endpoint-produto.png
