document.addEventListener('DOMContentLoaded', function () {
    const detalhesBanner = document.getElementById('detalhes-banner');
    const detalhesTitulo = document.getElementById('detalhes-titulo');
    const detalhesConteudo = document.getElementById('detalhes-conteudo');
    const listaComentarios = document.getElementById('lista-comentarios');
    const formComentario = document.getElementById('form-comentario');
    const textoComentario = document.getElementById('texto-comentario');

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id'); 

    function getDetalhesPostagem() {
        fetch(`/api/postagens/${postId}`)
            .then(response => response.json())
            .then(data => {
                detalhesBanner.style.backgroundImage = `url(${data.imagem1})`;
                detalhesTitulo.textContent = data.titulo;
                detalhesConteudo.textContent = data.post;

                getComentarios();
            })
            .catch(error => {
                console.error('Erro ao obter detalhes da postagem:', error);
            });
    }

    function getComentarios() {
        fetch(`/api/comentarios/${postId}`)
            .then(response => response.json())
            .then(data => {
                listaComentarios.innerHTML = '';

                data.forEach(comentario => {
                    const li = document.createElement('li');
                    li.textContent = comentario.texto;
                    listaComentarios.appendChild(li);
                });
            })
            .catch(error => {
                console.error('Erro ao obter comentários:', error);
            });
    }

    formComentario.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const comentarioTexto = textoComentario.value;

        fetch('/api/comentarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                postId: postId,
                texto: comentarioTexto,
            }),
        })
            .then(response => response.json())
            .then(data => {
                getComentarios();

                textoComentario.value = '';
            })
            .catch(error => {
                console.error('Erro ao enviar comentário:', error);
            });
    });

    getDetalhesPostagem();
});
