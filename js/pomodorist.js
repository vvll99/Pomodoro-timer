

var minutes = 25;
var seconds = 0;

function countdown() {


    if (seconds < 0) {
        minutes--;
        seconds = 59;
    }
    if (minutes < 0) {
        minutes = 25;
        seconds = 0;
    }

    document.getElementById("time").innerHTML = pad(minutes) + ':' + pad(seconds);
    seconds--;
}

function pad(number)
{
    if ( number < 10)
    {
        return ( '0' + number);
    }
    else {
        return number;
    }
}

var interval;

function start() {
    clearInterval(interval);

    
    interval = window.setInterval(countdown, 1000);



}

function stop() {

    clearInterval(interval);

}

document.getElementById("time").innerHTML = minutes + ':' + pad(seconds);


function reset() {
        minutes = 25;
        seconds = 0;
    stop();
    document.getElementById("time").innerHTML = minutes + ':' + pad(seconds);
    
}

