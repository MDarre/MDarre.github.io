const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let container = document.querySelector(".container")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    console.log("Hamburger")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

window.onscroll = () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");    
}
