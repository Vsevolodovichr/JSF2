let side1 = parseFloat(prompt("Введіть довжину першої сторони трикутника:"));
let side2 = parseFloat(prompt("Введіть довжину другої сторони трикутника:"));
let side3 = parseFloat(prompt("Введіть довжину третьої сторони трикутника:"));
if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
  console.log("Incorrect data");
} else {
  let s = (side1 + side2 + side3) / 2;
  let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
  console.log(area.toFixed(3));
  if (
    side1 * side1 === side2 * side2 + side3 * side3 ||
    side2 * side2 === side1 * side1 + side3 * side3 ||
    side3 * side3 === side1 * side1 + side2 * side2
  ) {
    console.log("Цей трикутник є прямокутним.");
  } else {
    console.log("Цей трикутник не є прямокутним.");
  }
}