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