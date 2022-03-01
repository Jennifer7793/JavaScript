// ECMAScript language types: 1. undefined 2. null 3. boolean 4. string 5. symbol 6. number 7. bigint 8. object

//1. undefined
var a 
console.log(a); //undefined
if (typeof a === 'undefined') { console.log('hello');} //hello

//2. null
console.log(typeof null); //object

// 5. symbol
var s1 = Symbol()
var s2 = Symbol('test') //  *can add description
var s3 = Symbol('test')
console.log(s2 === s3); //false  *symbol is unique
console.log(s2.description); //test  *.description can get test
var obj = {}
obj[s2] = 'hello' //  *can use as key
console.log(obj[s2]); //hello
var a1 = Symbol.for('a')
var a2 = Symbol.for('a')
console.log(a1 === a2); //true
var obj = { a: 1, [Symbol.for('hello')]: 2 }
for( let key in obj) { console.log(key) } //a  *hide infor, if key is symbol won't be printed out