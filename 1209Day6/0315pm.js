//3:27
const obj = {
  name: 'kk',
  go: function() {

    const ff = function () {
      console.log(this.name)
    }.bind(this)

    setTimeout(ff, 0)
  }
}

obj.go() //kk

// //3:27
// const obj = {
//   name: 'kk',
//   go: function() {

//     const ff = function () {
//       console.log(this.time);
//     }

//     setTimeout(ff, 0)
//   }
// }

// obj.go() //undefined

// function hello () {
//   console.log(this);
// }

// const hero = {
//   name: 'kk',
//   age: 30
// }

// const new_hello = hello.bind(hero) //bind是function包裝器，會回傳新的方法並改變this指向
// new_hello() //{ name: 'kk', age: 30 }


// function a() 
// console.log(a.__proto__ === Function.prototype);
// console.log(a.bind === Function.prototype.bind);
