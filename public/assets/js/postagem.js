document.getElementById('form_postagem').addEventListener('submit', async function (event) {

    event.preventDefault(); 
  
    var titulo = document.getElementById('titulo').value;
    var descricao = document.getElementById('descricao').value;
    var post = document.getElementById('post').value;
    var imagem1 = document.getElementById('imagem1').value;
    var banner = document.getElementById('banner').value;
  
    const dados = {
      titulo: titulo,
      descricao: descricao,
      post: post,
      imagem1: imagem1,
      banner: banner,
    };
  
    fetch('/api/postagens/publicar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
      .then(response => response.json())
      .then(data => {
        if (data.erros) {
          throw new Error('Erro ao enviar postagem.');
        } else {
          console.log('Postagem enviada com sucesso:', data);
          limparFormulario();
        }
      })
      .catch(error => {
        console.error('Erro na solicitação:', error);
      });
  });
  
  function limparFormulario() {
    document.getElementById('titulo').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('post').value = '';
    document.getElementById('imagem1').value = '';
    document.getElementById('banner').value = '';
  }
  