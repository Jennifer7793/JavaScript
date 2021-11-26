// function calcScore() {
//   return [1, 2, 3]
// }

// let [a, b , c] = calcScore()
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(a, b, c);
// console.log(c, b, c);

// for (var i = 0; i < 3; i++) {

// }
// console.log(i);

//----------------------------------
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

//----------------------------------
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i--), 1000 * i);
}