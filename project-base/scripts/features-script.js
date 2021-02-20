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

// audioLines.forEach(lineSet => {
//     lineSet.addEventListener('click', ()=>{
//         if(lineSet.classList.contains('playing')){
//             lineSet.classList.toggle('playing')
//             timeline.pause()
//             timeline.seek(0)
//         }else{
//             lineSet.classList.toggle('playing')
//             timeline.play()
//         }
    
//       })
// })

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

