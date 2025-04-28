const express = require('express');
const router = express.Router();
const funcionariosController = require('../controllers/funcionariosController');

/**
 * @swagger
 * /funcionarios:
 *   post:
 *     summary: Cadastrar um novo funcionário
 *     tags: [Funcionários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               cargo:
 *                 type: string
 *               salario:
 *                 type: number
 *     responses:
 *       201:
 *         description: Funcionário cadastrado com sucesso
 */
router.post('/', funcionariosController.cadastrarFuncionario);

/**
 * @swagger
 * /funcionarios:
 *   get:
 *     summary: Listar todos os funcionários
 *     tags: [Funcionários]
 *     responses:
 *       200:
 *         description: Lista de funcionários retornada com sucesso
 */
router.get('/', funcionariosController.listarFuncionarios);

/**
 * @swagger
 * /funcionarios/{id}:
 *   get:
 *     summary: Buscar um funcionário pelo ID
 *     tags: [Funcionários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Funcionário encontrado
 *       404:
 *         description: Funcionário não encontrado
 */
router.get('/:id', funcionariosController.buscarFuncionarioPorId);

/**
 * @swagger
 * /funcionarios/{id}:
 *   put:
 *     summary: Atualizar um funcionário
 *     tags: [Funcionários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               cargo:
 *                 type: string
 *               salario:
 *                 type: number
 *     responses:
 *       200:
 *         description: Funcionário atualizado
 *       404:
 *         description: Funcionário não encontrado
 */
router.put('/:id', funcionariosController.atualizarFuncionario);

/**
 * @swagger
 * /funcionarios/{id}:
 *   delete:
 *     summary: Deletar um funcionário
 *     tags: [Funcionários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Funcionário deletado
 *       404:
 *         description: Funcionário não encontrado
 */
router.delete('/:id', funcionariosController.deletarFuncionario);

module.exports = router;
