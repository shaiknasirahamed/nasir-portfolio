// ===============================
// Portfolio JavaScript
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Smooth button animation
    const buttons = document.querySelectorAll(".btn, .btn-outline");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "translateY(-4px)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "translateY(0)";
        });
    });

    // Hero image hover effect
    const heroImage = document.querySelector(".hero-image img");

    if (heroImage) {
        heroImage.addEventListener("mouseenter", () => {
            heroImage.style.transform = "scale(1.05)";
            heroImage.style.transition = "0.4s";
        });

        heroImage.addEventListener("mouseleave", () => {
            heroImage.style.transform = "scale(1)";
        });
    }

    // Welcome message
    console.log("Welcome to Nasir Portfolio 🚀");
});
// ================================
// Typing Effect
// ================================

const typingElement = document.querySelector(".typing");

const professions = [
    "Linux Administrator",
    "AWS Cloud Engineer",
    "DevOps Engineer",
    "Automation Enthusiast"
];

let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentProfession = professions[professionIndex];

    if (!isDeleting) {
        typingElement.textContent = currentProfession.substring(0, charIndex++);
    } else {
        typingElement.textContent = currentProfession.substring(0, charIndex--);
    }

    let speed = 120;

    if (!isDeleting && charIndex === currentProfession.length + 1) {
        speed = 1800;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        professionIndex = (professionIndex + 1) % professions.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
// ================================
// Scroll Reveal Animation
// ================================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
