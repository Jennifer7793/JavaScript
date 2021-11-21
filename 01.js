let total = 700;
let discounted = 0;

if (total > 1000) {
  discounted = total * 0.7
} else if (total > 5000) {
  discounted = total * 0.75
} else if (total > 500)
  discounted = total * 0.8
} else {
  discounted = total
}

console.log(discounted)

