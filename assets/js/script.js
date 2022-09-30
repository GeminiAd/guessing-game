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
var timer;
var resultsTracker;
var playAgain;
var targetWord = "storage";

//We want the user to be able to play a game when they push Start Game
function startGame() {
    loadWord();
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
        liElToAdd.setAttribute("data-state", "hidden");
        liElToAdd.setAttribute("data-letter", targetWord[i]);
        elementToAdd.appendChild(liElToAdd);
    }

    console.log(elementToAdd);

    targetWordSectionElement.appendChild(elementToAdd);
}

//We want time to count down from 10 when the game starts
//We want the user to be able to guess letters until time runs out
//We want to keep track of wins and losses over multiple games
//  local storage
//We want the user to have the option to play again

startButtonElement.addEventListener("click", startGame)