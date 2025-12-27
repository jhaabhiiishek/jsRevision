const arr = [1,2,3]

// const sumWithInitial = arr.reduce(function(acc,curval){ //first param is the accumulator
// 	console.log(`acc. ${acc} and curval: ${curval}`);
// 	return acc+curval
// },0)

const sumWithInitial = arr.reduce((acc,curr)=>acc+curr,0)

console.log(sumWithInitial);

const shoppingCart =[
	{
		itemName:"Js Course",
		price:2999
	},
	{
		itemName:"Android Course",
		price:9999
	},
	{
		itemName:"Data science Course",
		price:15999
	},
]

const priceToPay = shoppingCart.reduce((acc,val)=>acc+val.price,0)
console.log(priceToPay);
