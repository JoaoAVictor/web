import { dataFromDatabase } from './data';

document.addEventListener('DOMContentLoaded', function () {

    function createCard({ id, title, description, link, imageUrl, comentarios }, index) {
        const card = document.createElement('div');
        card.classList.add('carde');

        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundPosition = 'center';
        box.style.backgroundImage = `url(${imageUrl})`;
        box.style.backgroundRepeat = 'no-repeat';

        const content = document.createElement('div');
        content.classList.add('content');

        const cardTitle = document.createElement('h3');
        cardTitle.style.color = 'red';
        cardTitle.style.textShadow = '-2px 1px 0px rgb(0, 0, 0)';
        cardTitle.innerText = title;

        const cardDescription = document.createElement('p');
        cardDescription.style.textShadow = '-2px 1px 0px rgb(0, 0, 0)';
        cardDescription.innerText = description;

        const cardLink = document.createElement('a');
        cardLink.href = '#'; // Vamos definir um link temporário, pois a página de detalhes ainda não foi criada
        cardLink.innerText = 'Saiba Mais!';
        
        // Adicionamos um ouvinte de clique ao botão "Saiba Mais"
        cardLink.addEventListener('click', function (event) {
            event.preventDefault();
            mostrarDetalhes(id); // Função que redireciona para a página de detalhes
        });

        content.appendChild(cardTitle);
        content.appendChild(cardDescription);
        content.appendChild(cardLink);

        box.appendChild(content);
        card.appendChild(box);

        return card;
    }

    function renderCards(data) {
        const cardContainer = document.querySelector('#comu .caixa1');
        data.forEach((item, index) => {
            const card = createCard(item, index);
            cardContainer.appendChild(card);
        });
    }

    function mostrarDetalhes(publicacaoId) {
        // Redirecionar para a página de detalhes com base no ID da publicação
        window.location.href = `detalhes.html?id=${publicacaoId}`;
    }

    renderCards(dataFromDatabase);
});

