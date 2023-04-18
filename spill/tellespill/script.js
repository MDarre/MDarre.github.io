let topEl = document.getElementById('topp')
let leftEl = document.getElementById('left')
let rightEl = document.getElementById('right')
let leftEl5 = document.getElementById('left5')
let rightEl5 = document.getElementById('right5')
let btnEl = document.getElementById('nullstill')

if(!localStorage.tall){
    localStorage.tall = 0
}

topEl.innerHTML = localStorage.tall
btnEl.addEventListener('click', nullstillNumber)
leftEl.addEventListener('click',decreasNumber)
rightEl.addEventListener('click',increaseNumber)
leftEl5.addEventListener('click',decreasNumber5)
rightEl5.addEventListener('click',increaseNumber5)

function decreasNumber(){
    console.log("Minker")
    localStorage.tall = Number(localStorage.tall)-1

    topEl.innerHTML = localStorage.tall
}
function decreasNumber5(){
    console.log("Minker")
    localStorage.tall = Number(localStorage.tall)-5

    topEl.innerHTML = localStorage.tall
}

function increaseNumber(){
    console.log("Øker")
    localStorage.tall = Number(localStorage.tall)+1

    topEl.innerHTML = localStorage.tall
}

function increaseNumber5(){
    console.log("Øker")
    localStorage.tall = Number(localStorage.tall)+5

    topEl.innerHTML = localStorage.tall
}

function nullstillNumber(){
   localStorage.tall = 0

   topEl.innerHTML = localStorage.tall
}