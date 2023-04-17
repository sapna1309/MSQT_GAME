let mosquito = document.querySelector(".mosquito-img");
let gameSatus = document.querySelector(".game-status");
let myAudio = document.getElementById("myAudio");
let cracker = document.querySelector(".cracker");
let isGameStarted=false;
let hitCount=0;

let i;
let j;

const startGame=()=>{    
 isGameStarted=true;
 hitCount=0;
 document.querySelector(".total").innerText=hitCount
 gameSatus.innerText="GAME STARTED 🎉";
 let id=setInterval(()=>{
 gameSatus.innerText="";
 cracker.style.display="none"
  i = Math.floor(Math.random()*90)+1;
  j = Math.floor(Math.random()*90)+1;
 mosquito.style.left = i+"%";
 mosquito.style.top = j+"%";
 cracker.style.left = i+"%";
 cracker.style.top = j+"%";

},1700);

setTimeout(()=>{
    clearTimeout(id);
    isGameStarted=false;
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