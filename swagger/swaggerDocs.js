module.exports = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Funcionários',
            version: '1.0.0',
            description: 'Documentação da API para gerenciamento de funcionários',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor local'
            }
        ]
    },
    apis: ['./routes/funcionarios.js'], // Aponta para o arquivo de rotas
};
