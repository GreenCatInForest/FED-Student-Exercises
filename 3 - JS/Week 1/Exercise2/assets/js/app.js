//sum simple

let sum = (a, b) => a + b;
console.log(sum(1, 2));

//more fancy
const addNumbers = () => {
  let a = parseInt(prompt("Please enter a number"), 10);
  let b = parseInt(prompt("Please enter a second number"), 10);
  let multiple = a * b;
  document.getElementById("resultAdd").innerHTML = `And it's: ${multiple}!`;
};
