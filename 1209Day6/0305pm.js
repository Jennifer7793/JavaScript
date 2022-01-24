//3:10pm
const game = {
  name: "Jen",
  Ahhh: function() {
    setTimeout(() => {
      console.log(this);
    }, 2000)
  }
}

game.Ahhh(); //{ name: 'Jen', Ahhh: [Function: Ahhh] }

// const game = {
//   name: "Jen",
//   Ahhh: function() {
//     setTimeout(function() {
//       console.log(this);
//     }, 2000)
//   }
// }

// game.Ahhh(); //global, 因為去Quene回來後執行時沒有人呼叫