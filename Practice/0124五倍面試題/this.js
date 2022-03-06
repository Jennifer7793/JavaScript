var name = "悟空"

var hero = {
  name: "悟空",
  sayMyName: function() { console.log(this.name); }
};

hero.sayMyName(); //悟空 **誰呼叫函式，誰就是this

const there = () => {
  var name = "Hello";
  console.log(this.name);
}

there(); //undefined **箭頭函式沒有自己的this, 綁訂到其定義時所在的物件，指向window全域

function here() {
  var name = "達爾";
  console.log(this.name);
}

here(); //undefined **屬於直接呼叫的函式，所以this指向全域