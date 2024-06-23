const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let HOUR = new Date().getHours();
    let MINUTES = new Date().getMinutes();
    let SECONDS = new Date().getSeconds();
    let ampm = "AM";

    if(HOUR > 12){
        HOUR-= 12;
        ampm = "PM";
    }

    HOUR = HOUR < 10 ? "0" + HOUR : HOUR;
    MINUTES = MINUTES < 10 ? "0" + MINUTES : MINUTES;
    SECONDS = SECONDS < 10 ? "0" + SECONDS : SECONDS;

    hourEl.innerText = HOUR;
    minuteEl.innerText = MINUTES;
    secondEl.innerText = SECONDS;
    ampmEl.innerText = ampm;
    setTimeout(()=>{
        updateClock();
    }, 1000)
}

updateClock();