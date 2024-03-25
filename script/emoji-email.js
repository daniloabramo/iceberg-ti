document.getElementById('emailInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
       var email = this.value;
       var emailStatus = document.getElementById('emailStatus');
   
    // Verifica se o email é válido usando uma expressão regular simples
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
       // Email válido
       emailStatus.textContent = '✅';
    } else if (email.length > 0) {
       // Email inválido
       emailStatus.textContent = '❌';
    } else {
       // Campo de email vazio
       emailStatus.textContent = '🕐';
    }
   }
});
   