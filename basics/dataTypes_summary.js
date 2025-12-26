// Primitive - call by value
/* 
	7 types: 
		String, 
		Number, 
		Boolean,
		null,
		undefined,
		Symbol - to make values unique,
		BigInt
*/

// Dynamically typed language
const score = 100
const scoreVal = 100.3
const loggedIn = false;
const outsideTemp = null
let userEmail = undefined;//undefined
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId);//true
console.log(id===anotherId);//false

const bigNumber= 94872838809487930847n //makes it bigint adding n at the end

// TypeScript is statically typed

// Non-Primitive - Reference 
/*
	3 main primarily:
	Array
	Objects
	Functions
 */

const heroes = ["Shaktiman","Naagraj","Doga"]
let person = {
	name:"Abhishek",
	age:22
}

const myfunc = function myfunc(){
	console.log("Hello World")
}
myfunc // prints nothing
myfunc() //prints Hello World

console.log(typeof bigNumber) //bigint
console.log(typeof myfunc) //function - object
console.log(typeof heroes) //object
