// const tinderUser = new Object() //->{} declares empty object || Singleton Object
const tinderUser ={} //-> Non singleton

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

console.log(tinderUser);

const regularUser ={
	email:"some@gmail.com",
	fullName:{
		userFullName:{
			firstname:"Abhishek",
			lastname:"Jha",
		}
	}
}

console.log(regularUser)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj3 = [...obj1,...obj2] //won't work
// const obj3 = {obj1,obj2} //Nests the data instead
// const returnTarget = {}
// const target = Object.assign(returnTarget,obj1,obj2) //-> assigns the new object in returnTarget
// console.log(returnTarget===target); //true

const obj4 = {...obj1,...obj2,...obj3}

// console.log(obj4)

const users=[
	{
		id:1,
		email:'abhi@gmail.com'
	},
	{
		id:1,
		email:'abhi@gmail.com'
	},
	{
		id:1,
		email:'abhi@gmail.com'
	},
	{
		id:1,
		email:'abhi@gmail.com'
	},
	{
		id:1,
		email:'abhi@gmail.com'
	},
	{
		id:1,
		email:'abhi@gmail.com'
	},
	{
		id:1,
		email:'abhi@gmail.com'
	},
	{
		id:1,
		email:'abhi@gmail.com'
	},
	{
		id:1,
		email:'abhi@gmail.com'
	},
]

users[1].email //-> correct to access first ka data
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //-> Returns keys as Array
console.log(Object.values(tinderUser)); //-> Returns values as keys
console.log(Object.entries(tinderUser)); //-> Returns values as keys

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
