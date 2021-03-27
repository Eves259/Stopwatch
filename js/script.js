let interval;

function startLoop() { 
    var element = document.body;
    element.classList.toggle('startSwitch');
    interval = setInterval(function(){ 
        $('#time').html(Math.floor(performance.now()));
    });
}

function stopLoop() {
    clearInterval(interval);
    var element = document.body;
    element.classList.toggle('startSwitch');
}

function lap() {
    var save = $('#savedTime');
    save.html();
}

function clear() {
    location.reload();
}

function activateSound() { //This function is linked to a button. When the button is pressed it plays music and when it is pressed again it pauses the music. It uses the play and pause functions to do this.
    $('.stopwatch').addClass('animation');
    $('#soundButton').addClass('animation-2');
    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();
    }
}

var sound = document.getElementById("Groover");  //This sets the variable 'sound' equal to the id labeled 'Groover'

function play() { //This plays music and is used in the activateSound function to do so.
    sound.play();
}

function pause() { //This pauses music and is used in the activateSoundfunction to do this.
    sound.pause();
}

$('#button1').on('click', startLoop);
$('#button1-stop').on('click', stopLoop);
$('#button2').on('click', lap);
$('#button-clear').on('click', clear);

