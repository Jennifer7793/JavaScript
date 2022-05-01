// x <<= y same as x = x << y
let x = 2;
let y = 2;

let z = x <<= y
console.log(z); // x * (2 ** y) = 8