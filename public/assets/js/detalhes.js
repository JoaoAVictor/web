import { dataFromDatabase } from './data';
import { obterIdDaUrl } from './data.js';

document.addEventListener('DOMContentLoaded', function () {

    function obterIdDaUrl() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get('id');
    }

    const publicacaoId = obterIdDaUrl();
    const detalhesContainer = document.querySelector('.detalhes-container');
    const tituloElement = document.getElementById('detalhes-titulo');
    const conteudoElement = document.getElementById('detalhes-conteudo');
    const comentariosContainer = document.getElementById('lista-comentarios');
    const formComentario = document.getElementById('form-comentario');
    const bannerElement = document.getElementById('detalhes-banner'); // Adicione esta linha

    // Simulação de detalhes (substitua por consulta real ao banco de dados)
    const detalhes = dataFromDatabase.find(publicacao => publicacao.id === publicacaoId);

    if (detalhes) {
        tituloElement.textContent = detalhes.title;
        conteudoElement.innerHTML = detalhes.description;

        // Adicione o banner
        bannerElement.style.backgroundImage = `url(${detalhes.imageUrl})`;

        // Simulação de comentários (substitua por consulta real ao banco de dados)
        const comentarios = [
            { autor: 'Autor 1', texto: 'Comentário 1' },
            { autor: 'Autor 2', texto: 'Comentário 2' },
        ];

        renderizarComentarios(comentarios);

        formComentario.addEventListener('submit', function (event) {
            event.preventDefault();
            const textoComentario = document.getElementById('texto-comentario').value;

            // Simulação de publicação de comentário (substitua por lógica real)
            const novoComentario = { autor: 'Usuário Atual', texto: textoComentario };
            comentarios.push(novoComentario);

            renderizarComentarios(comentarios);

            // Limpar o campo de comentário após a publicação
            document.getElementById('texto-comentario').value = '';
        });
    } else {
        console.error('Publicação não encontrada.');
        detalhesContainer.innerHTML = '<p>Publicação não encontrada.</p>';
    }

    function renderizarComentarios(comentarios) {
        comentariosContainer.innerHTML = '';
        comentarios.forEach(comentario => {
            const itemComentario = document.createElement('li');
            itemComentario.innerHTML = `<b>${comentario.autor}:</b> ${comentario.texto}`;
            comentariosContainer.appendChild(itemComentario);
        });
    }
});
