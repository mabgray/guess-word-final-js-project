//to grab the ul where user guessed letters goes
const userGuessedLetters = document.querySelector("ul");
//to grab button with 'guess' text
const guessButton = document.querySelector(".guess");
//to grab user input letter
const letterGuess = document.querySelector(".letter");
//to grab empty <p> were word in progress is
const wordInProgress = document.querySelector(".word-in-progress");
//to grab the  <p> where guesses left show
const guessesRemain = document.querySelector(".remaining");
//to grab the <span> area where guesses where remaining guesses appear
const guessesRemainSpan = document.querySelector("span");
//grabs hidden play again hidden button
const hiddenbtn = document.querySelector(".play-again");

const word ="magnolia";

const lettersBecomeDots = function(word){
    //  convert string to an array
    let wordToArr = word.toUpperCase().split('');
    let arrOfPushedDots = [];
    wordToArr.forEach(character => {
        arrOfPushedDots.push("●");
    });
    let dotsBecomingLetters = arrOfPushedDots.join("");
}

const clickGuessBtn = guessButton.addEventListener("click", fuction(e){
    e.preventDefault();
    let valueOfInput = e.target.value


});







