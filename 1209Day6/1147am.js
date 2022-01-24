// 12:08
function heroCreator(name, power) {
  this.name = name
  this.power = power
}

heroCreator.prototype.attack = function () {
  console.log(`${this.name} attack, cause ${this.power} damage`);
}

heroCreator.prototype.greeting = function () {
  console.log('hi');
}

const h = new heroCreator('KL', 100)

h.attack()
h.greeting()

// function heroCreator(name, power) {
//   this.name = name
//   this.power = power
// }

// const h1 = heroCreator('悟空', 100)
// const h2 = new heroCreator('Jen', 1000)

// console.log(h1);
// console.log(h2);
// console.log(h2.name);

// function hello() {

// }

// console.log(hello.__proto__); //{}
// console.log(hello.prototype); //{}

// hello.prototype.hi = function() {
//   console.log('hihihi');
// }
// console.log(hello.prototype);