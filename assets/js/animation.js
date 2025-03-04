document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".servico-card, .servico-item");

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;
    const triggerTop = window.innerHeight * 0.15; // Para sumir ao sair da tela

    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      const cardBottom = card.getBoundingClientRect().bottom;

      if (cardTop < triggerBottom && cardBottom > triggerTop) {
        card.classList.add("show");
      } else {
        card.classList.remove("show");
      }
    });
  }

  // Adiciona classes "left" ou "right" conforme a posição do card
  cards.forEach((card, index) => {
    if (index % 2 === 0) {
      card.classList.add("left"); // Elementos pares vêm da esquerda
    } else {
      card.classList.add("right"); // Elementos ímpares vêm da direita
    }
  });

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Chama ao carregar para ativar os elementos já visíveis
});

// animação equipe
document.addEventListener("DOMContentLoaded", function () {
  const equipeItems = document.querySelectorAll(".equipe-item");

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;
    const triggerTop = window.innerHeight * 0.15; // Para sumir ao sair da tela

    equipeItems.forEach((item, index) => {
      const itemTop = item.getBoundingClientRect().top;
      const itemBottom = item.getBoundingClientRect().bottom;

      if (itemTop < triggerBottom && itemBottom > triggerTop) {
        item.classList.add("show");
        item.style.transitionDelay = `${index * 0.3}s`; // Efeito de escada
      } else {
        item.classList.remove("show");
        item.style.transitionDelay = "0s"; // Remove atraso quando some
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Chama ao carregar para ativar os elementos já visíveis
});

// depoimentos

document.addEventListener("DOMContentLoaded", function () {
  const reviewCircles = document.querySelectorAll(".review-circle");

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;
    const triggerTop = window.innerHeight * 0.15;

    reviewCircles.forEach((circle) => {
      const circleTop = circle.getBoundingClientRect().top;
      const circleBottom = circle.getBoundingClientRect().bottom;

      if (circleTop < triggerBottom && circleBottom > triggerTop) {
        circle.classList.add("show");
      } else {
        circle.classList.remove("show");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Executa ao carregar a página para ativar imagens visíveis
});
