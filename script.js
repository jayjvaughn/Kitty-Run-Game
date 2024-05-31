const kitty = document.querySelector(".kitty");
const crab = document.querySelector(".crab");
const girl = document.querySelector(".girl");

function jump(){
    kitty.classList.add("jumpAnimation");
    setTimeout(function(){
    kitty.classList.remove("jumpAnimation");  
    }, 500)
};

// write function to make crab run on timer
// function slide(){
//     crab.classList.add("slideAnimation");
//     girl.classList.add("slideAnimation");
// };

setInterval(() => {
const kittyBottom = parseInt(window.getComputedStyle(kitty).getPropertyValue('bottom'));
const crabLeft = parseInt(window.getComputedStyle(crab).getPropertyValue('left'));
const girlLeft = parseInt(window.getComputedStyle(girl).getPropertyValue('left'));

if (crabLeft < 140 && crabLeft > 0 && kittyBottom < 168){
    alert("Game Over");
    }
    else if (girlLeft < 140 && girlLeft > 0 && kittyBottom < 219){
        alert("Game Over");       
    }
},50);




