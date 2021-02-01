var board = [
	'', '', '',
	'', '', '',
	'', '', ''
];
var turn = 'X';
var randNum = null
var eventValue = null
var changeImage = null
var randrand = null;


function initializeGame() {
	board = [
        '', '', '', 
        '', '', '', 
        '', '', '', 
    ];

    turn = "X";
}

function clicked(event) {
    
    eventValue = event.target.id
    
    if (board[eventValue - 1] == "X" || board[eventValue - 1] == "O") {
        return
    }
    
    board[eventValue - 1] = turn;

    changeValue = document.getElementById(event.target.id)
    changeValue.textContent = turn;
    console.log(changeValue.textContent);
    
    if (turn === "X") {
        turn = "O"
    } else if (turn === "O") {
        turn = "X"
    }
    
    winningCondition();
    
}

function winningCondition(){
   
    var isXwin = false;

    // X winning condition
        if (board[0] === "X" && board[1] === "X" && board[2] === "X") {
            setTimeout(function () {
            alert("X You Win");
        }, 10);
            isXwin = true
        } else if (board[3] === "X" && board[4] === "X" && board[5] === "X") {
            setTimeout(function () {
            alert("X You Win");
        }, 10);
            isXwin = true
        } else if (board[6] === "X" && board[7] === "X" && board[8] === "X") {
            setTimeout(function () {
            alert("X You Win");
        }, 10);
            isXwin = true
        } else if (board[0] === "X" && board[3] === "X" && board[6] === "X") {
            setTimeout(function () {
            alert("X You Win");
        }, 10);
            isXwin = true
        } else if (board[1] === "X" && board[4] === "X" && board[7] === "X") {
            setTimeout(function () {
            alert("X You Win");
        }, 10);
            isXwin = true
        } else if (board[2] === "X" && board[5] === "X" && board[8] === "X") {
            setTimeout(function () {
            alert("X You Win");
        }, 10);
            isXwin = true
        } else if (board[2] === "X" && board[4] === "X" && board[6] === "X") {
            setTimeout(function () {
            alert("X You Win");
        }, 10);
            isXwin = true
        } else if (board[0] === "X" && board[4] === "X" && board[8] === "X") {
            setTimeout(function () {
            alert("X You Win");
        }, 10);
            isXwin = true
        } 

        if (isXwin === true) {
            return;
        }

    var isOwin = false;

    // O winning condition
    if (board[0] === "O" && board[1] === "O" && board[2] === "O") {
        isOwin = true
        setTimeout(function () {
            alert("O You Win");
        }, 10);
    } else if (board[3] === "O" && board[4] === "O" && board[5] === "O") {
        isOwin = true
        setTimeout(function () {
            alert("O You Win");
        }, 10);
    } else if (board[6] === "O" && board[7] === "O" && board[8] === "O") {
        isOwin = true
        setTimeout(function () {
            alert("O You Win");
        }, 10);
    } else if (board[0] === "O" && board[3] === "O" && board[6] === "O") {
        isOwin = true
        setTimeout(function () {
            alert("O You Win");
        }, 10);
    } else if (board[1] === "O" && board[4] === "O" && board[7] === "O") {
        isOwin = true
        setTimeout(function () {
            alert("O You Win");
        }, 10);
    } else if (board[2] === "O" && board[5] === "O" && board[8] === "O") {    
        isOwin = true
        setTimeout(function () {
            alert("O You Win");
        }, 10);
    } else if (board[2] === "O" && board[4] === "O" && board[6] === "O") {
        isOwin = true
        setTimeout(function () {
            alert("O You Win");
        }, 10);
    } else if (board[0] === "O" && board[4] === "O" && board[8] === "O") {
        isOwin = true
        setTimeout(function () {
            alert("O You Win");
        }, 10);
    }



    // if ((board[0] === "X" || board[0] === "O") && 
    //     (board[1] === "X" || board[1] === "O") && 
    //     (board[2] === "X" || board[2] === "O") &&
    //     (board[3] === "X" || board[3] === "O") && 
    //     (board[4] === "X" || board[4] === "O") && 
    //     (board[5] === "X" || board[5] === "O") &&
    //     (board[6] === "X" || board[6] === "O") && 
    //     (board[7] === "X" || board[7] === "O") && 
    //     (board[8] === "X" || board[8] === "O")) {

    // TIE winning condition
    var loopResult = null
    var tempNumOne = 9

    for (let i=0; i < tempNumOne; i++) {

        loopResult = (board[i] === "X" || board[i] === "O")
        if (loopResult === false) {
            break
        }
    }
        

    if (isXwin === false && isOwin === false && loopResult === true) {
        setTimeout(function () {
            alert("TIE GAME!!");
        }, 10);
    
    }
}


function reset(){
    initializeGame();

    var tempNum = 10
    for (let i=1; i < tempNum; i++){
        changeValue = document.getElementById(i)
        changeValue.textContent = '';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var changeValue = document.getElementById("mainNum");

    randNum = document.querySelectorAll(".box").
    forEach(temp => temp.addEventListener('click', clicked));

    var resetGame = document.querySelector("#reset");
    resetGame.addEventListener('click', reset);
    initializeGame();
})


