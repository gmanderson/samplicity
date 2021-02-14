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
    heading.addEventListener('click', ()=>{
        if(heading.querySelector('ul').style.display === 'block'){
            heading.querySelector('ul').style.display = 'none'
            heading.querySelector('i').classList.remove('fa-minus')
            heading.querySelector('i').classList.add('fa-plus')
        }else{
            heading.querySelector('ul').style.display = 'block'
            heading.querySelector('i').classList.remove('fa-plus')
            heading.querySelector('i').classList.add('fa-minus')
        }
        
    })
});

