let mosquito = document.querySelector(".mosquito-img");
let gameSatus = document.querySelector(".game-status")
let isGameStarted=false;
let hitCount=0;

const startGame=()=>{    
 isGameStarted=true;
 hitCount=0;
 document.querySelector(".total").innerText=hitCount
 gameSatus.innerText="GAME STARTED 🎉";
 let id=setInterval(()=>{
 gameSatus.innerText="";
 let i = Math.floor(Math.random()*90)+1;
 let j = Math.floor(Math.random()*90)+1;
 mosquito.style.left = i+"%";
 mosquito.style.top = j+"%";
},500);

setTimeout(()=>{
    clearTimeout(id);
    isGameStarted=false;
    gameSatus.innerText="GAME OVER 😯";
},30000)
}

const hitMosquito=()=>{
 if(isGameStarted){
 hitCount++;
 document.querySelector(".total").innerText=hitCount;
 }
}