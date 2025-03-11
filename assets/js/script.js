// ========================= CARROSSEL =========================
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

// Exibe o slide correto com base no índice
function showSlide(index) {
  slideIndex =
    index >= slides.length ? 0 : index < 0 ? slides.length - 1 : index;
  const offset = -slideIndex * 100;

  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;

  // Atualiza os indicadores
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[slideIndex].classList.add("active");
}

// Navegação manual para um slide específico
function moveToSlide(index) {
  showSlide(index);
}

// Inicia o carrossel automaticamente
showSlide(slideIndex);
setInterval(() => {
  showSlide(slideIndex + 1);
}, 5000); // Muda a cada 5 segundos

// ========================= HEADER FIXO AO ROLAR =========================
window.addEventListener("scroll", function () {
  const topHeader = document.getElementById("top-header");
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    topHeader.classList.add("hidden"); // Esconde o top-header
    Object.assign(header.style, {
      position: "fixed",
      top: "0",
      width: "100%",
      zIndex: "1100",
      padding: "10px 5%",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    });
  } else {
    topHeader.classList.remove("hidden"); // Exibe novamente o top-header
    Object.assign(header.style, {
      position: "relative",
      padding: "15px 5%",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    });
  }
});

// ========================= MENU HAMBÚRGUER =========================
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menuList = document.querySelector("nav ul");

  if (menuToggle && menuList) {
    menuToggle.addEventListener("change", function () {
      menuList.style.display = this.checked ? "flex" : "none";
    });

    // Esconder menu ao clicar em um link
    menuList.addEventListener("click", function () {
      menuList.style.display = "none";
      menuToggle.checked = false;
    });
  }

  // Acessibilidade: Permite abrir o menu com "Enter" ou "Espaço"
  function handleKeyPress(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      menuToggle.checked = !menuToggle.checked;
    }
  }

  menuToggle.addEventListener("keypress", handleKeyPress);
});

document.addEventListener("DOMContentLoaded", function () {
  const servicoCards = document.querySelectorAll(".servico-card");
  const servicoItems = document.querySelectorAll(".servico-item");
  const equipeItems = document.querySelectorAll(".equipe-item");
  const reviewCircles = document.querySelectorAll(".review-circle");
  const containerAviso = document.querySelectorAll(".container-aviso");

  function checkVisibility(elements) {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach((item, index) => {
      const itemTop = item.getBoundingClientRect().top;

      if (itemTop < triggerBottom) {
        item.classList.add("show");
        item.style.transitionDelay = `${index * 0.2}s`; // Efeito de escada
      } else {
        item.classList.remove("show");
        item.style.transitionDelay = "0s"; // Remove atraso ao sumir
      }
    });
  }

  function checkAllSections() {
    checkVisibility(servicoCards);
    checkVisibility(servicoItems);
    checkVisibility(equipeItems);
    checkVisibility(reviewCircles);
    checkVisibility(containerAviso);
  }

  window.addEventListener("scroll", checkAllSections);
  checkAllSections(); 
});

document.addEventListener("DOMContentLoaded", function () {
  const whatsappButton = document.getElementById("whatsappButton");
  const heroSection = document.getElementById("inicio");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          whatsappButton.classList.add("show");
        } else {
          whatsappButton.classList.remove("show");
        }
      });
    },
    { threshold: 0.0001 }
  );

  observer.observe(heroSection);
});

document.addEventListener("DOMContentLoaded", function () {
  const whatsappButton = document.getElementById("whatsappButton");
  const heroSection = document.getElementById("inicio");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (!entry.isIntersecting) {
              whatsappButton.classList.add("show");
              vibrateButton(); // Faz vibrar assim que aparece
          } else {
              whatsappButton.classList.remove("show");
          }
      });
  }, { threshold: 0.1 });

  observer.observe(heroSection);

  function vibrateButton() {
      whatsappButton.classList.add("vibrate");
      setTimeout(() => {
          whatsappButton.classList.remove("vibrate");
      }, 3000); // Remove a classe após a animação (0.3s)
  }

  // Configura a vibração a cada 7 segundos, mas apenas se o botão estiver visível
  setInterval(() => {
      if (whatsappButton.classList.contains("show")) {
          vibrateButton();
      }
  }, 4000);
});
