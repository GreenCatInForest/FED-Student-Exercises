let inputFromFormPhrase = document.querySelector("#palyndrome");
let button = document.querySelector("button");
let resultCheck = document.querySelector("#isPalyndrome");

const checkPalyndrome = (array, reverseArray) => {
  /*  // checking if arrays works

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  for (let i = 0; i < reverseArray.length; i++) {
    console.log(reverseArray[i]);
  } */

  for (let i = 0; i < array.length; i++) {
    if (array[i] === reverseArray[i]) {
      resultCheck.innerHTML = "That is palyndrome";
    } else resultCheck.innerHTML = "That is no palyndrome";
  }
};

let submitButton = (event) => {
  event.preventDefault();
  phraseToCheck = inputFromFormPhrase.value;
  array = phraseToCheck.split("");
  reverseArray = array.slice("").reverse("");
  checkPalyndrome(array, reverseArray);
};
button.addEventListener("click", submitButton);
