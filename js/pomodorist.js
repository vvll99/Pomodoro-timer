/*var initialTime = Date.now();

function checkTime(){
  var timeDifference = Date.now() - initialTime;
  var formatted = convertTime(timeDifference);
  document.getElementById('time').innerHTML = '' + formatted;
}

function convertTime(miliseconds) {
  var totalSeconds = Math.floor(miliseconds/1000);
  var minutes = Math.floor(totalSeconds/60);
  var seconds = totalSeconds - minutes * 60;
  return minutes + ':' + seconds;
}
window.setInterval(checkTime, 100);*/

var minutes = 25;
var seconds = "00";

function countdown() {


    if (seconds <= 0) {
        minutes--;
        seconds = 59;
    }
    if (minutes <= 0) {
        minutes = 24;
        seconds = 59;
    }

    document.getElementById("time").innerHTML = minutes + ':' + seconds;
    seconds--;
}
//var interval = window.setInterval(countdown, 1000);
var interval;

function start() {
    clearInterval(interval);

    //console.log("started ..")
    //window.setInterval(countdown, 1000);
    interval = window.setInterval(countdown, 1000);



}

function stop() {

    clearInterval(interval);

}

document.getElementById("time").innerHTML = minutes + ':' + seconds;
seconds--;

function reset() {

}