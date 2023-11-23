document.getElementById('form_login').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    document.getElementById('div_aguardar').style.display = 'block';

    const dados = {
        email: email,
        senha: senha
    };

    fetch('/api/usuarios/autenticar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
        if (data.erros) {
            document.getElementById('div_erros_login').innerHTML = data.erros.join('<br>');
        } else {


            sessionStorage.setItem('EMAIL_USUARIO', data.email);
            sessionStorage.setItem('NOME_USUARIO', data.nome);
            sessionStorage.setItem('ID_USUARIO', data.id);

            setTimeout(function () {
                window.location.href = '/dashboard';
            }, 1500);
        }
    })
    .catch(error => {
        document.getElementById('div_aguardar').style.display = 'none';

        console.error('Erro na solicitação:', error);
    })
    .finally(function () {
        finalizarAguardar();
    });

});

function finalizarAguardar() {
    document.getElementById('div_aguardar').style.display = 'none';
}
