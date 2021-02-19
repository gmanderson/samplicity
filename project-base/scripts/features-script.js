// JS FOR PROGRESS BAR FEATURES PAGE
const progressBar = document.querySelector('#bar');

window.addEventListener('scroll', () => {

        console.log(window.pageYOffset/(document.body.clientHeight-innerHeight));
        progressBar.percentage = window.pageYOffset/(document.body.clientHeight-innerHeight)*100;

});



  //FEATURES
  let audioLines = document.querySelector('#audio-lines')

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

  audioLines.addEventListener('click', function(){
    if(audioLines.classList.contains('playing')){
        audioLines.classList.toggle('playing')
        timeline.pause()
        timeline.seek(0)
    }else{
        audioLines.classList.toggle('playing')
        timeline.play()
    }

  })
