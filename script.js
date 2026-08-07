const elementos = document.querySelectorAll(
    ".headline, .img-headline, section, .card, .footer, .form-container, .menu-container, .coluna"
);

elementos.forEach((el) => {
    el.classList.add("animar");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("mostrar");
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach((el) => observer.observe(el));

/* ================================
   Menu hambúrguer (3 barras) - Mobile
================================ */
const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("ativo");
        menuToggle.classList.toggle("ativo");
    });

    // Fecha o menu ao clicar em um link (melhora a navegação no telefone)
    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("ativo");
            menuToggle.classList.remove("ativo");
        });
    });
}