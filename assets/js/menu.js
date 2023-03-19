const botaoMenu = document.querySelector('#btc__menu');
const menuMobile = document.querySelector('#menu__container');

botaoMenu.addEventListener("click", function() {
    menuMobile.classList.toggle('ativo');
})