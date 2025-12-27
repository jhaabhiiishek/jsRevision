const score= 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNum = 4123.4807
// console.log(otherNum.toPrecision(3)) //-> 4.12e+3

const hundreds = 1000000
// console.log(hundreds.toLocaleString());

// Number.___ multiple values stored 

// console.log(Math) //-> Its a default like Number... |(Library)
// console.log(Math.abs(-4)) //-> absolute value
// console.log(Math.round(-4.4739)) //-> rounded off value
// console.log(Math.ceil(-4.4739)) //-> rounded off value
// console.log(Math.floor(-4.4739)) //-> rounded off value
// console.log(Math.min(4,2,5,6,29,9958)) //-> rounded off value
// console.log(Math.max(4,2,5,6,29,9958)) //-> rounded off value
// console.log(Math.random()) //-> Always between 0 to 1
// // To get it in a range:
// console.log(math.floow(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)