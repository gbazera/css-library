var navBurger = document.querySelector('.nav-burger');
var navLinks = document.querySelector('.nav-links');

navBurger.addEventListener('click', ()=>{
    navBurger.classList.toggle('nav-burger-active');
    navLinks.classList.toggle('nav-links-active');
    document.body.classList.toggle('overflow-hidden');
});