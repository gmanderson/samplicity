//THIS FILE CONTAINS ONLY SCRIPTS SPECIFIC TO INTERFACE PAGE

const specHeadings = document.querySelectorAll('section')

// JS WHERE ADDS STYLE PARAMETER --- IN PROPOSAL PLUS SPINS BEFORE BECOMING MINUS
specHeadings.forEach(heading => {
    heading.addEventListener('click', ()=>{
            heading.querySelector('ul').classList.toggle('open')
            heading.querySelector('.fa-plus').classList.toggle('spin-animation')
            heading.querySelector('.fa-minus').classList.toggle('fade-in')
    })
});