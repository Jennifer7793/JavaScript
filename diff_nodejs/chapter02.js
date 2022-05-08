var string = "a1234";
var StringObjectRefA = new String("a1234");
var StringObjectRefB = new String("a1234");
var StringRefA = string;
var StringRefB = string;

console.log(string === "a1234"); //true

console.log(typeof(StringObjectRefA)); // object
console.log(typeof(string)); //string
console.log(typeof("a1234")); //string
console.log(StringObjectRefA === string); //false
console.log(StringObjectRefA === "a1234"); //false
console.log(StringObjectRefA === StringObjectRefB); //false
// 兩物件即使擁有相同數量元素，但參考位置不同就不視為相等。 

console.log(typeof(StringRefA)); //string
console.log(StringRefA === string); //true

// 以下易判斷錯誤
console.log("0" == ""); //false
console.log("0" == " "); //true
console.log(0 == "0"); //true!!!
console.log(false == "false"); //false
console.log(false == "0"); //true!!!
console.log(false == undefined); //false
console.log(false == null); //false
console.log(null == undefined); //true!!!
console.log(" \t\r\n" == 0); //true!!!