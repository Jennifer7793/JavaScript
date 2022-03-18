// condition? expIfTrue : expIfFalse

function Jennifer(isEngineer) {
  return (isEngineer ? 'Jengineer' : 'Nope, till finding');
}

console.log(Jennifer(true));
console.log(Jennifer(false));
console.log(Jennifer(null));

var age = 20
var beverage = (age >= 18 ) ? "Beer" : "Juice";
console.log(beverage);