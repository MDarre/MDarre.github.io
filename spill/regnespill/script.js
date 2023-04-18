// Henter elementer fra DOM
let oppgaveEl = document.querySelector('#oppgave')

let svarEl = document.querySelector('#svar')

let sjekkBtn = document.querySelector('#sjekk')

let oppgaveBtn = document.querySelector('#nyOppgave')

let regneartEl = document.querySelector('h2')

let resultatEl = document.getElementById('resultat')

let scoreEl = document.getElementById('score')




// Legger til en lytter til knappen som sjekker svaret
sjekkBtn.addEventListener("click", sjekkSvar)
oppgaveBtn.addEventListener("click",lagOppgave)
svarEl.addEventListener('keydown',sjekkSvar)
svarEl.addEventListener('input',sjekkSvar,)


// Deklarerer variabel for fasit
let fasit
let score = 0

// Funksjon som lager ny oppgave
function lagOppgave(){
    // Lager tilfeldig heltall fra og med 0 til og med 10
    
    
    let  regneart = regneartEl.innerHTML
    // Skriver oppgaven inn i HTML
   
    if(regneart == "Addisjon"){
        let a = Math.floor(Math.random()*101)
        let b = Math.floor(Math.random()*101)
        oppgaveEl.innerHTML = `${a} + ${b} = ?`
        
        fasit = a+b
    }
    else if(regneart == "Multiplikasjon"){
        let a = Math.floor(Math.random()*11)
        let b = Math.floor(Math.random()*11)
        oppgaveEl.innerHTML = `${a} x ${b} = ?`

        fasit = a*b
    }
    else if(regneart == "Subtraksjon"){
        let a = Math.floor(Math.random()*101)
        let b = Math.floor(Math.random()*101)
        oppgaveEl.innerHTML = `${a} - ${b} = ?`

        fasit = a-b
    }
    // Regner ut fasit
}


// Kaller funksjonen
lagOppgave()

// Funksjon som sjekker om vi har rett svar
function sjekkSvar(e){
    console.log("Sjekker svaret")
    //if(e.key == "Enter" ||e.target.id == "sjekk"){ 
    if(true){ 
    // SJekker om brukeren har skrevet noe i input ellementet 
    if (svarEl.value !=""){
    // Henter svaret fra brukeren
      let svar = Number(svarEl.value)

    // Sjekker om svaret er korrekt
        if(svar === fasit){
        //document.getElementById("resultat").innerHTML="Riktig svar!";
        lagOppgave()
        svarEl.value=""
        svarEl.style ="background-color: lightgreen;"
        score+=1
        scoreEl.innerHTML = score
        

    }
        /* else {
        //document.getElementById("resultat").innerHTML="Feil svar...";
        svarEl.style ="background-color: red;"
        svarEl.value="" */
    
    
     
    }
}
}



let startingMinutes = 2
let time = startingMinutes * 60

let countdownEL = document.getElementById('countdown')

setInterval(updateCountdown, 1000)

function updateCountdown(){
    let minutes = Math.floor(time/60)
    let seconds = time % 60

    seconds = seconds <10 ? '0' + seconds : seconds

    countdownEL.innerHTML = `${minutes}:${seconds}`
    time--;
} 

