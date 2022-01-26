var name = "悟空"

var hero = {
  name: "悟空",
  sayMyName: function () { console.log(this.name); }
}

hero.sayMyName();

const there = () => {
  var name = "Hello";
  console.log(this.name);
}

there();

function here() {
  var name = "達爾";
  console.log(this.name);
}

here();