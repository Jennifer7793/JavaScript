function heroCreator(name, power, attack) {
  const obj = {
    name, 
    power, 
    attack: function () {
      console.log(`${name} got ${power} power`);
    }
  }
  return obj
}

const h1 = heroCreator('Jen', 100)
const h2 = heroCreator('Ken', 50)
h1.attack()
h2.attack()

// function heroCreator(name, power, attack) {
//   const obj = {
//     name, 
//     power, 
//     attack
//     // name: name, 
//     // power: power,
//     // attack: attack
//   }
//   return obj
// }

// const h1 = heroCreator('Jen', 100, () => {
//   console.log('HameiHameiHA!!')
// });

// h1.attack()

// const hero1 = {
//   name: 'Jen',
//   power: 100,
//   attack: function() {
//     console.log('HameihameiHA!!');
//   }
// }

// hero1.attack();