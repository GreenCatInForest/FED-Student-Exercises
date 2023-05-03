//sum simple

let sum = (a, b) => a + b;
console.log(sum(1, 2));

//more fancy
let addNumbers = () => {
  let a = parseInt(prompt("Please enter a number"), 10);
  let b = parseInt(prompt("Please enter a second number"), 10);
  let multiple = a * b;
  document.getElementById("resultAdd").innerHTML = `And it's: ${multiple}!`;
};

//even or odd
const evenOrOdd = () => {
  let b = parseInt(prompt("Please enter any number"), 10);
  let restOfDivisionCheck = b % 2 == 1 ? "odd" : "even";
  document.getElementById(
    "resultevenOrOdd"
  ).innerHTML = `The number is ${restOfDivisionCheck}!`;
};

//guess the number
const numberGuesser = () => {
  let computerGuess = Math.floor(Math.random() * 11);
  let userGuess = parseInt(prompt("Make your guess!"), 10);
  let resultGuessNumber;

  let userGuessValidation =
    0 <= userGuess && userGuess <= 10
      ? "Your number accepted!"
      : "Please choose a number between 0 and 10!";
  alert(userGuessValidation);

  if (userGuess > computerGuess) {
    resultGuessNumber = "number is too high";
  } else if (userGuess < computerGuess) {
    resultGuessNumber = "number is too low";
  } else {
    resultGuessNumber = "perfect guess!";
  }
  document.getElementById(
    "resultGuessNumber"
  ).innerHTML = `${resultGuessNumber}!`;
};

//3 & 5 devision

const devision3And5 = () => {

  let numberToCheck = parseInt(prompt("Let's do it"), 10);

  let devisionChecker = () => {
    if (((numberToCheck%3)=0)&&((numberToCheck%5)=0)){
      return devisionChecker = "FizzBuzz";
    }
    else if (((numberToCheck%3)=0)&&(((numberToCheck%5)!=0)))
    {return devisionChecker = "Fizz";}

    else if (((numberToCheck%3)!=0)&&(((numberToCheck%5)=0)))
    {return devisionChecker = "Buzz";}

    else {return `${numberToCheck} devides at something else`;}
  }

    document.getElementById(
      "resultChecker3And5"
    ).innerHTML = `Here is information about your number: ${devisionChecker}!`;
    
  }
