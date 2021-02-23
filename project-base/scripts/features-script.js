// JS FOR PROGRESS BAR FEATURES PAGE
const progressBar = document.querySelector('#bar');

window.addEventListener('scroll', () => {

        console.log(window.pageYOffset/(document.body.clientHeight-innerHeight));
        progressBar.percentage = window.pageYOffset/(document.body.clientHeight-innerHeight)*100;

});



  //FEATURES
//   let audioLines = document.querySelectorAll('.audio-lines')
let audioLines = document.querySelectorAll('.play-btn')

  let line01 = "M0,50L0,50Z"
  let line02 = "M0,33L0,33Z"
  let line03 = "M0,20L0,20Z"
  let line04 = "M0,10L0,10Z"
  let line05 = "M0,15L0,15Z"
  let line06 = "M0,25L0,25Z"
  let line07 = "M0,30L0,30Z"

const timeline = anime.timeline({
    duration: 800,
        easing: "easeOutExpo",
        direction: 'alternate',
        autoplay: false,
        loop: true
    })

    timeline.add({
        targets: '.line01',
        d:[
            {value: line01}
        ]
    })

    timeline.add({
      targets: '.line02',
      d:[
          {value: line02,}
      ]
  }, '-=800')

  timeline.add({
    targets: '.line03',
    d:[
        {value: line03,}
    ]
}, '-=800')

timeline.add({
    targets: '.line04',
    d:[
        {value: line04,}
    ]
}, '-=800')

timeline.add({
    targets: '.line05',
    d:[
        {value: line05,}
    ]
}, '-=800')

timeline.add({
    targets: '.line06',
    d:[
        {value: line06,}
    ]
}, '-=800')

timeline.add({
    targets: '.line07',
    d:[
        {value: line07,}
    ]
}, '-=800')


let playBtns = document.querySelectorAll('.play-select-btn')

playBtns.forEach(playBtn =>{
    
    playBtn.addEventListener('click', function(){
        playAudio("#"+playBtn.querySelector('.audio-file').id)

        if(playBtn.classList.contains('playing')){
            playBtn.classList.toggle('playing')
            playBtn.querySelector('.fas').classList.toggle('fa-stop')
            playBtn.querySelector('.fas').classList.toggle('fa-play')
            timeline.pause()
            timeline.seek(0)
        }else{
            playBtn.classList.toggle('playing')
            playBtn.querySelector('.fas').classList.toggle('fa-stop')
            playBtn.querySelector('.fas').classList.toggle('fa-play')
            timeline.play()
        }
    })

})

function playAudio(audioN){
    if(document.querySelector(audioN).classList.contains('pause')){
        document.querySelector(audioN).classList.toggle('pause')
        document.querySelector(audioN).play()
    }else{
        document.querySelector(audioN).classList.toggle('pause')
        // document.querySelector(audioN).pause()
        document.querySelector(audioN).load()
    }
}

// SCROLL TRIGGER // COULD THIS BE COMPACTED USING A LOOP???
const featureTimeline1 = gsap.timeline({
})


featureTimeline1.from('#section-1 .feature-img',{
    opacity: 0,
    duration: 4
})
featureTimeline1.from('#section-1 .feature-text',{
    opacity: 0,
    duration: 4
}, "-=4")
featureTimeline1.from('#section-1',{
    x: -1500,
    duration: 2
}, "-=4")


const featureTimeline2 = gsap.timeline({
    scrollTrigger:{
        trigger: '#section-1',
        start: 'top center'
    }
})

featureTimeline2.from('#section-2 .feature-img',{
    opacity: 0,
    duration: 4
})
featureTimeline2.from('#section-2 .feature-text',{
    opacity: 0,
    duration: 4
}, "-=4")
featureTimeline2.from('#section-2',{
    x: 2000,
    duration: 4
}, "-=4")


const featureTimeline3 = gsap.timeline({
    scrollTrigger:{
        trigger: '#section-1',
        start: 'bottom center'
    }
})
featureTimeline3.from('#section-3 .feature-img',{
    opacity: 0,
    duration: 4
})
featureTimeline3.from('#section-3 .feature-text',{
    opacity: 0,
    duration: 4
}, "-=4")
featureTimeline3.from('#section-3',{
    x: -1500,
    duration: 2
}, "-=4")

const featureTimeline4 = gsap.timeline({
    scrollTrigger:{
        trigger: '#section-2',
        start: 'bottom center'
    }
})
featureTimeline4.from('#section-4 .feature-img',{
    opacity: 0,
    duration: 4
})
featureTimeline4.from('#section-4 .feature-text',{
    opacity: 0,
    duration: 4
}, "-=4")
featureTimeline4.from('#section-4',{
    x: 2000,
    duration: 2
}, "-=4")

const featureTimeline5 = gsap.timeline({
    scrollTrigger:{
        trigger: '#section-3',
        start: 'bottom center'
    }
})
featureTimeline5.from('#section-5 .feature-img',{
    opacity: 0,
    duration: 4
})
featureTimeline5.from('#section-5 .feature-text',{
    opacity: 0,
    duration: 4
}, "-=4")
featureTimeline5.from('#section-5',{
    x: -1500,
    duration: 2
}, "-=4")

const featureTimeline6 = gsap.timeline({
    scrollTrigger:{
        trigger: '#section-4',
        start: 'bottom center'
    }
})
featureTimeline6.from('#section-6 .feature-img',{
    opacity: 0,
    duration: 4
})
featureTimeline6.from('#section-6 .feature-text',{
    opacity: 0,
    duration: 4
}, "-=4")
featureTimeline6.from('#section-6',{
    x: 2000,
    duration: 2
}, "-=4")

const featureTimeline7 = gsap.timeline({
    scrollTrigger:{
        trigger: '#section-5',
        start: 'bottom center'
    }
})
featureTimeline7.from('#section-7 .feature-img',{
    opacity: 0,
    duration: 4
})
featureTimeline7.from('#section-7 .feature-text',{
    opacity: 0,
    duration: 4
}, "-=4")
featureTimeline7.from('#section-7',{
    x: -1500,
    duration: 2
}, "-=4")

const featureTimeline8 = gsap.timeline({
    scrollTrigger:{
        trigger: '#section-6',
        start: 'bottom center'
    }
})
featureTimeline8.from('#section-8 .feature-img',{
    opacity: 0,
    duration: 4
})
featureTimeline8.from('#section-8 .feature-text',{
    opacity: 0,
    duration: 4
}, "-=4")
featureTimeline8.from('#section-8',{
    x: 2000,
    duration: 2
}, "-=4")

const featureTimeline9 = gsap.timeline({
    scrollTrigger:{
        trigger: '#section-7',
        start: 'bottom center'
    }
})
featureTimeline9.from('#section-9 .feature-img',{
    opacity: 0,
    duration: 4
})
featureTimeline9.from('#section-9 .feature-text',{
    opacity: 0,
    duration: 4
}, "-=4")
featureTimeline9.from('#section-9',{
    x: -1500,
    duration: 2
}, "-=4")

const featureTimeline10 = gsap.timeline({
    scrollTrigger:{
        trigger: '#section-8',
        start: 'bottom center'
    }
})
featureTimeline10.from('#section-10 .feature-img',{
    opacity: 0,
    duration: 4
})
featureTimeline10.from('#section-10 .feature-text',{
    opacity: 0,
    duration: 4
}, "-=4")
featureTimeline10.from('#section-10',{
    x: 2000,
    duration: 2
}, "-=4")

const featureTimeline11 = gsap.timeline({
    scrollTrigger:{
        trigger: '#section-9',
        start: 'bottom center'
    }
})
featureTimeline11.from('#section-11 .feature-img',{
    opacity: 0,
    duration: 4
})
featureTimeline11.from('#section-11 .feature-text',{
    opacity: 0,
    duration: 4
}, "-=4")
featureTimeline11.from('#section-11',{
    x: -1500,
    duration: 2
}, "-=4")