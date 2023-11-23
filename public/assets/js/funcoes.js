document.getElementById('sairBtn').addEventListener('click', function (event) {

    console.log("event listener")
    limparSessao();
});

function validarSessao() {
    aguardar();

    var login = sessionStorage.LOGIN_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    
    var h1Titulo = document.getElementById("h1_titulo");

    if (login != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        h1Titulo.innerHTML = `${login}`;
        
        finalizarAguardar();
    } else {
        window.location = "login.html";
    }
}

function limparSessao() {

    console.log("oi eu entrei aqui")
    sessionStorage.clear();
    window.location = "../login.html";
}



// Carregamento (loading)
function aguardar() {
    exibirElemento("div_aguardar", "flex");
}

function finalizarAguardar(texto) {
    esconderElemento("div_aguardar");
    const divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}



// // Modal
// function mostrarModal() {
//     exibirElemento("div_modal", "flex");
// }

// function fecharModal() {
//     esconderElemento("div_modal");
// }

// // Função auxiliar para exibir um elemento
// function exibirElemento(idElemento, display) {
//     const elemento = document.getElementById(idElemento);
//     if (elemento) {
//         elemento.style.display = display;
//     }
// }

// // Função auxiliar para esconder um elemento
// function esconderElemento(idElemento) {
//     exibirElemento(idElemento, "none");
// })
