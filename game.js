gamePattern = []
userClickedPattern = []
buttonColours = ["red", "blue", "green", "yellow"]
gameStared = false
level = 0

function nextSequence() {
    randomNumber = Math.floor(Math.random()*4)
    randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)

    animatePress(randomChosenColour)
    playSound(randomChosenColour)
    
    
    level++

    $("h1").text("Level " + level)
    console.log("Correct pattern:" + gamePattern)
}

function playSound(name) {
    audioFile = "./sounds/" + name + ".mp3"
    var audio = new Audio(audioFile);
    audio.play();
}

function animatePress(currentColour) {
    $("." + currentColour).toggleClass("pressed")

    setTimeout(function() {$("." + currentColour).toggleClass("pressed")}, 100);
}

function checkAnswer() {

    
    for (i=0;i<userClickedPattern.length;i++) {
 

        if (userClickedPattern[i] === gamePattern[i]) {
            
        
            if (userClickedPattern.length === gamePattern.length && i==userClickedPattern.length-1) {
                userClickedPattern = []
                setTimeout(function() {nextSequence()}, 1000);
            }

            
        } else {
            $("body").toggleClass("game-over")
            setTimeout(function() {$("body").toggleClass("game-over")}, 100);
            level = 0
            gamePattern = []
            userClickedPattern = []
            setTimeout(function() {nextSequence()}, 2000);
        }

    }

    
}
 
$(".btn").click(function(){
    userChosenColour = this.id
    animatePress(userChosenColour)
    playSound(userChosenColour)
    userClickedPattern.push(userChosenColour)


    console.log("User pattern:" + userClickedPattern)
    checkAnswer()
});


$("body").keypress(function(event){
    
    setTimeout(function() {nextSequence()}, 1000);
    gameStared = true
})
