document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".servico-card");

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85; // Ajuste para ativar antes do card estar totalmente visível

    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        card.classList.add("show");
      }
    });
  }

  // Adiciona classes "left" ou "right" conforme a posição do card
  cards.forEach((card, index) => {
    if (index < 3) {
      card.classList.add("left"); // Primeiros três vêm da esquerda
    } else {
      card.classList.add("right"); // Últimos três vêm da direita
    }
  });

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Chama ao carregar para ativar os elementos já visíveis
});
