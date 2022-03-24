// 程式語言：JavaScript
// 題目：寫一小段程式，印出陣列裡缺的字
// 範例：

// ["a", "b", "c", "d", "f", "g"] 印出 e
// ["O","Q","R","S"] 印出 P

// 提示：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

const findMissingLetter = (array) => {
  // we can skip the 1st letter
  for (let i = 1; i < array.length; i++) {
    // get the char code of the previous letter
    const prev = array[i - 1].charCodeAt();
    // get the char code of the current letter
    const current = array[i].charCodeAt();
    
    if (current - prev !== 1) { // if the difference between current and previous is not 1
      // get the character after the previous 
      return String.fromCharCode(prev + 1);
    }
  }
  
  return null; // if nothing is found
}

// const findMissingLetter = (array) => {
//   const index = array
//     .slice(1) // create an array with 1st letter removed
//     .findIndex((c, i) => c.charCodeAt() - array[i].charCodeAt() > 1); // compare current letter and the same index in the original array 'till you find a missing letter
    
//   return index > -1 ? // if we found an index
//     String.fromCharCode(array[index].charCodeAt() + 1) // if index was found return next letter after the last letter in a sequence
//     : 
//     null; // if index wasn't found
// };

console.log(findMissingLetter(["a", "b", "c", "d", "f", "g"]));
console.log(findMissingLetter(["O","Q","R","S"]));