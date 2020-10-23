const mySwiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
    loop: true,
    navigation: {
       nextEl: '.swiper__arrow'
    },
    breakpoints: {
       540: {
           slidesPerView: 2,
       }
    }

});

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('header-active');
    menuButton.classList.toggle('menu-button-active');
})