let a = 300
if(true){
	//block scope
	let a = 10
	const b = 20
	var c = 30
	console.log('inner',a);
	
}
console.log('outer',a);

// global scope


// console.log(a);
// console.log(b);
console.log(c); //-> prints 30, even outside the scope

{} //with function or with if/else creates a new scope

//When running in browser the global scope is different then running it with node in terminal