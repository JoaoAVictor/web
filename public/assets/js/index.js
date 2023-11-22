function scrollWheelHandler(event) {
    if (event.deltaY < 0) {
        event.target.scrollBy(300, 0);
    } else {
        event.target.scrollBy(-300, 0);
    }
}

function autoScrollItems() {
    let count = 0;
    setInterval(function () {
        count += 400;
        if (count > 8000) count = 0;
        document.querySelector("#items").scrollTo(count, 0);
        console.log('moveu');
    }, 1500);
}

function fetchUserData() {
    fetch("/usuarios/contagem")
        .then(resposta => resposta.json())
        .then(json => {
            console.log(json);
            div_total.innerHTML = `<h1>Existem <b style="color: #ff0000">${json[0].qtd}</b> aventureiros</h1>`;
        })
        .catch(erro => {
            console.log(erro);
        });
}

// Event Listeners
// document.querySelector("#items").addEventListener("wheel", scrollWheelHandler);

// Chamada de funções
autoScrollItems();
fetchUserData();