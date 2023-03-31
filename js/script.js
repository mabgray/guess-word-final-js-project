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
//magnolia is the starting word to test game unitl we fetch words from a hosted file
const word ="magnolia";


//this function takes word converts it to an arrary. changes each letter to an "●".
//it takes the word veriable.
// "●" stays on screen untill correct letter is guessed



const lettersBecomeDots = function(word){
    //  convert string to an array
    let wordToArr = word.toUpperCase().split('');
    let arrOfPushedDots = [];
    wordToArr.forEach(character => {
        arrOfPushedDots.push("●");
    });

    // converts back to a string
    let dotsBecomingLetters = arrOfPushedDots.join("");
}

 guessButton.addEventListener("click", (e) => {
    e.preventDefault();
    let valueOfInput = letterGuess.value.toUpperCase();
    console.log(valueOfInput);
    valueOfInput = "";


});







