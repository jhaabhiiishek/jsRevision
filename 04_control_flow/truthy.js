const userEmail = "a@abhishek.ai"

if(userEmail){
	console.log("Got user Email");
}else{
	console.log("Don't have user email");
}

// All falsey Values
// false, 0, -0,BigInt 0n,"", null, undefined, NaN -> Falsey Values

// Some notable truthy values
// true, 1, "0",'false'," ",[],{},function(){}


const emptyArr=[]
if(emptyArr.length===0){
	console.log("Array is empty");
}
const emptyObj={}
if(Object.keys(emptyObj).length==0){
	console.log("Object is empty");
}

// false==0 //true
// false=='' //true
// 0=='' //true


// Nullish  Coalescing Operator (??):null undefined

let val1;
// if first response comes null/undefined we give a sort of backup value
// val1=5??10;
// val1=null??10;
// val1=undefined??15;
val1=undefined??10??15; //->10

console.log(val1);

// Terniary Operator

// condition ? true: false

const iceTeaPrice =100
iceTeaPrice>=80 ? console.log("less than 80"):console.log("more than 80");

