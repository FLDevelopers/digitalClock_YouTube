let clock = document.getElementById('clock');

setInterval(updateTime, 1000);

function updateTime(){
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let timeString  = hours + " : " + minutes + " : " + seconds;

    clock.innerHTML = timeString;
}