const emails = ["exemplo1@email.com", "exemplo2@email.com", "exemplo3@email.com"];
const senhas = ["senha123", "senha456", "senha789"];

function selecionarAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
}

document.getElementById('autoComplete').addEventListener('click', function() {
    let email = selecionarAleatorio(emails);
    let senha = selecionarAleatorio(senhas);

    // Modificar o texto dos elementos <p> existentes
    document.getElementById('email').innerText = email;
    document.getElementById('senha').innerText = senha;

    // Agora você pode usar as variáveis email e senha conforme necessário
    console.log(email, senha);
});



   

