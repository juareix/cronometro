let minutes = 0;
let second = 0;
let milisecond = 0;
let hour = 0;
let txt = ''
let timer;

document.querySelector('.hour').innerHTML = `00 :`;
document.querySelector('.minutes').innerHTML = `00 : `;
document.querySelector('.second').innerHTML = ` 00`;


function cron(){
    if ((milisecond += 10) == 1000) {
        milisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minutes++;
    }

    if (minutes == 60) {
        minutes = 0;
        hour++;
    }
    document.querySelector('.hour').innerHTML = returnData(`${hour} :`);
    document.querySelector('.minutes').innerHTML = returnData(`${minutes} :`);
    document.querySelector('.second').innerHTML = returnData(`${second}`);
    
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}

function start(){
    timer = setInterval(cron, 10)
}

function pause(){
    clearInterval(timer)
}

function reset(){
    pause()
    milisecond = 0;
    minutes = 0;
    second = 0;
    hour = 0;
    document.querySelector('.hour').innerHTML = `00 :`;
    document.querySelector('.minutes').innerHTML = `00 : `;
    document.querySelector('.second').innerHTML = ` 00`;

}