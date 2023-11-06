const header = document.querySelector("header");
const playerXBtn = document.querySelector(".playerX");
const playerOBtn = document.querySelector(".playerO");
const main = document.querySelector("main");
const player = document.querySelector(".player");
const boxs = document.querySelectorAll(".area div");
const result = document.querySelector(".result");
const resultText = document.querySelector(".result-text");
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
    // player.classList.add("active")
}

//add function to every button
boxs.forEach(box => {
    box.setAttribute("onclick", "clickedBox(this)")
})


let playerXIcon = 'X'
let playerOIcon = 'O'
let playerSign = 'X'

function clickedBox(element) {
    if(player.classList.contains("active")) {
        playerSign = 'O'
        element.innerHTML = `<span>${playerOIcon}</span>`
        player.classList.remove("active")
        element.setAttribute("id", playerSign)
    } else {
        playerSign = 'X'
        element.innerHTML = `<span>${playerXIcon}</span>`
        player.classList.add("active")
        element.setAttribute("id", playerSign)
    }
    selectWinner()
    element.style.pointerEvents = "none"
    setTimeout(()=> {
        bot()
    }, 900)
}


//function bot
function bot() {
    let array = [] 
    boxs.forEach((box, index) => {
        if(box.childElementCount == 0) {
            array.push(index)
        }
    })
    let randomBox = array[Math.floor(Math.random() *array.length)]
    if(array.length > 0) {
        if(player.classList.contains('active')) {
            playerSign = 'O'
            boxs[randomBox].innerHTML = `<span>${playerOIcon}</span>`
            player.classList.remove("active")
            boxs[randomBox].setAttribute("id", playerSign)
        } else {
            boxs[randomBox].innerHTML = `<span>${playerXIcon}</span>`
            player.classList.add("active")
            playerSign = 'X'
            boxs[randomBox].setAttribute("id", playerSign)
        }
    }
    selectWinner()
    boxs[randomBox].style.pointerEvents = "none"
}

function getId(id) {
    return document.querySelector('.box' + id).id
}

function checkWinner(val1, val2, val3, sign) {
    if(getId(val1) == sign && getId(val2) == sign && getId(val3) == sign) {
        return true
    }
}

//select winner
function selectWinner() {
    if(checkWinner(1, 2, 3, playerSign) || checkWinner(4, 5, 6, playerSign) || checkWinner(7, 8, 9, playerSign) || checkWinner(1, 4, 7, playerSign) || 
    checkWinner(2,5, 8, playerSign) ||  checkWinner(3, 6, 9, playerSign) ||  checkWinner(3, 5, 7, playerSign) ||  checkWinner(1, 5, 9, playerSign)){
        setTimeout(() => {
            main.classList.remove("show")
            result.classList.add("show")
        }, 800)
        resultText.innerHTML = `Player ${playerSign} won the game!`

    } else {
        if (getId(1) != "" && getId(2) != "" && getId(3) != "" && getId(4) != "" && getId(5) != "" && getId(6) != "" && getId(7) != "" && getId(8) != "" && getId(9) != "" ) {
            setTimeout(() => {
                main.classList.remove("show")
                result.classList.add("show")
            }, 800)
            resultText.innerHTML = `Match has been drawn!`
        }
    }
    
}


//replay function
replayBtn.addEventListener("click", replay)
function replay() {
    location.reload()
}

