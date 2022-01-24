function hello() {
  console.log(this);  // A. 會印出什麼？

  function world() {
    console.log(this);  // B. 會印出什麼？

    const game = {
      name: "Zelda",
      greeting: function() {
        console.log(this); // C. 會印出什麼？
      }
    }
    game.greeting();
  }

  world();
}

hello();
//A.global B.global C.game