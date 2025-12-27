// if
// if(condition){
// 	// condition = true

// }

// <,>,<=,>=,==,!=,===

const isUserLoggedIn = true
const temp = 41

// if(temp ==41){
// 	console.log("41");
// }else{
// 	console.log("not 41");
// }

const score = 200
if(score>100){
	const power = "Fly" //only const/let to be used here as var can also be accessed outside
	console.log(`User power: ${power}`);	
}
console.log(`User power: ${power}`);

const balance = 1000
// if(balance>500) console.log("test"),
// console.log(test2); //Implicit scope

// if(balance<500){
// 	console.log("less than");
// }else if(balance<750){
// 	console.log("Less than  750");
// }else if(balance<900){
// 	console.log("Less than 900");
// }else{
// 	console.log("more than 900");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2==2){
	console.log("Allowed to Shop");
}

if(loggedInFromEmail||loggedInFromGoogle){
	console.log("User logged in");
}
