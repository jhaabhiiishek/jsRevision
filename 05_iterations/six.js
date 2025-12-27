// const coding = ["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{ //-> Doesn't returns
// 	// console.log(item);
// 	return item
// })
// console.log(values); //undefined

const myNums = [1,2,3,4,5,6,7,8,9,10]

let bigNums = myNums.filter((num)=>num>5) //value and conditions -> returns 
// console.log(bigNums);

let bigNumsNew = myNums.filter((num)=>{
	return num>5
}) //value and conditions -> returns 
// console.log(bigNumsNew);

const newNums = []

myNums.forEach((num)=>{
	if(num>5){
		newNums.push(num)
	}
})

console.log(newNums);
