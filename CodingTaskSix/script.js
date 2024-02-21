// TODO: Implement the oddNumbers function

function oddNumbers(a, b) {
  let result = "";
  if (a < 0 || b < 0) {
    return "Please only enter positive numbers!";
  } else {
    for (let i = a; i <= b; i++) {
      if (i % 2 != 0) {
        result += i + ",";
      }
    }
    //.slice(0, -1) gets rid of the last comma of the string
    return result.slice(0, -1);
  }
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// TODO: Implement the charCount function

function charCount(word, character) {
  let result = 0;
  word = word.toLowerCase();
  character = character.toLowerCase();
  if (character.length > 1) {
    return "Please only search for one single character!";
  } else {
    for (let i = 0; i < word.length; i++) {
      if (word.charAt(i) === character) {
        result += 1;
      }
    }
  }
  return result;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
