/* 
    Task-5:

    Generate a random number between 10 to 20.
*/
function randomNumberGenerator(min = 10, max = 20) {
  if (typeof min !== "number" || typeof max !== "number") {
    return "Invalid number";
  }
  return Math.round(Math.random() * (max - min + 1) + min);
}
console.log(randomNumberGenerator());
