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
// console.log(typeof someNumber);
// console.log(typeof stringNum);

// *********************Operations***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**4);

let str1 = "Abhishek"
let str2 = "Jha"

let str3 = str1+str2
// console.log(str3);

// console.log(typeof(1+"12"),1+"12");
// console.log(typeof("1"+2+2),"1"+2+2);//112 the first value is most important
// console.log(typeof(1+2+"2"),1+2+"2");//122

console.log(+true) //1
// console.log(true+) //error
console.log(+"") //0

let num1,num2,num3
num1=num2=num3 = 2+2

let gameCounter = 100
console.log(gameCounter++);//prints 100
console.log(++gameCounter);//prints 101

