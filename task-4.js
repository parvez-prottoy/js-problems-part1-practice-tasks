/* 
    Task-4:

    Write a function to find the longest word in a given string.

    sample-input:
    I am learning Programming to become a programmer

    sample-output: Programming
*/
function findLargeWord(text) {
  const wordsArray = text.split(" ");
  let longestWord = wordsArray[0];
  for (const word of wordsArray) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
const text = "I am learning Programming to become a programmer";
console.log(findLargeWord(text));
