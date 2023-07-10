let currentTime = new Date().getHours();
let greeting;

switch (true) {
  case (currentTime >= 23 || currentTime < 5):
    greeting = "Доброї ночі";
    break;
  case (currentTime >= 5 && currentTime < 11):
    greeting = "Доброго ранку";
    break;
  case (currentTime >= 11 && currentTime < 17):
    greeting = "Доброго дня";
    break;
  default:
    greeting = "Доброго вечора";
}

console.log(greeting);