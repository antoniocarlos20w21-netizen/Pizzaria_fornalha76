// script.js

// Scroll suave para navegação
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Alerta de boas-vindas ao entrar no site (opcional)
window.addEventListener('load', () => {
  console.log('Bem-vindo à Pizzaria Fornalha 76!');
  // alert('🔥 Bem-vindo à Pizzaria Fornalha 76! Aproveite nossas promoções!');
});

// Futuras funcionalidades podem ser adicionadas aqui
// Ex: popup de promoção, carrinho, integração com sistema de pedidos