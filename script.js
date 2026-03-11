// Initialisation AOS
AOS.init({ duration: 1000, once: false, mirror: true });

// Navbar Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

// Défilement fluide (Smooth Scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Effet Machine à écrire (Hero Section)
const textElement = document.getElementById("typewriter");
const phrases = ["Développeur Full-Stack", "Spécialiste Java & PHP", "Passionné de Cyber-Sécurité"];
let wordIdx = 0;
let charIdx = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[wordIdx];
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIdx - 1);
        charIdx--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIdx + 1);
        charIdx++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIdx === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);