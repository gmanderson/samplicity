//THIS FILE CONTAINS SCRIPTS COMMON TO ALL PAGES

//MODAL DIALOG BOX
const dialog = document.querySelector('.dialog-overview');
const buyButton = document.querySelector('#buy-btn');

buyButton.addEventListener('click', () => dialog.show());


//MOBILE MENU
const hamburgerBtn = document.querySelector('.hamburger-button')
const nav = document.querySelector('nav')
const openCloseIcon = hamburgerBtn.querySelector('.fa-bars')

hamburgerBtn.addEventListener('click', function(){
    nav.classList.toggle('open')
    openCloseIcon.classList.toggle('fa-bars')
    openCloseIcon.classList.toggle('fa-times')
})