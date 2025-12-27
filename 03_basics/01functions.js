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
console.log(loginUserMessage())