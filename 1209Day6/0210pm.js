//2:18pm
function a() {
  function b() {
    console.log(this);
  }
}

a() //a 裡面沒有做事


// var aaa = 1
// let bbb = 2

// console.log(aaa);
// console.log(bbb);

//沒有呼叫者，this -> global/window

// const h = {
//   name: 'kk',
//   age: 18,
//   hi: function () {
//     console.log(this);
//   }
// }

// h.hi() //{ name: 'kk', age: 18, hi: [Function: hi] }