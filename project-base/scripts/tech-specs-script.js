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
            heading.querySelector('.fa-plus').classList.toggle('spin-animation')
            heading.querySelector('.fa-minus').classList.toggle('fade-in')
    })
});