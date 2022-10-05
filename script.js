let timer;
let miliseconds = document.querySelector("div .miliseconds");
let seconds = document.querySelector("div .seconds");
let minutes = document.querySelector("div .minute");
let hour = document.querySelector("div .hour");
function comecar(){
    timer = setInterval(comecarCrono,10);
}

function parar(){
    clearInterval(timer);
}

function zerar(){
    miliseconds.innerHTML = 0;
    seconds.innerHTML = 0;
    minutes.innerHTML = 0;
    hour.innerHTML = 0;
}

function comecarCrono(){
    let numMiliseconds = Number(miliseconds.innerHTML);
    let numSeconds = Number(seconds.innerHTML);
    let numMinutes = Number(minutes.innerHTML);
    let numHours = Number(hour.innerHTML);
    numMiliseconds++;
    miliseconds.innerHTML = numMiliseconds;
    if(numMiliseconds == 100){
        miliseconds.innerHTML = 0;
        numSeconds++;
        seconds.innerHTML = numSeconds;
    }
    if(numSeconds == 60){
      
        seconds.innerHTML = 0;
        numMinutes++;
        minutes.innerHTML = numMinutes;
    }
    if(numMinutes == 60){
        console.log("ola")
        minutes.innerHTML = 0;
        numHours++;
        hour.innerHTML = numHours;
    }
}

function time(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let mili = d.getMilliseconds();

    let tempo = `${m} : ${s} : ${mili}`

    document.querySelector("#tempo").innerHTML = tempo;
}