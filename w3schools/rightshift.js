let x = 1000;
let y = 8

let z = x >>= 8;
console.log(z); //3

console.log(-1000 >> 8); //-4
console.log(5 >> 1); //2

// ">>" 往右移運算，有效位整體右移，使用符號位值填充空位。超出的值丟棄。 