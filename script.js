const header = document.querySelector("header");
const playerXBtn = document.querySelector(".playerX");
const playerOBtn = document.querySelector(".playerO");
const main = document.querySelector("main");
const player = document.querySelector(".player");
const boxs = document.querySelectorAll(".box");
const result = document.querySelector(".result");
const replayBtn = document.querySelector(".replay");

playerXBtn.addEventListener("click", startGame)
playerOBtn.addEventListener("click", startGame)
//function start game
function startGame() {
    header.classList.add('hide');
    main.classList.add("show");
}

playerOBtn.addEventListener("click", choosePlayer)
function choosePlayer() {
    player.setAttribute("class", "player active")
}

//add function to every button
boxs.forEach(box => {
    box.setAttribute("onclick", "clickedBox(this)")
})


let playerXIcon = 'X'
let playerOIcon = 'O'


function clickedBox(element) {
    console.log(element)
    if(player.classList.contains("active")) {
        console.log("ooo")
        element.innerHTML = `${playerOIcon}`
        player.classList.remove("active")
    } else {
        element.innerHTML = `${playerXIcon}`
        player.classList.add("active")
    }
    element.style.pointerEvents = "none"
}



//replay function
replayBtn.addEventListener("click", replay)
function replay() {
    location.reload()
}

