const game = {
  name: "Zelda",
  greeting: function() {

    const attack = () => {
      console.log(this);  // 改成箭頭函式，沒有自己的list就往外找
    }

    attack();
  }
}

game.greeting(); //{ name: 'Zelda', greeting: [Function: greeting] }

// const game = {
//   name: "Zelda",
//   greeting: function() {
//     console.log(this);    // A. 會印出什麼？

//     function attack() {
//       console.log(this);  // B. 會印出什麼
//     }

//     attack();
//   }
// }

// game.greeting(); //A.game B.global