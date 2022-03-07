// Outer environment
console.log(this);

// function statement
function thisInFunctionStatement() {
  console.log(this);
}
thisInFunctionStatement();

// function expression
const thisInFunctionExpression = function() {
  console.log(this);
}
thisInFunctionExpression();

// Above gets global object，瀏覽器的環境下Window物件。