// app.js
const express = require('express');
const usuarioRoutes = require('./src/routes/usuarios');
const postagemRoutes = require('./src/routes/postagens');
const comentarioRoutes = require('./src/routes/comentarios');
const sequelize = require('./src/database/connection.js');

const path = require('path'); 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/comunidade', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'comunidade.html'));
});

app.get('/detalhes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'detalhes.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.use('/api', usuarioRoutes);
app.use('/api', postagemRoutes);
app.use('/api', comentarioRoutes);

// Sincronizar os modelos com o banco de dados
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
