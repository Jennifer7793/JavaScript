//02:38pm 箭頭函式沒有自己的this & argument
const h = {
  name: 'kk',
  age: 18, 
  hi: () => {
    console.log(this.age);
  }
}

h.hi() //18

// //2:34pm 箭頭函式沒有自己的this & argument
// const hi = (a, b, c) => {
//   console.log(arguments);
// }

// hi('xx', 'yy', 'zz')

// //2:24pm
// function hi(a, b, c) {
//   console.log(arguments);
// }

// hi('xx', 'yy', 'zz')

// const h = {
//   name: 'kk',
//   age: 18, 
//   hi: function() {
//     console.log(this.age);
//   }
// }

// h.hi() //18