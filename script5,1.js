let currentTime = new Date().getHours();
if (currentTime >= 23 || currentTime < 5) {
  console.log("Доброї ночі");
} else if (currentTime >= 5 && currentTime < 11) {
  console.log("Доброго ранку");
} else if (currentTime >= 11 && currentTime < 17) {
  console.log("Доброго дня");
} else {
  console.log("Доброго вечора");
}