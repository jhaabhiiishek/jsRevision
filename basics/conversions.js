let score = '33abc'

// when received with req.params const {score} = req.params
// console.log(typeof score); // to check
// console.log(typeof (score)); // to check
// Both number

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber) //NaN

let score2 = null

let valInNum = Number(score2)

// console.log(typeof score2) //object
// console.log(score2) //null
// console.log(typeof valInNum) //number
// console.log(valInNum) //0

let score3 = undefined

let valInNo = Number(score3)

// console.log(typeof score3) //undefined
// console.log(score3) //undefined
// console.log(typeof valInNo) //number
// console.log(valInNo) //NaN

let isLoggedIn = undefined
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)//True for anything but 0 or "" or null or undefined

let someNumber = 33
let stringNum = String(someNumber)
console.log(typeof someNumber);
console.log(typeof stringNum);
