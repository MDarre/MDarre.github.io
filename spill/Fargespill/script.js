let squares = document.querySelectorAll(".square")
let answerDisplay = document.getElementById('answerDisplay')
let colorDisplay = document.getElementById('colorDisplay')
let generateBtn = document.querySelectorAll('button')

let N = squares.length
let colors = []
let pickedColor = randomColor()

for(let i = 0; i<N; i++){
squares[i].addEventListener("click",correct)
}

function randomColor(){
    for( let i = 0; i<N; i++){
        let r = Math.floor(Math.random()*256)
        let g = Math.floor(Math.random()*256)
        let b = Math.floor(Math.random()*256)

        let c =`rgb(${r},${g},${b})`
        colors.push(c)
    }
    
}

function assignColors(){
   for(let i = 0; i<N; i++){
    squares[i].style.background = colors[i]
    squares[i].setAttribute("data-color",colors[i])
   }
}

function pickRandomColor(){
    let randomIndex = Math.floor(Math.random()*N)
    let randomColor = colors[randomIndex]
    colorDisplay.textContent = randomColor
    return randomColor
}

function correct(e){
    console.log(e.target)

    if (e.target.dataset.color == pickedColor){
        answerDisplay.textContent = "Correct"
    }
    else{
        answerDisplay.textContent = "Wrong"
        e.target.classList.add(".fade")
    }
}

assignColors()
randomColor()
pickRandomColor()
