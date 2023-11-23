const Comentario = require('../models/comentarioModel');

async function getComentarios(req, res) {
  try {
    const comentarios = await Comentario.findAll();
    res.json(comentarios);
  } catch (error) {
    console.error('Erro ao obter comentarios:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function criarComentario(req, res) {
  try {
    const { titulo, descricao, fk_usuario, fk_postagem } = req.body;
    const comentario = await Comentario.create({ titulo, descricao, fk_usuario, fk_postagem });
    res.status(201).json(comentario);
  } catch (error) {
    console.error('Erro ao criar comentario:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function getComentarioPorId(req, res) {
  const { id } = req.params;
  try {
    const comentario = await Comentario.findByPk(id);
    if (!comentario) {
      return res.status(404).json({ mensagem: 'Comentario não encontrado' });
    }
    res.json(comentario);
  } catch (error) {
    console.error('Erro ao obter comentario por ID:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function atualizarComentario(req, res) {
  const { id } = req.params;
  const { titulo, descricao, fk_usuario, fk_postagem } = req.body;

  try {
    const comentario = await Comentario.findByPk(id);
    if (!comentario) {
      return res.status(404).json({ mensagem: 'Comentario não encontrado' });
    }

    await comentario.update({ titulo, descricao, fk_usuario, fk_postagem });
    res.json(comentario);
  } catch (error) {
    console.error('Erro ao atualizar comentario:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function excluirComentario(req, res) {
  const { id } = req.params;

  try {
    const comentario = await Comentario.findByPk(id);
    if (!comentario) {
      return res.status(404).json({ mensagem: 'Comentario não encontrado' });
    }

    await comentario.destroy();
    res.json({ mensagem: 'Comentario excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir comentario:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

module.exports = {
  getComentarios,
  criarComentario,
  getComentarioPorId,
  atualizarComentario,
  excluirComentario,
};
