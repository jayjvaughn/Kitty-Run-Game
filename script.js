const kitty = document.querySelector(".kitty");
const obstacle = document.querySelector(".obstacle");

function jump(){
    kitty.classList.add("jumpAnimation");
    setTimeout(function(){
    kitty.classList.remove("jumpAnimation");  
    }, 500)
}

setInterval(() => {
const kittyTop = parseInt(window.getComputedStyle(kitty).getPropertyValue('top'));
const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
},50);



