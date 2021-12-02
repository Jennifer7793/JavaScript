//JSON.stringify(value[, replacer[, space]])
console.log(JSON.stringify({ x: 5, y: 6})); //{"x":5,"y":6}

console.log(JSON.stringify([new Number("3"), new String('false'), new Boolean("false")]));
//[3,"false",true]

console.log(JSON.stringify([new Number(3), new String("false"), new Boolean(false)]));
//[3,"false",false]

console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')]}));
//{"x":[10,null,null,null]}

console.log(JSON.stringify(new Date(2020, 25, 2, 23, 20)));