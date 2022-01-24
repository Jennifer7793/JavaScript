// function hello() {
//   var a = 1
// }

// hello()

// console.log(a) //ReferenceError: a is not defined
//-------------------------------------
// function hello() {
//   var a = 1

//   function x() {
//     console.log(a); //因為需要a, 所以hello function 執行完後會一起包a回來
//   }
//   return x
// }

// hello()() //1
// const yy = hello() 
// yy() //1
//---------------------------------------
// function hello() {
//   var a = 100

//   function x() {
//     a += 1
//     console.log(a);
//   }
//   return x
// }

// hello()() //101
// const yy = hello() 
// yy() //101
// yy() //102
// yy() //103
//------------------------------------
function hello() {
  function x() {
    a += 1
    console.log(a);
  }
  return x
}

var a = 100
hello()() //101
console.log(a); //101
