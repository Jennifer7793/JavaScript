let total = 700;
let rate = 0;

if (total > 1000) {
  rate = 0.7
} else if (total > 5000) {
  rate = 0.75
} else if (total > 500)
  rate = 0.8

var discounted = total * rate
console.log(discounted)

