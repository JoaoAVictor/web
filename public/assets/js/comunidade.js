document.addEventListener('DOMContentLoaded', function () {

    function createCard({ id, titulo, descricao, imagem1 }, index) {
        const card = document.createElement('div');
        card.classList.add('carde');
    
        const box = document.createElement('div');
        box.classList.add('box');
    
        // Adicione logs para verificar os URLs
        console.log('Imagem1:', imagem1);
    
        // Verifique se a imagem1 é válida antes de definir o backgroundImage
        if (imagem1) {
            box.style.backgroundPosition = 'center';
            box.style.backgroundImage = `url(${imagem1})`;
            box.style.backgroundRepeat = 'no-repeat';
        }
    
        const content = document.createElement('div');
        content.classList.add('content');
    
        const cardTitle = document.createElement('h3');
        cardTitle.style.color = 'red';
        cardTitle.style.textShadow = '-2px 1px 0px rgb(0, 0, 0)';
        cardTitle.innerText = titulo;
    
        const cardDescription = document.createElement('p');
        cardDescription.style.textShadow = '-2px 1px 0px rgb(0, 0, 0)';
        cardDescription.innerText = descricao;
    
        const cardLink = document.createElement('a');
        cardLink.href = `detalhes.html?id=${id}`;
        cardLink.innerText = 'Saiba Mais!';
    
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

    function getPostagens() {
        fetch('/api/postagens')
            .then(response => response.json())
            .then(data => renderCards(data))
            .catch(error => {
                console.error('Erro ao obter postagens:', error);
            });
    }

    getPostagens();
});
