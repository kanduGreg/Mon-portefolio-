AOS.init({ duration: 1000, once: false, mirror: true });

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
    });
});

const textElement = document.getElementById("typewriter");
const phrases = ["Développeur Full-Stack", "Spécialiste Java & PHP", "Passionné de Cyber-Sécurité"];
let wordIdx = 0, charIdx = 0, isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[wordIdx];
    textElement.textContent = isDeleting ? currentPhrase.substring(0, charIdx--) : currentPhrase.substring(0, charIdx++);

    let typeSpeed = isDeleting ? 50 : 100;
    if (!isDeleting && charIdx === currentPhrase.length + 1) { typeSpeed = 2000; isDeleting = true; }
    else if (isDeleting && charIdx === 0) { isDeleting = false; wordIdx = (wordIdx + 1) % phrases.length; typeSpeed = 500; }
    setTimeout(typeEffect, typeSpeed);
}
document.addEventListener("DOMContentLoaded", typeEffect);