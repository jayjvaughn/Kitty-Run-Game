const kitty = document.querySelector(".kitty");
const crab = document.querySelector(".crab");
const obstacle = document.querySelector(".obstacles");

function jump(){
    kitty.classList.add("jumpAnimation");
    setTimeout(function(){
    kitty.classList.remove("jumpAnimation");  
    }, 500)
}

// write function to make crab run on timer
function slide(){
    crab.classList.add("slideAnimation");
};

// setInterval(() => {
// const kittyTop = parseInt(window.getComputedStyle(kitty).getPropertyValue('top'));
// const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
// const obstacleTop = parseInt(window.getComputedStyle(obstacle).getPropertyValue('top'));
// const obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));

// },50);




