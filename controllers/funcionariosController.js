const db = require('../config/db');

// Função para cadastrar funcionário
const cadastrarFuncionario = (req, res) => {
    const { nome, cargo, salario } = req.body;
    const query = 'INSERT INTO funcionarios (nome, cargo, salario) VALUES (?, ?, ?)';
    db.query(query, [nome, cargo, salario], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Erro ao cadastrar funcionário', error: err });
        }
        res.status(201).json({ message: 'Funcionário cadastrado', id: result.insertId });
    });
};

// Função para listar todos os funcionários
const listarFuncionarios = (req, res) => {
    db.query('SELECT * FROM funcionarios', (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erro ao listar funcionários', error: err });
        }
        res.status(200).json(results);
    });
};

// Função para buscar funcionário por ID
const buscarFuncionarioPorId = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM funcionarios WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erro ao buscar funcionário', error: err });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Funcionário não encontrado' });
        }
        res.status(200).json(results[0]);
    });
};

// Função para atualizar funcionário
const atualizarFuncionario = (req, res) => {
    const { id } = req.params;
    const { nome, cargo, salario } = req.body;
    const query = 'UPDATE funcionarios SET nome = ?, cargo = ?, salario = ? WHERE id = ?';
    db.query(query, [nome, cargo, salario, id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Erro ao atualizar funcionário', error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Funcionário não encontrado' });
        }
        res.status(200).json({ message: 'Funcionário atualizado' });
    });
};

// Função para deletar funcionário
const deletarFuncionario = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM funcionarios WHERE id = ?', [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Erro ao remover funcionário', error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Funcionário não encontrado' });
        }
        res.status(200).json({ message: 'Funcionário removido' });
    });
};

module.exports = {
    cadastrarFuncionario,
    listarFuncionarios,
    buscarFuncionarioPorId,
    atualizarFuncionario,
    deletarFuncionario
};
