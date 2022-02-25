const navToggle = document.querySelector('.navtoggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav__visible')
})