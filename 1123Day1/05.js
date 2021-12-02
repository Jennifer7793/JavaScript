const list = [1, 2, 3, 4, 5]

// // 箭頭函數 Arrow Function
// const newArr = list.map(x => x * 2) 
// console.log(newArr)

// // 匿名函數 Anonymous Function
// const result = list.map(function (x) {
//   return 2 * x;
// })

// console.log(result)

function double(n) {
  const doub = []
  for (let n = 0; n < 5; n++) {
    doub.push(list[n] * 2)
  }
}
console.log(double);

// const result = [];
// for (let i = 0; i < 5; i++) {
//   result.push(list[i] * 2);
// }

// console.log(result); 