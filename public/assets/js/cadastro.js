function limparFormulario() {
    document.getElementById("form_cadastro").reset();
}

function cadastrar() {
    aguardar();

    var formulario = new URLSearchParams(new FormData(document.getElementById("form_cadastro")));
    var nome = formulario.get("nome");
    var email = formulario.get("email");
    var senha = formulario.get("senha");
    var confirmacaoSenha = formulario.get("confirmacao-senha");

    if (nome == "" || email == "" || senha == "" || confirmacaoSenha == "") {
        exibirErro("Preencha todos os campos para prosseguir!");
        finalizarAguardar();
        return false;
    } else if (email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
        exibirErro("Ops, e-mail inválido! Verifique e tente novamente.");
        finalizarAguardar();
        return false;
    } else if (senha != confirmacaoSenha) {
        exibirErro("As senhas inseridas devem ser iguais para prosseguir!");
        finalizarAguardar();
        return false;
    }

    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function (resposta) {
        if (resposta.ok) {
            window.alert("Cadastro realizado com sucesso!");
            window.location = "Login.html";
            limparFormulario();
            finalizarAguardar();
        } else {
            throw("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });

    return false;
}

function exibirErro(mensagem) {
    var divErros = document.getElementById("div_erros_login");
    divErros.innerHTML = `<p style="color: red;">${mensagem}</p>`;
}
