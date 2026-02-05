// Toggle Mobile Menu
const burger = document.getElementById('burgerToggle');
const nav = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Scroll Reveal Effect
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal(); // Run on load