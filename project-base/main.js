// CODE TO OPEN MODAL DIALOG BOX
// (() => {
    const dialog = document.querySelector('.dialog-overview');
    const openButton = document.querySelector('#buy-btn');

    openButton.addEventListener('click', () => dialog.show());
//   })();

// CODE TO OPEN TECH SPEC "DRAWERS"
const specHeadings = document.querySelectorAll('section')


// JS WHERE ADDS STYLE PARAMETER --- IN PROPOSAL PLUS SPINS BEFORE BECOMING MINUS
specHeadings.forEach(heading => {
    // heading.addEventListener('click', ()=>{
    //     if(heading.querySelector('ul').style.display === 'block'){
    //         heading.querySelector('ul').style.display = 'none'
    //         heading.querySelector('i').classList.remove('fa-minus')
    //         heading.querySelector('i').classList.add('fa-plus')
    //     }else{
    //         heading.querySelector('ul').style.display = 'block'
    //         heading.querySelector('i').classList.remove('fa-plus')
    //         heading.querySelector('i').classList.add('fa-minus')
    //     }
        
    // })

    heading.addEventListener('click', ()=>{
            heading.querySelector('ul').classList.toggle('open')
            heading.querySelector('i').classList.toggle('fa-minus')
            heading.querySelector('i').classList.toggle('fa-plus')
        
    })
});

// JS FOR PROGRESS BAR FEATURES PAGE
const progressBar = document.querySelector('#bar');

window.addEventListener('scroll', () => {

    if (progressBar !== null){ // Removes error message on other pages
        console.log(window.pageYOffset/(document.body.clientHeight-innerHeight));
        progressBar.percentage = window.pageYOffset/(document.body.clientHeight-innerHeight)*100;
    }


});

// INTERFACE PAGE
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,

    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });