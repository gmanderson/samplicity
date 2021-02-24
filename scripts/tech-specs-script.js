//THIS FILE CONTAINS ONLY SCRIPTS SPECIFIC TO TECH SPECS PAGE

// HEADING DRAWERS
const specHeadings = document.querySelectorAll('section')

// Clicking respective heading opens the content and performs the icon animation
specHeadings.forEach(heading => {
    heading.addEventListener('click', ()=>{
        heading.querySelector('ul').classList.toggle('open')
        heading.querySelector('.fa-plus').classList.toggle('spin-animation')
        heading.querySelector('.fa-minus').classList.toggle('fade-in')
    })
});