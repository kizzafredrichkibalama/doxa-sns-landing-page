/*==========================================
DOXA SNS COUNTDOWN
==========================================*/

// ======================================================
// SET YOUR SNS LAUNCH DATE HERE
// ======================================================

// Example:
// October 7, 2026 at 16:00 UTC

const launchDate = new Date("2026-08-11T16:00:00").getTime();

// ======================================================

const heroDays = document.getElementById("days");
const heroHours = document.getElementById("hours");
const heroMinutes = document.getElementById("minutes");
const heroSeconds = document.getElementById("seconds");

const launchDays = document.getElementById("launchDays");
const launchHours = document.getElementById("launchHours");
const launchMinutes = document.getElementById("launchMinutes");
const launchSeconds = document.getElementById("launchSeconds");

function pad(number){
    return number.toString().padStart(2,"0");
}

function updateCountdown(){

    const now = new Date().getTime();

    const distance = launchDate - now;

    if(distance <= 0){

        clearInterval(timer);

        updateElements(0,0,0,0);

        return;
    }

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor(
        (distance%(1000*60*60*24))/
        (1000*60*60)
    );

    const minutes = Math.floor(
        (distance%(1000*60*60))/
        (1000*60)
    );

    const seconds = Math.floor(
        (distance%(1000*60))/1000
    );

    updateElements(days,hours,minutes,seconds);

}

function updateElements(days,hours,minutes,seconds){

    if(heroDays){

        heroDays.textContent = pad(days);

        heroHours.textContent = pad(hours);

        heroMinutes.textContent = pad(minutes);

        heroSeconds.textContent = pad(seconds);

    }

    if(launchDays){

        launchDays.textContent = pad(days);

        launchHours.textContent = pad(hours);

        launchMinutes.textContent = pad(minutes);

        launchSeconds.textContent = pad(seconds);

    }

}

updateCountdown();

const timer = setInterval(updateCountdown,1000);