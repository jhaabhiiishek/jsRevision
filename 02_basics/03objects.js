// singleton 
// Object.create()



// object literals

const mySym = Symbol("Key1")
const jsUser = {
	name:"Abhishek",
	"full name":"Abhishek Kumar Jha",
	[mySym]:"myKey1", //-> and not just mySym:"myKey1" -> Here its a string
	age:22,
	location:"Ludhiana",
	email:"abhi@gmail.com",
	isLoggedIn:false,
	lastLoginDays:["Monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);//-> Only way to access
// console.log(jsUser.full name);-> Won't ever work
console.log(jsUser.mySym); //-> Gives a string rather than a Symbol
console.log(jsUser[mySym]); //-> Correct way

jsUser.email="abhishek@gmail.com" //overriding
// Object.freeze(jsUser)
jsUser.email="abhishek1@gmail.com" //overriding


console.log(jsUser)

jsUser.greeting = function(){
	console.log("Hello JS user");
}

console.log(jsUser.greeting())//-> Prints undefined cuz of the return type
console.log(jsUser.greeting) //-> reference to the function

jsUser.greetingTwo = function(){
	console.log(`Hello Js User, ${this.name}`)
}

console.log(jsUser.greetingTwo()) //-> prints undefined cuz of the return type