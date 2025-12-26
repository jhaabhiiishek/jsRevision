const myArr = [0,1,2,3,4,5] 
// Can be heterogenous
// Resizeable
// Indexes can't be strings, or negative integers -> Not Associative

console.log(myArr[0]); //0 indexed

// ShallowCopy -> share the same reference
// DeepCopy -> Do not share the same reference

const myHeroes = ["MsD","Virat","Sachin"]

const newArr = new Array(1,2,3,4)
console.log(myArr[1])
// Arrays also give proto access and length etc.

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9) //-> Never 
// myArr.shift() //-> Never 

// myArr.includes(9) //-> Boolean
// myArr.indexOf(9) //-> returns Number

const newArr2 = myArr.join()

// console.log(myArr) //Becomes string
// console.log(typeof newArr2)

console.log("A ", myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3) 
/* 
	Includes the last element 
	manipulates the original array
*/
console.log(myn2)
console.log("C ", myArr)