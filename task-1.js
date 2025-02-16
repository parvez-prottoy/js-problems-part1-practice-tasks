/* 
    Task-1:

    Write a function to convert temperature from Celsius to Fahrenheit.
*/
function temperature(celsius) {
  return typeof celsius !== "number"
    ? "Invalid number."
    : `${celsius * (9 / 5) + 32}°F`;
}
console.log(temperature(20));
