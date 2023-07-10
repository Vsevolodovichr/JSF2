let age = prompt("Скільки вам років?");
let isAdult;
if (age >= 18) {
  isAdult = true;
  console.log("Ви досягли повнолітнього віку.");
} else {
  isAdult = false;
  console.log("Ви ще надто молоді.");
}