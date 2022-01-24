function hello() {
  var a = 123
  return a
}

hello.a = 456

console.log(hello());
console.log(hello.a);
//1-9 不要這麼寫

// function hello() {
//   var a = 123
//   return a
// }

// console.log(hello());