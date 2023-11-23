const Postagem = require('../models/postagemModel');

async function getPostagens(req, res) {
  try {
    const postagens = await Postagem.findAll();
    res.json(postagens);
  } catch (error) {
    console.error('Erro ao obter postagens:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function criarPostagem(req, res) {
  try {
    const { titulo, descricao, post, imagem1, banner } = req.body;

    const postagem = await Postagem.create({ titulo, descricao, post, imagem1, banner });

    res.status(201).json(postagem);
  } catch (error) {
    console.error('Erro ao criar postagem:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function getPostagemPorId(req, res) {
  const { id } = req.params;
  try {
    const postagem = await Postagem.findByPk(id);
    if (!postagem) {
      return res.status(404).json({ mensagem: 'Postagem não encontrada' });
    }
    res.json(postagem);
  } catch (error) {
    console.error('Erro ao obter postagem por ID:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function atualizarPostagem(req, res) {
  const { id } = req.params;
  const { titulo, descricao, post, imagem1, banner } = req.body;

  try {
    const postagem = await Postagem.findByPk(id);
    if (!postagem) {
      return res.status(404).json({ mensagem: 'Postagem não encontrada' });
    }

    await postagem.update({ titulo, descricao, post, imagem1, banner });
    res.json(postagem);
  } catch (error) {
    console.error('Erro ao atualizar postagem:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function excluirPostagem(req, res) {
  const { id } = req.params;

  try {
    const postagem = await Postagem.findByPk(id);
    if (!postagem) {
      return res.status(404).json({ mensagem: 'Postagem não encontrada' });
    }

    await postagem.destroy();
    res.json({ mensagem: 'Postagem excluída com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir postagem:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

module.exports = {
  getPostagens,
  criarPostagem,
  getPostagemPorId,
  atualizarPostagem,
  excluirPostagem,
};
