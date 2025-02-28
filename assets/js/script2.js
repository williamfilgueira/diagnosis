document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuList = document.querySelector("nav ul");

    function checkScreenSize() {
        if (window.innerWidth > 768) { 
            menuList.style.display = "flex"; // No desktop, sempre visível
        } else {
            menuList.style.display = menuToggle.checked ? "flex" : "none";
        }
    }

    menuToggle.addEventListener("change", function () {
        checkScreenSize();
    });

    menuList.addEventListener("click", function () {
        if (window.innerWidth <= 768) { // Somente esconde no mobile
            menuList.style.display = "none";
            menuToggle.checked = false;
        }
    });

    // Executa a verificação inicial ao carregar a página
    checkScreenSize();

    // Garante que ao redimensionar a tela, a visibilidade do menu seja ajustada corretamente
    window.addEventListener("resize", checkScreenSize);
});
