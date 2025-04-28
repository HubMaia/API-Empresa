const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const routes = require('./routes/funcionarios');
const swaggerDocs = require('./swagger/swaggerDocs');

// Configuração do banco de dados
const db = require('./config/db');

const app = express();
const port = 3000;

// Middleware para permitir CORS e interpretar JSON
app.use(cors());
app.use(express.json());

// Configuração do Swagger
const specs = swaggerJsdoc(swaggerDocs);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(specs);
});

// Usar as rotas
app.use('/funcionarios', routes);

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
