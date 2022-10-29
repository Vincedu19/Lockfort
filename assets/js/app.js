//------- NAVBAR -------

let navbar = document.getElementById("navbar");
let navItem = document.getElementById("item");

window.onscroll = function(){
    if(window.pageYOffset > navbar.offsetTop){
        navbar.classList.add("sticky");
       
    }
    else{
        navbar.classList.remove("sticky");
       
    }
}