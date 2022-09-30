// start button
//fill-in-the-blank section
//  user tries to guess letters
//game timer
//win = guessed all the letters
//lose = time runs out

var startButtonElement = document.querySelector(".start-button");
var targetWordSectionElement = document.querySelector(".target-word-section");

var startButton;
var fillIn;
var secondsLeft;
var resultsTracker;
var playAgain;
var targetWord = "storage";
var lettersLeft;

//We want the user to be able to play a game when they push Start Game
function startGame() {
    secondsLeft = 20;
    setTimer();

    lettersLeft = targetWord.length;
    targetWordSectionElement.innerHTML = "";
    loadWord();
    document.addEventListener("keydown", keyListener);

    var timerInterval = setInterval(function() {
        secondsLeft--;
        setTimer();

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

function keyListener(event) {
    var keyPress = event.key;
    for (var i = 0; i < targetWord.length; i++) {
        if (targetWord[i] === keyPress) {
            var letterElement = document.getElementById("letter-"+i);
            var state = letterElement.getAttribute("data-state");
            
            if (state === "hidden") {
                letterElement.textContent = keyPress;
                lettersLeft--;
                letterElement.setAttribute("data-state", "visible");
            }
        }
    }

    console.log("Letters left: " + lettersLeft);

    if (lettersLeft === 0) {
        gameOver();
    }
}

function gameOver() {
    alert("Game Over");
}

/* 
 *  Loads the word into the word display.
 *  In order to display the word, we need to do the following:
 *  1. Create the root element, give it class target-word
 *  2. For each letter:
 *      a. Create a li element
 *      b. Set the content equal to the letter
 *      c. Set the class equal to letter
 *      d. Add the li element to the target-word we are creating
 *  3. Add the target-word to the document
 * 
 */
function loadWord() {
    var elementToAdd = document.createElement("ul");
    elementToAdd.className = "target-word";

    for (var i = 0; i < targetWord.length; i++) {
        var liElToAdd = document.createElement("li");
        liElToAdd.textContent = "_";
        liElToAdd.className = "letter";
        liElToAdd.id = "letter-" + i;
        liElToAdd.setAttribute("data-state", "hidden");
        liElToAdd.setAttribute("data-letter", targetWord[i]);

        elementToAdd.appendChild(liElToAdd);
    }

    console.log(elementToAdd);

    targetWordSectionElement.appendChild(elementToAdd);
}

function setTimer() {
    var timeElement = document.getElementById("time");
    timeElement.textContent = secondsLeft;
}

//We want time to count down from 10 when the game starts
//We want the user to be able to guess letters until time runs out
//We want to keep track of wins and losses over multiple games
//  local storage
//We want the user to have the option to play again

startButtonElement.addEventListener("click", startGame)