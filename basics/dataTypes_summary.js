// Primitive - call by value
/* 
	7 types: 
		String -> '' and "", 
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

// console.log(id==anotherId);//true
// console.log(id===anotherId);//false

const bigNumber= 94872838809487930847n //makes it bigint adding n at the end

// TypeScript is statically typed

// Non-Primitive - Reference type
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
// myfunc // prints nothing
// myfunc() //prints Hello World

// console.log(typeof bigNumber) //bigint
// console.log(typeof myfunc) //function - object
// console.log(typeof heroes) //object


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory 

// 2 types: Stack and Heap

// Stack(Primitive) - Gives copy of original value to change
// Heap(Non-Primitive) - Gives reference of original value to change

let myYoutubeName ="AbhiiishekKumarJha"

let anotherName = myYoutubeName
anotherName = "abhishekJha"

console.log(myYoutubeName)
console.log(anotherName)
// As it is primitive type both will be different  (Stack, pass by copy)

let userOne = {
	id:1,
	name:'Abhishek',
	email:'abhi@gmail.com'
}
let userTwo = userOne

userTwo.email="abhiii@gmail.com"

console.log(userOne)
console.log(userTwo)

// As it is non primitive it is stored in Heap,
// - thus referenced
// - thus only a reference is passed 