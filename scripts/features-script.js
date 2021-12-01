//THIS FILE CONTAINS ONLY SCRIPTS SPECIFIC TO FEATURES PAGE

//PROGRESS BAR
const progressBar = document.querySelector('#bar');

// Calculates percentage to fill the bar as user scrolls
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

// Adds animation to timeline
let linesSynch;
for(i=0; i<lines.length; i++){
    if(i>0){
        linesSynch = '-=800'
    }

    let lineClass = '.line0' + (i+1)
    linesAnimated.add({
        targets: lineClass,
        d:[
            {value: lines[i]}
        ]
    }, linesSynch)
}

//AUDIO PLAYBACK
// Toggles play and stop for each respective audio file passed in
function playAudio(audioN){
    if(document.querySelector(audioN).classList.contains('pause')){
        // Reset all files to pause
        document.querySelectorAll(".audio-file").forEach(file => {
            file.classList.add('pause')
        })
        // Set current file to play (not pause)
        document.querySelector(audioN).classList.toggle('pause')
        document.querySelector(audioN).play()        
    }else{
        document.querySelector(audioN).classList.toggle('pause')
        document.querySelector(audioN).load()
    }
}

// AUDIO PLAYBACK AND SVG ANIMATION TRIGGERS
// Select all play buttons
let playBtns = document.querySelectorAll('.play-select-btn')

// Loop through play buttons
playBtns.forEach(playBtn =>{

    playBtn.addEventListener('click', function(){
        // // Reset all play button icons
        playBtns.forEach(btn => {
                btn.querySelector('.fas').classList.remove('fa-stop')
                btn.querySelector('.fas').classList.add('fa-play')
        })

        // Reset audio playback
        document.querySelectorAll(".audio-file").forEach(file => {
            file.load()
        })

        // Play/stop audio for button clicked
        playAudio("#"+playBtn.querySelector('.audio-file').id)

        // Change icon for currently played button
        playBtn.querySelector('.fas').classList.add('fa-stop')
        playBtn.querySelector('.fas').classList.remove('fa-play')

        // Reset svg animation and change icon
        if(playBtn.classList.contains('playing')){
            playBtn.classList.toggle('playing')
            playBtn.querySelector('.fas').classList.remove('fa-stop')
            playBtn.querySelector('.fas').classList.add('fa-play')
            linesAnimated.pause()
            linesAnimated.seek(0)
        }else{
            // Set all buttons to not playing
            playBtns.forEach(svgBtn => {
                svgBtn.classList.remove('playing')
            })
            // Play svg animation, reset current button to playing
            playBtn.classList.toggle('playing')
            linesAnimated.play()
        }

    })
})


// SCROLL TRIGGER
const numSections = 11
let featureTimelines = []

// Create inital two unique timelines for sections 1 and 2
featureTimelines[0] = gsap.timeline({
})
featureTimelines[1] = gsap.timeline({
    scrollTrigger:{
        trigger: '#section-1',
        start: 'top center'
    }
})

// Create timelines for remaining sections with loop due to same parameters
for(i = 2; i<numSections; i++){
    let section = `#section-${(i-1)}`
    featureTimelines[i] = gsap.timeline({
        scrollTrigger:{
            trigger: section,
            start: 'bottom center'
        }
    })
}

// Add animations to each timeline
let xCoordinate;
for(i = 0; i< numSections; i++){
    if((i%2) === 0){
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