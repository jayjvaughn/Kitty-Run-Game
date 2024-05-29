const kitty = document.querySelector(".kitty");

function jump(){
    kitty.classList.add("jumpAnimation");
    setTimeout(function(){
    kitty.classList.remove("jumpAnimation");  
    }, 500)
}