// controllers/usuarioController.js
const Usuario = require('../models/usuarioModel');

async function getUsuarios(req, res) {
    try {
        const usuarios = await Usuario.findAll();
        console.log('Usuários encontrados:', usuarios);
        res.json(usuarios);
    } catch (error) {
        console.error('Erro ao obter usuários:', error);
        res.status(500).send('Erro interno do servidor');
    }
}

async function autenticarUsuario(req, res) {
    const { email, senha } = req.body;
    console.log("Emailbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb:", email);
    console.log("Senha:", senha);
    try {
      const usuario = await Usuario.findOne({ where: { email, senha } });
  
      if (usuario) {
        res.json({
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
        });
      } else {
        res.status(401).send('Credenciais inválidas');
      }
    } catch (error) {
      console.error(error);
      res.status(401).send('Erro de autenticação');
    }
}

async function criarUsuario(req, res) {
  try {
    const { nome, email, senha } = req.body;
    const usuario = await Usuario.create({ nome, email, senha });
    res.status(201).json(usuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function getUsuarioPorId(req, res) {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    console.error('Erro ao obter usuário por ID:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function atualizarUsuario(req, res) {
  const { id } = req.params;
  const { nome, email, senha } = req.body;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    await usuario.update({ nome, email, senha });
    res.json(usuario);
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function excluirUsuario(req, res) {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    await usuario.destroy();
    res.json({ mensagem: 'Usuário excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

module.exports = {
  getUsuarios,
  criarUsuario,
  getUsuarioPorId,
  atualizarUsuario,
  excluirUsuario,
  autenticarUsuario,
};
