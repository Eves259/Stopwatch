let interval;

var time = 0;

function startLoop() { 
    var element = document.body;
    element.classList.toggle('startSwitch');
    interval = setInterval(function(){ 
        $('#time').html(Math.floor(this.time)); //Displays the time on the stopwatch
        this.time=performance.now();
        function displayTime() {
            var ms = Math.floor(time);
            var seconds = Math.floor((time/1000));
            var minutes = Math.floor(((time/1000)/60));
            $('#time').html(minutes + ':' + seconds + ':' + ms);
        }
        displayTime();
    }); 
}

function stopLoop() {
    clearInterval(interval); //Pauses the time but can be started again
    var element = document.body;
    element.classList.toggle('startSwitch');
}

function lap() {
    var save = $('#savedTime');
    save.html();
}

function clear() {
    location.reload(); //Reloads the page to reset the stopwatch
}

//Sound functions
function activateSound() { //This function is linked to a button. When the button is pressed it plays music and when it is pressed again it pauses the music. It uses the play and pause functions to do this.
    $('.stopwatch').addClass('animation');
    $('#soundButton').addClass('animation-2');
    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();
    }
}

var sound = document.getElementById("Groover");  //This sets the variable 'sound' equal to the ID labeled 'Groover'

function play() { //This plays music and is used in the activateSound function to do so.
    sound.play();
}

function pause() { //This pauses music and is used in the activateSoundfunction to do this.
    sound.pause();
}

//Buttons to run the functions
$('#button1').on('click', startLoop);
$('#button1-stop').on('click', stopLoop);
$('#button2').on('click', lap);
$('#button-clear').on('click', clear);