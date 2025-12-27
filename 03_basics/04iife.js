// Immediately Invoked Function Expressions (IIFE)

// Often the global scope can pollute, and here, it's solved
// Use semicolon with them
(function litti(){
	console.log(`DB Connected`);
})();
// (definition)(execution), the () create a new block scope

// (()=>{
// 	// Gives error: TypeError: (intermediate value)(...) is not a function
// 	console.log(`DB Connected to `);
// })()
// (function litti(){
// 	// Gives error: TypeError: (intermediate value)(...) is not a function
// 	console.log(`DB Connected to `);
// })()
(function litti(){
	// ṇamed IIFE
	// Gives error: TypeError: (intermediate value)(...) is not a function wihtout ; in previous iffe
	console.log(`DB Connected to `);
})();

((name)=>{
	console.log(`DB Connected for user: ${name}`);
})('Abhishek')