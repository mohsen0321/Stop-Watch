const minuteslabel = document.getElementById('minutes');
const secondslabel = document.getElementById('seconds');
const millisecondslabel = document.getElementById('milliseconds');

const startButton = document.getElementById('startbtn');
const stopButton = document.getElementById('stopbtn');
const pauseButton = document.getElementById('pausebtn');
const resetButton = document.getElementById('resetbtn');

const laplist = document.getElementById('laplist');

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click',  stopTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer(){
    interval = setInterval(updateTimer,10);
    startButton.disabled = true;
}

function stopTimer(){
    clearInterval(interval);
    addToLapList();
    resetTimerData();
    stopButton.disabled = true;
    if(stopButton.disabled ==true){
        startButton.disabled = false;
        stopButton.disabled=false;
    }else{
        stopButton.disabled=true;
    }
    
}

function pauseTimer(){
    clearInterval(interval);
    pauseButton.disabled=true;
    if(pauseButton.disabled ==true){
        startButton.disabled = false;
        pauseButton.disabled=false;
    }else{
        resetButton.disabled=true;
    }
}        
function resetTimer(){
    clearInterval(interval);
    resetTimerData();
    resetButton.disabled=true;
    if(resetButton.disabled ==true){
        startButton.disabled = false;
        resetButton.disabled=false;
    }else{
    resetButton.disabled=false;
    }
}
function updateTimer(){
    milliseconds++;
    if(milliseconds === 100){
        milliseconds = 0;
        seconds++;
    if(seconds === 60){
        seconds=0;
        minutes++;
    }
    }
    displayTimer();
}
function  displayTimer(){
    millisecondslabel.textContent = padTime(milliseconds);
    secondslabel.textContent = padTime(seconds);
    minuteslabel.textContent= padTime(minutes);
}
function padTime(time){
        return time.toString().padStart(2, '0');
}
function resetTimerData(){
    minutes=0;
    seconds=0;
    milliseconds=0;
    displayTimer();
}
function addToLapList(){
    const LapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
    const ListItem =  document.createElement('li')
    ListItem.innerHTML = `<span> ${laplist.childElementCount +1} : </span>${LapTime}`;
    laplist.appendChild(ListItem);
}

