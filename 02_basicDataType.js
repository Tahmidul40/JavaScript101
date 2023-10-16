"use strict"  // Defines that JavaScript code should be executed in "strict mode".

// alert(3 + 3)  // does not work in node

// JavaScript has 8 Datatypes
// 1. String
let str = "Tahmid"
console.log(str + " is " + typeof str);

// 2. Number
let num = 2034
console.log(num + " is " + typeof num);

// 3. Bigint
let bigInt = 999999999999999n
console.log(bigInt + " is " + typeof bigInt);

// 4. Boolean
let value1 = true
let value2 = false
console.log(value1 + " is " + typeof value1);
console.log(value2 + " is " + typeof value2);

// 5. Undefined
let theList
console.log(theList + " is " + typeof theList);

// 6. Null
let Total = null
console.log(Total + " is " + typeof Total);

// 7. Symbol
const sym = Symbol("foo");
console.log("It is a " + typeof sym );// "symbol"


// 8. Object
/* The object data type can contain:
  - An object
  - An array
  - A date */
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person + " is " + typeof person);




