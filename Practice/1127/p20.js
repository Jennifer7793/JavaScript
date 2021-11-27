var TAX_RATE = 0.08;
var amount = 99.99;
amount = amount * 2;
amount = amount + (amount * TAX_RATE);

console.log(amount);
const a = console.log(amount.toFixed(2)); //指定數字要約整(round)到小數點第幾位
console.log(typeof a);