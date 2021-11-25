function hello(a) {
  if (typeof a == "function") {
    a();
  }
}

function fish() {
  console.log("I am fish");
}

hello(fish());