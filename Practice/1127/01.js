/*
function hello (a){
	a();
}
function fish(){
	console.log("I am fish");
}

hello(fish); */

/*
function hello(a) {
  a();
}

function fish() {
  console.log("I am fish");
}

hello(fish()); */

/*
function hello (a){
  if(typeof a == "function"){
    a();
  }
}
function fish(){
  console.log("I am fish");
}
  
hello(fish); */

function hello () {
  function x() {
    console.log("I am x");
  }

  return x;
}

console.log(hello())