document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert('Obrigado por entrar em contato, ' + nome + '!');
        document.getElementById('contact-form').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});