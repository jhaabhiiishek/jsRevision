let a = 300
if(true){
	//block scope
	let a = 10
	const b = 20
	var c = 30
	// console.log('inner',a);
	
}
// console.log('outer',a);

// global scope


// console.log(a);
// console.log(b);
// console.log(c); //-> prints 30, even outside the scope

{} //with function or with if/else creates a new scope

//When running in browser the global scope is different then running it with node in terminal



function one(){
	const username="Abhishek"
	function two(){
		const website = "github"
		console.log(username);
	}
	// console.log(website); //-> Not defined
	two()
}

// one()

if(true){
	const username = "Abhishek"
	if(username==="Abhishek"){
		const website = " github "
		// console.log(username+website);
	}
	// console.log(website);
}
// console.log(username);//-> undefined

// +++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++

console.log(addone(5)) //-> Prints 6
function addone(num){
	return num+1
}


// addTwo(5) //-> Error cuz of Hoisting
//Expression
const addTwo = function(num){
	return num+2
}