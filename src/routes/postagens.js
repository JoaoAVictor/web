const express = require('express');
const postagemController = require('../controllers/postagemController');

const router = express.Router();

router.get('/postagens', postagemController.getPostagens);
router.post('/postagens/publicar', postagemController.criarPostagem);
router.get('/postagens/:id', postagemController.getPostagemPorId);
router.put('/postagens/:id', postagemController.atualizarPostagem);
router.delete('/postagens/:id', postagemController.excluirPostagem);

module.exports = router;
