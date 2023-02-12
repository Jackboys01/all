const startBtn = document.querySelector("#startbtn");
const pauseBtn = document.querySelector("#pausebtn");
const resetBtn = document.querySelector("#resetbtn");
const timeDisplay = document.querySelector("#timer");
let start = 0 ;
let elapsed = 0 ;
let interval;
let pause = true;
let sec = 0;
let min = 0 ;
let hrs = 0;

startBtn.addEventListener("click",() => {
   if(pause){
    pause = false;
    start = Date.now()-elapsed;
    interval = setInterval(updateTime,1000)
}

});

pauseBtn.addEventListener("click", () => {
if(!pause){
    pause=true;
    elapsed = Date.now()-start;
    clearInterval(interval);
}

});

resetBtn.addEventListener("click",()=>{
 start = 0 ;
 elapsed = 0 ;
 interval;
 pause = true;
 sec = 0;
 min = 0 ;
 hrs = 0;
 timeDisplay.textContent = "00:00:00";

});

function updateTime(){
    elapsed = Date.now()-start;

    sec = Math.floor((elapsed/1000) % 60);
    min = Math.floor((elapsed/(1000*60)) % 60);
    hrs = Math.floor((elapsed/(1000*60*60)) % 60);
   
    sec = convert(sec);
    min =convert(min);
    hrs = convert(hrs);
   
    timeDisplay.textContent = `${hrs}:${min}:${sec}`;

    function convert(unit){
        if((("0") + unit).length >2)
        {
            return unit;
        }
        else{
            return "0" + unit;
        }
    }
}