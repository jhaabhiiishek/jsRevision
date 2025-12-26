// All dates are calculated from Jan 1st 1970, UTC

const newDate = new Date('1-1-1970')
// console.log(newDate)

const current = new Date()
// console.log(current.toString())
// console.log(current.toDateString())
// console.log(current.toLocaleString())
// console.log(typeof current)

// let myCreatedDate = new Date(2023,0,23) //months start from 0
// let myCreatedDate = new Date(2023,0,23,5,3) //months start from 0
// let myCreatedDate = new Date("2023-01-14") //months start from 0
let myCreatedDate = new Date("01-14-2026") //months start from 0
// console.log(myCreatsedDate.toDateString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime()) //Gives data in time stamp


// console.log(Math.floor(Date.now()/1000))

let today = new Date()
// console.log(today)
// console.log(today.getDate())
// console.log(today.getMonth()+1) //-> 0 Indexed
// console.log(today.getFullYear())

const curr = new Date().toLocaleString('default',{
	weekday:"narrow", //-> Long, narrow, short
})
console.log(curr)