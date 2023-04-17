let mosquito = document.querySelector(".mosquito-img");
let gameSatus = document.querySelector(".game-status");
let myAudio = document.getElementById("myAudio");
let cracker = document.querySelector(".cracker");
let startBtn = document.querySelector(".controls-start-btn");
let isGameStarted=false;
let hitCount=0;

const startGame=()=>{    
 isGameStarted=true;
 hitCount=0;
 startBtn.disabled=true;
 document.querySelector(".total").innerText=hitCount
 gameSatus.innerText="GAME STARTED 🎉";
 let id=setInterval(()=>{
 gameSatus.innerText="";
 cracker.style.display="none"
 let i = Math.floor(Math.random()*89)+1;
 let j = Math.floor(Math.random()*89)+1;
 mosquito.style.left = i+"%";
 mosquito.style.top = j+"%";
 cracker.style.left = i+"%";
 cracker.style.top = j+"%";

},700);

setTimeout(()=>{
    clearTimeout(id);
    isGameStarted=false;
    startBtn.disabled=false;
    gameSatus.innerText="GAME OVER 😯";
},30000)
}

const hitMosquito=()=>{
 if(isGameStarted){
 hitCount++;
 myAudio.play();
 cracker.style.display="block";
 document.querySelector(".total").innerText=hitCount;
 }
}