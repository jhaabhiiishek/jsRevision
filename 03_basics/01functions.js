function sayMyName(){
	console.log("A");
	console.log("B");
	console.log("H");
	console.log("I");
	console.log("S");
	console.log("H");
	console.log("E");
	console.log("K");
}

// sayMyName //-> reference
// sayMyName()

// function addTwo(num1,num2){ //here num1 and num2 -> parameters
// 	console.log(num1+num2);	
// }
function addTwo(num1,num2){ //here num1 and num2 -> parameters
	return (num1+num2);	//return necessary to pass the value back to calling point
}

// addTwo(3,null) //here 3 and null are args

const result = addTwo(3,5)
// console.log(result);

function loginUserMessage(username="sam"){ //sam is default value and in this case undefined check is always false
	if(username===undefined){
		return "Please enter a username"
	}
	return `${username} just logged in`
}
// console.log(loginUserMessage("Abhishek"))
// console.log(loginUserMessage())

function calculateCartPrice(username,...num1){ //-> Rest operator
	let cartValue = 0;
	for(let i=0;i<num1.length;i++){
		cartValue+=num1[i]
	}
	return `${username} your cart value is: ${cartValue}`
}

// console.log(calculateCartPrice("Abhishek",200,400,500))
const user ={
	username:"Abhishek",
	price:2500
}

function handleObject(anyObject){
	console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}


console.log(handleObject(user))
console.log(handleObject({
	username:"Abhi",
	price:2000
}))

const newArray = [200,400,100,600]
function returnSecondValue(getArray){
	return getArray[1]
}
console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200,400,100,600]));
