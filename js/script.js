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
const playAgainButton = document.querySelector(".play-again");
//this is where messages to user displays
const message = document.querySelector(".message");
//magnolia is the starting word to test game unitl we fetch words from a hosted file
let word ="mag";
//this array holds all the user's guesses 
const guessedLetters= [];
let remainingGuesses = 8;


const getWord = async function(){
    const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    console.log(response);
    const words = await response.text();
    //converts to an array
    const arrayOfWords = words.split("\n");
    console.log(arrayOfWords);
    console.log(typeof arrayOfWords);
    const randomIndex = Math.floor(Math.random() * arrayOfWords.length);
    word = arrayOfWords[randomIndex].trim();
    lettersBecomeDots(word);
    console.log(word);



}
getWord();


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
    
    wordInProgress.innerHTML = dotsBecomingLetters;
}
//lettersBecomeDots(word);
 guessButton.addEventListener("click", (e) => {
    e.preventDefault();
    let valueOfInput = letterGuess.value.toUpperCase();
    console.log(valueOfInput);
   
   let checktest = checkUserInput(valueOfInput);
   console.log(checktest);
    if(checktest){
        makeGuess(checktest);

    }
    letterGuess.value = "";


});


//makes sure user input is a leter and returns user letter if entered correctly
const checkUserInput = function(input){
    const acceptedLetter = /[a-zA-Z]/;
    //checking for empty input
     if(input.length === 0){
        message.innerHTML = "You must enter a letter to play."
//is input more than one letter
     } else if(input.length > 1){
        message.innerHTML = "Enter only one letter please."
     } else if(!input.match(acceptedLetter)) {
        message.innerHTML = "No numbers or special characters. Thank you"
     } else {
        return input;
     }


}

//this fuction captures and holds user input

const makeGuess = function(letterGuess){
   letterGuess = letterGuess.toUpperCase();
    if(guessedLetters.includes(letterGuess)){
        message.innerHTML = `you have already guessed ${letterGuess}`;
    } else {
        guessedLetters.push(letterGuess);
        console.log(guessedLetters);
        updatePageWithLetters();
        amountOfGueses(letterGuess);
        updateWordInProgress(letterGuess);
    }


}
//this shows the users guessed letters
const updatePageWithLetters = function(){
    userGuessedLetters.innerHTML = "";
    for(let char of guessedLetters){
        let li = document.createElement("li");
        li.innerText = char;
        userGuessedLetters.append(li);
    }

}

//function to update word in progres
//it relaces circles with letters
const updateWordInProgress = function(guessedLetter){
    let wordUpper = word.toUpperCase();
    let wordArray= wordUpper.split("");
    //this is taking the word in progress
    let dots = wordInProgress.innerHTML;
    //converting to an arr
    let dotsArray = dots.split("");

    for(let i = 0; i < wordArray.length; i++){
        if(wordArray[i] === guessedLetter){
            //this replaces the dot with a letter;
            dotsArray[i] = guessedLetter;

        }
    }
    dots = dotsArray.join("");
    wordInProgress.innerHTML = dots;
    didUserWin();

}




const amountOfGueses = function(guess){
const gameWord = word.toUpperCase();

    if(!gameWord.includes(guess)){
        message.innerText = `Nope. ${guess} doesn't work.`
        remainingGuesses -= 1;
    } else {
     message.innerText = `Yes ma'am. There is a(n) ${guess}. `
    }

    if(remainingGuesses === 0){
        message.innerHTML = `You lost. You have ${remainingGuesses} tries left. The correct word was <span class="highlight"> ${word} </span> .`;
        startOver();
    } else if(remainingGuesses === 1) {
        guessesRemainSpan.innerText = `${remainingGuesses} guess`
    } else {
        guessesRemainSpan.innerText = `${remainingGuesses} guesses`

    }


}

const didUserWin = function (){
    if(word.toUpperCase() === wordInProgress.innerText){
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>.`

        startOver();

    }
}

const startOver = function(){
    guessButton.classList.add("hide");
    guessesRemain.classList.add("hide");
    userGuessedLetters.classList.add("hide");
    playAgainButton.classList.remove("hide");

}

playAgainButton.addEventListener('click', function () {
    // resets elements
    message.classList.remove('win');
    guessedLetters = [];
    remainingGuesses = 6;
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
    guessedLettersElement.innerHTML = '';
    message.innerText = '';
    // gets a new word
    getWord();
  
    // makes everything looks like it started over
    guessLetterButton.classList.remove('hide');
    playAgainButton.classList.add('hide');
    remainingGuessesElement.classList.remove('hide');
    guessedLettersElement.classList.remove('hide');
  });
   



