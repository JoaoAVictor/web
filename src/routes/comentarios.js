const express = require('express');
const comentarioController = require('../controllers/comentarioController');

const router = express.Router();

router.get('/comentarios', comentarioController.getComentarios);
router.post('/comentarios', comentarioController.criarComentario);
router.get('/comentarios/:id', comentarioController.getComentarioPorId);
router.put('/comentarios/:id', comentarioController.atualizarComentario);
router.delete('/comentarios/:id', comentarioController.excluirComentario);

module.exports = router;
