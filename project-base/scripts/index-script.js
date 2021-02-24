  //THIS FILE CONTAINS ONLY SCRIPTS SPECIFIC TO INDEX PAGE
  
  //GSAP INDEX MAIN ANIMATION
  let tlMain = gsap.timeline({delay: 1})

  tlMain.from('#img1', {
    duration: 1,
    x: 2000,
    y: -700
  })
  .from('#perform-heading',{
    duration: 1,
    opacity: 0
  }, "-=0.2")
  .from('#img2', {
    duration: 1,
    x: 2000,
    y: -700
  })
  .from('#browse-heading',{
    duration: 1,
    opacity: 0
  }, "-=0.2")
  .from('#img3', {
    duration: 1,
    x: 2000,
    y: -700
  })
  .from('#edit-heading',{
    duration: 1,
    opacity: 0
  }, "-=0.2")
  .from('#img4', {
    duration: 1,
    x: 2000,
    y: -700
  })
  .from('#sample-heading',{
    duration: 1,
    opacity: 0
  }, "-=0.2")
  .from('#img5', {
    duration: 1,
    x: 2000,
    y: -700
  })
  .from('#build-heading',{
    duration: 1,
    opacity: 0
  }, "-=0.2")
  .from('#img6', {
    duration: 1,
    x: 2000,
    y: -700
  })
  .from('#mix-heading',{
    duration: 1,
    opacity: 0
  }, "-=0.2")
  .from('.main-heading',{
    duration: 1.2,
    // opacity:0,
    scale: 0,
    ease: "elastic.out(1, 0.6)"
  })
  .from('.separator',{
    duration: 2,
    opacity: 0
  })