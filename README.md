# API de Funcionários

A API de Funcionários é uma solução robusta para gerenciamento de dados de funcionários, desenvolvida com Node.js e Express. Esta API RESTful permite realizar operações CRUD (Create, Read, Update, Delete) completas sobre os registros de funcionários, incluindo informações como nome, cargo e salário. Utilizando MySQL como banco de dados e Swagger para documentação, a API oferece uma interface clara e bem documentada para integração com outros sistemas. Com suporte a CORS e tratamento de erros padronizado, a solução é ideal para empresas que necessitam de um sistema eficiente de gestão de funcionários.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- Swagger (Documentação da API)
- CORS
- dotenv
- Nodemon (Desenvolvimento)

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- MySQL
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/HubMaia/API-Empresa.git
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
DB_HOST=seu_host
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
PORT=3000
```

4. Configure o Banco de Dados:

   a. Crie o arquivo `config/db.js`:

   ```javascript
   const mysql = require("mysql2");
   require("dotenv").config();

   const connection = mysql.createConnection({
     host: process.env.DB_HOST,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_NAME,
   });

   connection.connect((err) => {
     if (err) {
       console.error("Erro ao conectar ao banco de dados:", err);
       return;
     }
     console.log("Conexão com o banco de dados estabelecida");
   });

   module.exports = connection;
   ```

   b. Crie o banco de dados e a tabela no MySQL:

   ```sql
   -- Criar o banco de dados
   CREATE DATABASE nome_do_banco;

   -- Usar o banco de dados
   USE nome_do_banco;

   -- Criar a tabela de funcionários
   CREATE TABLE funcionarios (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nome VARCHAR(100) NOT NULL,
       cargo VARCHAR(100) NOT NULL,
       salario DECIMAL(10,2) NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   );
   ```

5. Inicie o servidor:

```bash
npm start
```

## 📚 Documentação da API

A documentação da API está disponível através do Swagger UI. Após iniciar o servidor, acesse:

```
http://localhost:3000/api-docs
```

## 📁 Estrutura do Projeto

```
├── config/         # Configurações do projeto
├── controllers/    # Controladores da aplicação
├── routes/         # Rotas da API
├── public/         # Arquivos estáticos
├── swagger/        # Documentação Swagger
├── node_modules/   # Dependências do projeto
├── server.js       # Arquivo principal
├── package.json    # Dependências e scripts
├── package-lock.json # Versões exatas das dependências
└── .gitignore      # Arquivos ignorados pelo Git
```

## 🛠️ Scripts Disponíveis

- `npm start`: Inicia o servidor em modo de desenvolvimento com nodemon
- `npm test`: Executa os testes (ainda não implementado)

## 📝 Licença

Este projeto está sob a licença ISC.

## 👥 Autores

- Matheus Maia
- Richard Herrera Gomes
- Daniel Mendonça Martins
- Diego Campolino Schutz
- Matheus de Araujo Vicente

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
