let inputFromFormPhrase = document.querySelector("#palyndrome");
let button = document.querySelector("button");
let resultCheck = document.querySelector("#isPalyndrome");

const checkPalyndrome = (array, reverseArray) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === reverseArray[i]) {
      resultCheck.innerHTML = "That is palyndrome";
    } else resultCheck.innerHTML = "That is no palyndrome";
  }
};

/*
//Checking if a sentence is a palyndrome
//for example - Poor Dan is in a droop
//it works but I want more fancy

let submitButton = (event) => {
  event.preventDefault();
  phraseToCheck = inputFromFormPhrase.value.replaceAll(" ", "").toLowerCase();
  array = phraseToCheck.split("");
  reverseArray = array.slice("").reverse("");
  checkPalyndrome(array, reverseArray);
  console.log(array);
  console.log(reverseArray);
};
button.addEventListener("click", submitButton); */

//more fancy palyndrome
//for example - Poor Dan is,,, in a droop. Sit on a $!potato pan, Otis.

const takeSentencesFromPalyndrome = () => {
  let arrayAllSentences = phraseToCheck
    .replaceAll(/[,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .split(".");

  console.log(arrayAllSentences);

  for (let k = 0; k < arrayAllSentences.length; k++) {
    arraySeparateSentence = arrayAllSentences[k];
  }
};

let submitButton = (event) => {
  event.preventDefault();
  phraseToCheck = inputFromFormPhrase.value.replaceAll(" ", "").toLowerCase();
  takeSentencesFromPalyndrome();

  arrayLetters = arraySeparateSentence.split("");
  reverseArrayLetters = arrayLetters.slice("").reverse("");
  checkPalyndrome(arrayLetters, reverseArrayLetters);
  console.log(arrayLetters);
  console.log(reverseArrayLetters);
};
button.addEventListener("click", submitButton);
