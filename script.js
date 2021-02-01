// define state logic
let board;
let xToMove = false;
let winner;

const moveIndicator = document.querySelector("#moveIndicator");
const container = document.querySelector(".container");
const resetButton = document.querySelector("#resetButton")

const endMessage = document.querySelector("#endMessage");
const endMessageBox = document.querySelector("#endMessageBox");

container.addEventListener("click",processMove);
resetButton.addEventListener("click",resetGame)

const children = container.children;



let gameOver;

function initializeGame(){
    board = {
        box1:false,
        box2:false,
        box3:false,
        box4:false,
        box5:false,
        box6:false,
        box7:false,
        box8:false,
        box9:false
    }
    gameOver = false;
}

function switchMove(){
    console.log("switchToMove");
    console.log(xToMove);
    
    txt = moveIndicator.innerText;
    if(xToMove){
        moveIndicator.innerText = "X to Move";
    } else if (!xToMove){
        moveIndicator.innerText = "Y to Move";
    } else{
        alert("exception")
    }

    xToMove = !xToMove;

}

function checkForVictory(){

    console.log(board)

    if(
    (board.box1 === "X" && board.box2 === "X" && board.box3 === "X") ||
    (board.box4 === "X" && board.box5 === "X" && board.box6 === "X") ||
    (board.box7 === "X" && board.box8 === "X" && board.box9 === "X") ||
    (board.box1 === "X" && board.box4 === "X" && board.box7 === "X") ||
    (board.box2 === "X" && board.box5 === "X" && board.box8 === "X") ||
    (board.box3 === "X" && board.box6 === "X" && board.box9 === "X") ||
    (board.box1 === "X" && board.box5 === "X" && board.box9 === "X") ||
    (board.box3 === "X" && board.box5 === "X" && board.box7 === "X")    
    ){
displayEndScreen("X");
console.log("X won")
return(true);

    }
    else if (
    (board.box1 === "Y" && board.box2 === "Y" && board.box3 === "Y") ||
    (board.box4 === "Y" && board.box5 === "Y" && board.box6 === "Y") ||
    (board.box7 === "Y" && board.box8 === "Y" && board.box9 === "Y") ||
    (board.box1 === "Y" && board.box4 === "Y" && board.box7 === "Y") ||
    (board.box2 === "Y" && board.box5 === "Y" && board.box8 === "Y") ||
    (board.box3 === "Y" && board.box6 === "Y" && board.box9 === "Y") ||
    (board.box1 === "Y" && board.box5 === "Y" && board.box9 === "Y") ||
    (board.box3 === "Y" && board.box5 === "Y" && board.box7 === "Y")    
    ) {
displayEndScreen("Y");
console.log("Y won")
return(true);

    }

    else if(
        (board.box1 !== false) &&
        (board.box2 !== false) &&
        (board.box3 !== false) &&
        (board.box4 !== false) &&
        (board.box5 !== false) &&
        (board.box6 !== false) &&
        (board.box7 !== false) &&
        (board.box8 !== false) &&
        (board.box9 !== false)
    ){
        console.log("If you're not first, you're last. YOU BOTH LOSE")
        displayEndScreen("Both Lose")
return(true);
    }
    
    else{

        console.log("game is determined to be ongoing")
        return(false)
    }

   
}

function processMove(event){

    const id = event.target.id;

    const className = event.target.className;
    if (className === "box" && board[id]===false && gameOver ===false){

    const id = event.target.id;
    
    if(!xToMove){
        board[id] = "X";
    } else if(xToMove){
        board[id] = "Y";
    }
    
    



    updateScreen(event);

    console.log("move has been processed")
    gameOver = checkForVictory();

    if(gameOver === true){
        displayEndScreen();
    } else{
        switchMove();
    }
}

}

function updateScreen(event){
    const id = event.target.id;
    const Box = document.getElementById(id);

    if(xToMove ){
        Box.innerText = "Y";
    } else if(!xToMove){
        Box.innerText = "X";
    }
}

function displayEndScreen(){

}




function resetGame(){

    for (i = 0; i < children.length; i++) {

    
      const child = children[i];

      if(child.className === "box"){
      console.log(child)
      child.innerText = ""

      }
    }

initializeGame();

}

function displayEndScreen(result){
if(result === "X"){
endMessage.innerText = "X Won -- Congrats"
} else if(result === "Y"){
    endMessage.innerText = "Y Won -- Congrats"
} else if (result === "Both Lose"){
    endMessage.innerText = "If you're not first, you're last. You both lose."

}
endMessageBox.style.visibility = "visible";

}

function logSomething(){
    console.log("logged");
}

initializeGame();