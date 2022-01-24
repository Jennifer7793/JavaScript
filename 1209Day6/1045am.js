const actions = {
  greeting: function() {
    console.log('hello')
  }, 

  attack: function () {
    console.log(`${this.name} 攻擊，造成 ${this.power} 點傷害`)
  }
}

function heroCreator(name, power) {
  const hero = Object.create(actions)
  hero.name = name
  hero.power = power

  return hero
}

const h1 = heroCreator('悟空', 100)
h1.attack()
console.log(h1)


// function heroCreator(name, power) {
//   const h ={}
//   h.name = name
//   h.power = power
//   h.attack: function() {
//     console.log(this.name);
//   }
//   return h
// }

// const h1 = heroCreator('Jen', 100)
// h1.attack