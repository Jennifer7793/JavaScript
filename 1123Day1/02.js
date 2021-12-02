// const a = 1;
// a = 2;
// console.log(a);
//(1-3)TypeError: Assignment to constant variable.

// console.log(PI);
// const PI = 3.14;
//(6-7)ReferenceError: Cannot access 'PI' before initialization

// const a = [1, 2, 3];
// a[0] = a;
// console.log(a);
//(10-12) <ref *1> [ [Circular *1], 2, 3 ]

const a = [1, 2, 3];
a[0] = "a";
console.log(a);
//[ 'a', 2, 3 ]