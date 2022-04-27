const fruits = ["Banana", "Orange", "Apple"];
console.log(fruits.pop()) //fruits.pop() remove the last element in array
console.log(fruits); 
//Apple
//[ 'Banana', 'Orange' ]

const name = ["Jen", "KL", "Ken", "Eric", "JR"]
name.splice(2, 2) //splice to delete elements (index, num) *From which index and how many to delete.
console.log(name); //[ 'Jen', 'KL', 'JR' ]
name.splice(0, 1, 'Jenjen') //splice to replace element (index, num, e) replace which index, how many and by which element.
console.log(name); //[ 'Jenjen', 'KL', 'JR' ]
name.splice(2, 0, "Jennifer") //splice to insert element (index, 0, e) see which index would u like to insert.
console.log(name);[ 'Jenjen', 'KL', 'Jennifer', 'JR' ]

const alphabets = ["a", "b", "c", "e"]
alphabets.splice(2, 2, "t", "u") //splice 2 elements at index 2
console.log(alphabets);//[ 'a', 'b', 't', 'u' ]
