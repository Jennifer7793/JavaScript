// var a = 1;

// function hello() {
//   console.log(a);
//   var a = 2;
// }

// hello();

// var a = 1;

// function hello() {
//  var a = 2
// }

// console.log(a);
// hello();
// console.log(a);

var x = 1;

function a() {
  var x = 2;

  function b() {
    console.log(x);
  }
  b();
}
a();
