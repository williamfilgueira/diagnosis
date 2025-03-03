let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * 100; 
    document.querySelector(".slides").style.transform = `translateX(${offset}%)`;

    // Atualiza os indicadores
    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");
}

function moveToSlide(index) {
    showSlide(index);
}

// Inicia o carrossel
showSlide(slideIndex);

// Para navegação automática (opcional)
setInterval(() => {
    showSlide(slideIndex + 1);
}, 5000); // Muda a cada 5 segundos

// top-header
window.addEventListener("scroll", function () {
    const topHeader = document.getElementById("top-header");
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        topHeader.classList.add("hidden"); // Faz o top-header desaparecer sem mudar o layout
        header.style.position = "fixed"; // Fixa a navbar no topo
        header.style.top = "0";
        header.style.width = "100%";
        header.style.zIndex = "1100";
        header.style.padding = "10px 5%"; // Mantém o padding sem alterar o tamanho
        header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
    } else {
        topHeader.classList.remove("hidden"); // Traz de volta o top-header suavemente
        header.style.position = "relative"; // Mantém a navbar na posição original
        header.style.padding = "15px 5%"; // Mantém o tamanho fixo ao rolar de volta
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuList = document.querySelector("nav ul");

    menuToggle.addEventListener("change", function () {
        if (this.checked) {
            menuList.style.display = "flex"; // Mostra o menu no mobile
        } else {
            menuList.style.display = "none"; // Esconde o menu no mobile
        }
    });

    // Esconder menu ao clicar em um link (melhor UX)
    menuList.addEventListener("click", function () {
        menuList.style.display = "none";
        menuToggle.checked = false;
    });
});

// Acessibilidade: Teclado para abrir o menu (Enter ou Espaço)
function handleKeyPress(event) {
    const menuToggle = document.getElementById("menu-toggle");

    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        menuToggle.checked = !menuToggle.checked;
    }
}


