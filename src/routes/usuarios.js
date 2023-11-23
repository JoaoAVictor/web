const express = require('express');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router();

router.get('/usuarios', usuarioController.getUsuarios);
router.post('/usuarios/cadastrar', usuarioController.cadastrarUsuario);
router.post('/usuarios/autenticar', usuarioController.autenticarUsuario);
router.get('/usuarios/:id', usuarioController.getUsuarioPorId);
router.put('/usuarios/:id', usuarioController.atualizarUsuario);
router.delete('/usuarios/:id', usuarioController.excluirUsuario);

module.exports = router;
