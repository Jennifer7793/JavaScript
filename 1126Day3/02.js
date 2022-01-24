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
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i--), 1000 * i);
// }
//--------------------------------------
//閉包
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000 * i);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000 * i);
}
//用var因為跑完還會活著，但let跑完就會不見所以要先抓

for(var i = 0; i < 3; i++) {
  (function(a) {
  setTimeout(function() {
    console.log(a);
  }, 100)
})(i)
}
//用IIFE來解決