document.getElementById('form_cadastro').addEventListener('submit', function (event) {
    event.preventDefault();

    var formulario = new FormData(document.getElementById("form_cadastro"));
    var nome = formulario.get("nome");
    var email = formulario.get("email");
    var senha = formulario.get("senha");
    var confirmacaoSenha = formulario.get("confirmacao-senha");

    document.getElementById('div_aguardar').style.display = 'block';

    if (nome == "" || email == "" || senha == "" || confirmacaoSenha == "") {
        exibirErro("Preencha todos os campos para prosseguir!");
        return false;
    } else if (email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
        exibirErro("Ops, e-mail inválido! Verifique e tente novamente.");
        return false;
    } else if (senha != confirmacaoSenha) {
        exibirErro("As senhas inseridas devem ser iguais para prosseguir!");
        return false;
    }

    const dados = {
        nome: nome,
        email: email,
        senha: senha,
    };

    fetch("api/usuarios/cadastrar", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
        if (data.erros) {
            document.getElementById('div_erros_cadastro').innerHTML = data.erros.join('<br>');
        } else {
            window.alert("Cadastro realizado com sucesso!");
            setTimeout(function () {
                window.location.href = '/login';
            }, 1300);
        }
    })
    .catch(function (erro) {
        console.log(`#ERRO: ${erro.message}`);
    })
    .finally(function () {
        finalizarAguardar();
    });

    return false;
});

function exibirErro(mensagem) {
    var divErros = document.getElementById("div_erros_cadastro");
    divErros.innerHTML = `<p style="color: red;">${mensagem}</p>`;
}

function finalizarAguardar() {
    document.getElementById('div_aguardar').style.display = 'none';
}

function limparFormulario(formId) {
    document.getElementById(formId).reset();
}
