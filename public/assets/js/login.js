function limparFormulario() {
    document.getElementById("form_login").reset();
}

function validarEmail(email) {
    return email.includes("@") && email.includes(".com");
}

function aguardar() {
    document.getElementById("div_aguardar").style.display = "block";
}

function finalizarAguardar() {
    document.getElementById("div_aguardar").style.display = "none";
}

function mostrarErro(mensagem) {
    document.getElementById("div_erros_login").innerText = mensagem;
}

function entrar() {
    aguardar();

    var formulario = new FormData(document.getElementById("form_login"));
    var email = formulario.get("email");
    var senha = formulario.get("senha");

    console.log("Email função entrar:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", email);
    console.log("Senha:", senha);

    if (email === "" || senha === "") {
        mostrarErro("Preencha todos os campos para prosseguir!");
        finalizarAguardar();
        return;
    }

    if (!validarEmail(email)) {
        mostrarErro("Ops, e-mail inválido! Verifique e tente novamente.");
        finalizarAguardar();
        return;
    }

    fetch("usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;

                setTimeout(function () {
                    window.location = "./dashboard.html";
                }, 1000);
            });
        } else {
            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar();
                mostrarErro("Houve um erro ao tentar realizar o login!");
            });
        }
    }).catch(function (erro) {
        console.log(erro);
        finalizarAguardar();
        mostrarErro("Erro de conexão. Tente novamente mais tarde.");
    });
}
