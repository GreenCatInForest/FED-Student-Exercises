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
//it works

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

//Trying to check more fancy palyndrome
//for example - Poor Dan is,,, in a droop. Sit on a $!potato pan, Otis.

const checkSentencesFromPalyndrome = () => {
  arrayOfSentences = phraseToCheck
    .replaceAll(/[,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .split(".");
  console.log(arrayOfSentences);
};

let submitButton = (event) => {
  event.preventDefault();
  phraseToCheck = inputFromFormPhrase.value.replaceAll(" ", "").toLowerCase();
  checkSentencesFromPalyndrome();

  array = phraseToCheck.split("");
  reverseArray = array.slice("").reverse("");
  checkPalyndrome(array, reverseArray);
  console.log(array);
  console.log(reverseArray);
};
button.addEventListener("click", submitButton);
