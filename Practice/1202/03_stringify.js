//JSON.stringify(value[, replacer[, space]])
console.log(JSON.stringify({ x: 5, y: 6})); //{"x":5,"y":6}

console.log(JSON.stringify([new Number("3"), new String('false'), new Boolean("false")]));
//[3,"false",true]

console.log(JSON.stringify([new Number(3), new String("false"), new Boolean(false)]));
//[3,"false",false]

console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')]}));
//{"x":[10,null,null,null]}

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
console.log(JSON.stringify(new Date(2021, 11, 3, 20,25)));
//"2006-01-02T07:04:05.000Z"
//"2022-02-03T04:23:00.000Z"

console.log(JSON.stringify({})); //{}
console.log(JSON.stringify(true)); //true
console.log(JSON.stringify('foo')); //"foo"
console.log(JSON.stringify([1, 'false', false])); //[1, "false", false]
console.log(JSON.stringify({ x: 5})); //{"x":5}