  //THIS FILE CONTAINS ONLY SCRIPTS SPECIFIC TO INDEX PAGE
  
  //GSAP INDEX MAIN ANIMATION
  let tlMain = gsap.timeline({delay: 1})

  // Function to slide each interface image into view
  function imageSlide(imageNumber){
    tlMain.from(imageNumber, {
      duration: 1,
      x: 2000,
      y: -700
    })
  }

  // Function to fade each subheading in
  function headingFadeIn(headingName){
    tlMain.from(headingName,{
      duration: 1,
      opacity: 0
    }, "-=0.2")
  }

  // Calls each function with respective image/subheading
  imageSlide('#img1')
  headingFadeIn('#perform-heading')
  imageSlide('#img2')
  headingFadeIn('#browse-heading')
  imageSlide('#img3')
  headingFadeIn('#edit-heading')
  imageSlide('#img4')
  headingFadeIn('#sample-heading')
  imageSlide('#img5')
  headingFadeIn('#build-heading')
  imageSlide('#img6')
  headingFadeIn('#mix-heading')

  // Animate main heading and seperators
  tlMain.from('.main-heading',{
    duration: 1.2,
    scale: 0,
    ease: "elastic.out(1, 0.6)"
  })
  tlMain.from('.separator',{
    duration: 2,
    opacity: 0
  })