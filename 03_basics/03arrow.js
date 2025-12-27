// with es6 in 2015, arrow function came to js

const user = {
	username:"Abhishek",
	price:999,
	welcomeMessage:function(){
		console.log(`${this.username},welcome to website`);
		console.log(this) //Prints the current context
	}
}

// This refers to the current context

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()//-> Always prints for the updated context

// console.log(this); //-> {} for node terminal
// console.log(this); //-> Window -> global object for browser terminal, thus printed

// function litti(){
// 	let username = "Abhishek"
// 	// console.log(this); //context for function, all the associated methods etc...
// 	console.log(this.username); //prints undefined here, but can be printed for objects
// }
// litti()

// const litti = function(){
// 	let username="Abhishek"
// 	console.log(this.username);
	
// }

const litti = ()=>{
	let username = "Abhishek"
	console.log(this);	//-> {}
}

// litti()

// const addTwo = (num1,num2)=> { //Explicit return
// 	return num1+num2
// }
// const addTwo = (num1,num2)=>(num1+num2) //Implicit return: same but for singular expressions
const addTwo = ()=>({name:"Abhishek"}) //Implicit Object return: same but for singular expressions
// console.log(addTwo())

const myArray = [2,3,57,27,256]

// myArray.forEach((val)=>(console.log(val+10)))

// console.log(myArray);
