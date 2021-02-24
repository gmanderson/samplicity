//THIS FILE CONTAINS ONLY SCRIPTS SPECIFIC TO FEATURES PAGE

//PROGRESS BAR
const progressBar = document.querySelector('#bar');

window.addEventListener('scroll', () => {
    progressBar.percentage = window.pageYOffset/(document.body.clientHeight-innerHeight)*100;
});

// SVG LINE ANIMATION
// Declare values for lines to animate to
const lines = [
    "M0,50L0,50Z",
    "M0,33L0,33Z",
    "M0,20L0,20Z",
    "M0,10L0,10Z",
    "M0,15L0,15Z",
    "M0,25L0,25Z",
    "M0,30L0,30Z"
]

// Create timeline
const linesAnimated = anime.timeline({
    duration: 800,
        easing: "easeOutExpo",
        direction: 'alternate',
        autoplay: false,
        loop: true
})

let linesSynch;

for(i=0; i<lines.length; i++){
    if(i>0){
        linesSynch = '-=800'
    }

    let lineClass = '.line0' + (i+1)
    console.log(lineClass)
    console.log(lines[i])
    linesAnimated.add({
        targets: lineClass,
        d:[
            {value: lines[i]}
        ]
    }, linesSynch)
}

// Toggles play and stop for each respective audio file passed in
function playAudio(audioN){
    if(document.querySelector(audioN).classList.contains('pause')){
        document.querySelector(audioN).classList.toggle('pause')
        document.querySelector(audioN).play()
    }else{
        document.querySelector(audioN).classList.toggle('pause')
        document.querySelector(audioN).load()
    }
}

// Select all play buttons
let playBtns = document.querySelectorAll('.play-select-btn')

// Loop through play buttons
playBtns.forEach(playBtn =>{
    playBtn.addEventListener('click', function(){
        // Play/stop audio for button clicked
        playAudio("#"+playBtn.querySelector('.audio-file').id)

        // Trigger svg animation
        if(playBtn.classList.contains('playing')){
            playBtn.classList.toggle('playing')
            playBtn.querySelector('.fas').classList.toggle('fa-stop')
            playBtn.querySelector('.fas').classList.toggle('fa-play')
            linesAnimated.pause()
            linesAnimated.seek(0)
        }else{
            playBtn.classList.toggle('playing')
            playBtn.querySelector('.fas').classList.toggle('fa-stop')
            playBtn.querySelector('.fas').classList.toggle('fa-play')
            linesAnimated.play()
        }
    })
})


// SCROLL TRIGGER
const numSections = 11;
let featureTimelines = [];

featureTimelines[0] = gsap.timeline({
})
featureTimelines[1] = gsap.timeline({
    scrollTrigger:{
        trigger: '#section-1',
        start: 'top center'
    }
})

for(i = 2; i<numSections; i++){
    let section = `#section-${(i-1)}`
    featureTimelines[i] = gsap.timeline({
        scrollTrigger:{
            trigger: section,
            start: 'bottom center'
        }
    })
}

let xCoordinate;

for(i = 0; i< numSections; i++){
    if((i%2) == 0){
        xCoordinate = -1500
    }else{
        xCoordinate = 2000
    }

    featureTimelines[i].from('#section-'+(i+1)+' .feature-img',{
        opacity: 0,
        duration: 4
    })
    featureTimelines[i].from('#section-'+(i+1)+' .feature-text',{
        opacity: 0,
        duration: 4
    }, "-=4")
    featureTimelines[i].from('#section-'+(i+1),{
        x: xCoordinate,
        duration: 2
    }, "-=4")
}