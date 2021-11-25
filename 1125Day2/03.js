function hello () {
  function x() {
    console.log("I am x");
  }

  return x;
}

hello()(); 