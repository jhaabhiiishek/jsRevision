const name = "Abhishek"
const repoCount = 45
// console.log(name+repoCount+" Value")
// console.log(`Hello My name is ${name} and my repo count is ${repoCount}`)

// Declaring a string
const gameName = new String('Abhishek')
// console.log(gameName[0]) //-> A
// console.log(gameName.__proto__) //-> Empty object (Has other values)

// console.log(gameName.length) //-> 8
// console.log(gameName.toUpperCase())
// console.log(gameName) //-> Original value isn't changed

// console.log(gameName.charAt(4)) //->s
// console.log(gameName.indexOf('t')) //->-1
// console.log(gameName.indexOf('a')) //->-1
// console.log(gameName.indexOf('A')) //->0



const newSubString= gameName.substring(0,4)
// console.log(newSubString); //-> starts from 0 regardless if negative values are passed

const newString= gameName.slice(-4,8)
// console.log(newString); //-> Can also be given - values, starts from reverse

const newString1 = "        iebhfhjjihibhfjohbefjf          "
// console.log(newString1)
// console.log(newString1.trim())
// Trimstart and Trimend are also similar functions

const url = "https://abhi.com/abhi%20jha"

console.log(url.replace('%20','-')) //...link
console.log(url.includes('abhishek')) //-> false
console.log(url.includes('abhi')) //-> True

console.log(gameName.split('-'))