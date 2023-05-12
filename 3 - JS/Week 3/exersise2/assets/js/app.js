// get number from the form
let button = document.querySelector("button");
let resultCheck = document.querySelector("#resultSum");
let arrayEvenDigitsFromNumber = [];
let arrayOddDigitsFromNumber = [];
let sumEven = 0;

const getNumber = () => {
  let inputToCheck = document.querySelector("#inputNumber").value;
  return (inputToNumber = parseInt(inputToCheck));
};

const getArraysFromNumber = () => {
  getNumber();

  for (i = 0; i < inputToNumber; i++) {
    let checkEven = i % 2;
    if (checkEven !== 0) {
      arrayOddDigitsFromNumber.push(i);
    }
    arrayEvenDigitsFromNumber.push(i);
  }
  console.log(arrayOddDigitsFromNumber);
  console.log(arrayEvenDigitsFromNumber);

  arrayEvenDigitsFromNumber.forEach((element) => {
    sumEven += element;
  });
};

let submitButton = (event) => {
  event.preventDefault();
  getArraysFromNumber();
  console.log(sumEven);
  resultCheck.innerHTML = `The sum of even numbers in the array is ${sumEven}.`;
};
button.addEventListener("click", submitButton);
