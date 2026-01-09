// Hero animation using GSAP
window.addEventListener('load', () => {
  gsap.to(".hero h1", {opacity: 1, y: 0, duration: 1, ease: "power2.out"});
  gsap.to(".hero p", {opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out"});
  gsap.to(".btn", {opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2.out"});
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
