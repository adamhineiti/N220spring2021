var title = document.getElementById("title");
var resetGameButton = document.getElementById("reset-game-button");
var gameBoard = document.getElementById("game-board");
var boxes = document.getElementsByClassName("box");


var move
var gameOver

function StartGame() {
    // set all game values
    move = 1
    gameOver = false
    title.innerText = "Tic-Tac-Toe"

    for (i=0;i<boxes.length;i++) {
        var box = boxes[i]
        box.innerHTML = ""
        box.onclick = handleBoxClick
    }

    resetGameButton.onclick = StartGame
}
StartGame()


function handleBoxClick() {
    if (this.innerText != "" || gameOver) {
        return
    }

    // percent operator: returns remandor
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

    // if move is odd
    if ((move % 2) == 1) {
        this.innerText = "X"
    } else {
        this.innerText = "O"
    }


    var winner = lookForWinner()
    if (winner || move == 9) {
        if (winner) {
            title.innerText = winner + " Wins!"
        } else {
            title.innerText = "Draw!"
        }
        gameOver = true
        // show button
        resetGameButton.style.display = "inline-block"

    } else {
        // increate move count by 1
        move ++
    }
}


var possbileWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
]


function lookForWinner() {

    for (i = 0; i < possbileWins.length; i++) {
        
        var possbileWin = possbileWins[i]
        var contents = []

        for (ii = 0; ii < possbileWin.length; ii++) {
            var index = possbileWin[ii]
            contents.push(boxes[index].innerHTML)
        }

        // if all values in contents are the same (aka. there's a winner)
        if (contents[0] != "" && (contents[0] == contents[1] && contents[1] == contents[2])) {
            return contents[0]
        }
    }

}