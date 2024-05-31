const kitty = document.querySelector(".kitty");
const crab = document.querySelector(".crab");
const girl = document.querySelector(".girl");
const bestScore = document.querySelector(".bestScore");
const currentScore = document.querySelector(".currentScore");
const myBtn = document.querySelector(".myBtn");
const youLose = document.querySelector(".youLose");
let score = 0;


function jump(){
    kitty.classList.add("jumpAnimation");
    setTimeout(function(){
    kitty.classList.remove("jumpAnimation");  
    }, 500)
}; 

function play(){setInterval(() => {
// currentScore.textContent++;
const kittyBottom = parseInt(window.getComputedStyle(kitty).getPropertyValue('bottom'));
const crabLeft = parseInt(window.getComputedStyle(crab).getPropertyValue('left'));
const girlLeft = parseInt(window.getComputedStyle(girl).getPropertyValue('left'));

if (crabLeft < 140 && crabLeft > 0 && kittyBottom < 168){
score = 0;
    // youLose.style.visibility = 'visible'
    alert()
    }
    else if (girlLeft < 140 && girlLeft > 0 && kittyBottom < 219){
    youLose.style.visibility = 'visible'
    alert()    
    }
    else{
    score++;
    currentScore.textContent = score;
    bestScore.textContent = 'Hi ' + score;
    
    } 
},50);

}
play();