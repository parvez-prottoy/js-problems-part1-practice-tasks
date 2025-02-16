/* 
    Task-3:

    Write a function to count the number of vowels in a string.
*/
function countVowels(text) {
  let count = 0;
  const vowels = "aeiou";
  for (const letter of text) {
    if (vowels.includes(letter.toLowerCase())) {
      count++;
    }
  }
  return count;
}
const text =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aut nulla quam ratione id laborum modi corrupti nihil nam optio!";

console.log(countVowels(text));
