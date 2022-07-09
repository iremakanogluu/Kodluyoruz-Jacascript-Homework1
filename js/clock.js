let userName = prompt("Adınız nedir?");

let info = document.querySelector("#myName");
info.innerHTML = userName;


function showTime(){
    var currentDate = new Date();
    let dayOfTheWeek ;
    switch(currentDate.getDay()){
        case 0: dayOfTheWeek= "Pazar" 
        break;
        case 1: dayOfTheWeek= "Pazartesi"
        break;
        case 2: dayOfTheWeek= "Salı"
        break;
        case 3: dayOfTheWeek= "Çarşamba"
        break;
        case 4: dayOfTheWeek= "Perşembe"
        break;
        case 5: dayOfTheWeek= "Cuma"
        break;
        case 6: dayOfTheWeek= "Cumartesi"
        break;
    }

    let currentTime = currentDate.toLocaleTimeString();
    let infoClock = document.querySelector("#myClock");
    infoClock.innerHTML = currentTime + " " + dayOfTheWeek;
}

showTime();
setInterval(showTime, 1000);