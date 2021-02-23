//COMMON TO ALL PAGES

// CODE TO OPEN MODAL DIALOG BOX
// (() => {
    const dialog = document.querySelector('.dialog-overview');
    const openButton = document.querySelector('#buy-btn');

    openButton.addEventListener('click', () => dialog.show());
//   })();


//CODE TO OPEN MOBILE MENU
const hamburgerBtn = document.querySelector('.hamburger-button')
const nav = document.querySelector('nav')
const openClose = hamburgerBtn.querySelector('.fa-bars')

hamburgerBtn.addEventListener('click', function(){
    nav.classList.toggle('open')
    openClose.classList.toggle('fa-bars')
    openClose.classList.toggle('fa-times')
})