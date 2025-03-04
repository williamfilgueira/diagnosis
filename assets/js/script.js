document.addEventListener("DOMContentLoaded", function () {
    // ================= ANIMAÇÃO DOS CARDS ===================
    const cards = document.querySelectorAll(".servico-card, .servico-item");
    const equipeItems = document.querySelectorAll(".equipe-item");
    const reviewCircles = document.querySelectorAll(".review-circle");

    function checkVisibility(elements) {
        const triggerBottom = window.innerHeight * 0.85;
        const triggerTop = window.innerHeight * 0.15;

        elements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < triggerBottom && elementBottom > triggerTop) {
                element.classList.add("show");
                if (element.classList.contains("equipe-item")) {
                    element.style.transitionDelay = `${index * 0.3}s`; // Efeito de escada
                }
            } else {
                element.classList.remove("show");
                if (element.classList.contains("equipe-item")) {
                    element.style.transitionDelay = "0s"; // Remove atraso ao sair
                }
            }
        });
    }

    function checkAllSections() {
        checkVisibility(cards);
        checkVisibility(equipeItems);
        checkVisibility(reviewCircles);
    }

    window.addEventListener("scroll", checkAllSections);
    checkAllSections(); // Chama ao carregar para ativar elementos visíveis

    // ================= MENU HAMBÚRGUER ===================
    const menuToggle = document.getElementById("menu-toggle");
    const menuList = document.querySelector("nav ul");

    if (menuToggle && menuList) {
        menuToggle.addEventListener("change", function () {
            if (this.checked) {
                menuList.style.visibility = "visible";
                menuList.style.opacity = "1";
                menuList.style.display = "flex";
            } else {
                menuList.style.visibility = "hidden";
                menuList.style.opacity = "0";
                setTimeout(() => { menuList.style.display = "none"; }, 300); // Aguarda a transição antes de ocultar
            }
        });

        // Esconder menu ao clicar em um link
        menuList.addEventListener("click", function () {
            menuList.style.visibility = "hidden";
            menuList.style.opacity = "0";
            setTimeout(() => { menuList.style.display = "none"; }, 300);
            menuToggle.checked = false;
        });

        // Acessibilidade: Teclado para abrir o menu (Enter ou Espaço)
        function handleKeyPress(event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                menuToggle.checked = !menuToggle.checked;
                menuList.style.visibility = menuToggle.checked ? "visible" : "hidden";
                menuList.style.opacity = menuToggle.checked ? "1" : "0";
            }
        }

        menuToggle.addEventListener("keypress", handleKeyPress);
    }

    // ================= HEADER FIXO AO ROLAR ===================
    window.addEventListener("scroll", function () {
        const topHeader = document.getElementById("top-header");
        const header = document.querySelector("header");

        if (window.scrollY > 50) {
            topHeader.classList.add("hidden");
            header.style.position = "fixed";
            header.style.top = "0";
            header.style.width = "100%";
            header.style.zIndex = "1100";
            header.style.padding = "10px 5%";
            header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
        } else {
            topHeader.classList.remove("hidden");
            header.style.position = "relative";
            header.style.padding = "15px 5%";
            header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
        }
    });

    // ================= CARROSSEL ===================
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
    }, 5000);
});
