var navBurger = document.querySelector('.nav-burger');
var navLinks = document.querySelector('.nav-links');
var navOverlay = document.querySelector('.nav-overlay');

navBurger.addEventListener('click', ()=>{
    navBurger.classList.toggle('nav-burger-active');
    navLinks.classList.toggle('nav-links-active');
    navOverlay.classList.toggle('nav-overlay-active');
    document.body.classList.toggle('overflow-hidden');
});