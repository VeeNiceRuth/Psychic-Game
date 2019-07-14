//the array of possible letter to choose from and its in the global scope which means that all functions at the bottom have access to all variables
var letterList = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var winCounter = 0;
var lossCounter= 0;
var guessesLeft = 9;

//this is the letter that the computer prints randomly
var chosenLetter = "";

//this is the letter the user guesses
var letterGuessed = "";


//when startGame() function is called, this block of code runs
function startGame() {

    //this will restart the guessesLeft to 9 
    guessesLeft = 9;

    //this makes the computer choose randomy from the letterList array
    var chosenLetter = letterList[Math.floor(Math.random() * letterList.length)];

    //this logs  it to our consol.log for debugging, the user wont be able to see this
    console.log(chosenLetter + " letter to guess");
    
}

//roundComplete function will run everything by comparing if the letter guessed was right or not
function roundComplete() {
    console.log("WinCounter: " + winCounter + " | LossCounter: " + lossCounter + " | GuessesLeft: " + guessesLeft);
    document.getElementById("guesses-left").innerHTML = guessesLeft;
 //if the letter guessed is the same as chosenLetter then it will increase the winCounter by 1, alert "you win!" and record it in the html
  if (letterGuessed === chosenLetter) {
    winCounter++;
    alert("you win!");
    document.getElementById("win-counter").innerHTML = winCounter;
    startGame();
  }
// if their are no more guessesLeft is set to 0 then the lossCounter will increase by 1 alert "you lose" and record it in the loss counter in the html
else if (guessesLeft === 0) {
    lossCounter++;
    alert("You lose");
    document.getElementById("loss-counter").innerHTML = lossCounter;
//this will then call the startGame function and run the function again
    startGame();

  }

}
//this calls the startGame() function
startGame();

//when the user presses a key and realeases it, it will log it into my console
document.onkeyup = function(event) {
    letterGuessed = String.fromCharCode(event.which).toLowerCase();
    console.log(letterGuessed);
    guessesLeft--;
    roundComplete();

}
