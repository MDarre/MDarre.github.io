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
/* isIntersecting er en api man kan bruke for å sjekke om noe på siden er på skjermen eller ikke */




//observerer er et objekt, som tar inn en callbackfunc i konstruktøren

const observerer = new IntersectionObserver((entries) => {

        // for each er en lettere metode å loope gjennom -- entry blir hvert
    
        entries.forEach((entry)=>{
    
        if (entry.isIntersecting){
    
            entry.target.classList.add('show')
    
             }
    
             //else{entry.target.classList.remove('show')}
    
         })
    
    });
    
    /* liste med alle .hidden elementer */
    
    let hiddenEl = document.querySelectorAll('.hidden');
    
    hiddenEl.forEach((el) => observerer.observe(el));