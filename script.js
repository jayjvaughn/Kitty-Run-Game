const kitty = document.querySelector(".kitty");
const crab = document.querySelector(".crab");
const girl = document.querySelector(".girl");
const bestScore = document.querySelector(".bestScore");
const currentScore = document.querySelector(".currentScore");
const myBtn = document.querySelector(".myBtn");
const youLose = document.querySelector(".youLose");
const finalScore = document.querySelector(".scoreDiv")
let score = 0;


function jump(){
    kitty.classList.add("jumpAnimation");
    setTimeout(function(){
    kitty.classList.remove("jumpAnimation");  
    }, 500)
}; 

        // SCORE SECTION
function scoreIntervalFunction(){
currentScore.textContent = "Score: " + score;
    setInterval(() => {
        score++;
    }, 1000);
}

const gameScore = setInterval(scoreIntervalFunction);
function stopScoreCounter(){
    clearInterval(gameScore);
}
//    might add later  

// let highscore = localStorage.getItem('bestScore');
// function gameHighScore(){
//     bestScore.textContent = highscore = "HI " + score;
//     localStorage.setItem('highscore', score);
// }
// function highScoreUpdate(){
//     if(score > highscore){
//         gameHighScore(score);
//     }
// }

    // RESTART SECTION
    function restart(){
        // might add later
        // clearInterval(gameScoreCount);
        stopScoreCounter()
        youLose.style.visibility = 'visible';


    }

    function playAgain(){
        location.reload(play());
    }

        // GAMEPLAY
function play(){setInterval(() => {
const kittyBottom = parseInt(window.getComputedStyle(kitty).getPropertyValue('bottom'));
const crabLeft = parseInt(window.getComputedStyle(crab).getPropertyValue('left'));
const girlLeft = parseInt(window.getComputedStyle(girl).getPropertyValue('left'));

if (crabLeft < 140 && crabLeft > 0 && kittyBottom < 168){
    restart();

    }
    else if (girlLeft < 140 && girlLeft > 0 && kittyBottom < 219){
    restart();
    }
    else{
        gameScore()
    
    } 
},50);
};


function game(){
    play();
    gameScore();
};
game(); 
