// console.log(123);

// [1, 2, 3, 4, 5].forEach(function(item) {
//   console.log(item)
// })

//------------------------------------------

// const hero = {
//   name: 123, 
//   age: 456,
//   gender: 789
// }
// // let name = hero.name
// // let age = hero.age

// let { name, age, gender } = hero

// console.log(name)
// console.log(age)
// console.log(gender)

//----------------------------------------

// function displayHero(name, age) {
//   console.log(`hi, I'm ${name} and I'm ${age} years old`) //(物件)
// }

// const hero = {
//   name: 123, 
//   age: 456,
//   gender: 789
// }

// let name = hero.name //.name是屬性
// let age = hero['age']
// displayHero(name, age)

//---------------------------------------------------------
// function displayHero(name, age) {
//   console.log(`hi, I'm ${name} and I'm ${age} years old`) //(物件)
// }
// const hero = {
//   name: 123, 
//   age: 456,
//   gender: 789
// }

// let { name, age} = hero
// displayHero(name, age)
//---------------------------------------------------------
// function displayHero(h) {
//   console.log(`hi, I'm ${h.name} and I'm ${h.age} years old`) //(物件)
// }
// const hero = {
//   name: 123, 
//   age: 456,
//   gender: 789
// }

// displayHero(hero)
//--------------------------------------------------------------
function displayHero({ name, age }) {
  console.log(`hi, I'm ${name} and I'm ${age} years old`) //(物件)
}
const hero = {
  name: 123, 
  age: 456,
  gender: 789
}

displayHero(hero)