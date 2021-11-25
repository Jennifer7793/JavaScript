let a = 0

function y() {
  a += 1
  console.log(a)
  x();
}
function x() {
  a += 1
  console.log(a)
  y();
}

x();

