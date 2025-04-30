# API de Funcionários

Uma API RESTful para gerenciamento de funcionários, desenvolvida com Node.js e Express.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- Swagger (Documentação da API)
- CORS
- dotenv

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- MySQL
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone [URL_DO_REPOSITÓRIO]
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

4. Inicie o servidor:

```bash
node server.js
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
├── server.js       # Arquivo principal
└── package.json    # Dependências e scripts
```

## 🛠️ Scripts Disponíveis

- `node server.js`: Inicia o servidor

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
