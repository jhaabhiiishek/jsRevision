const coding = ["js","ruby","java","python","cpp"]

// coding.forEach((language)=>{
// 	console.log(language);
// })

// function printme(key){
// 	console.log(key);	
// }

// coding.forEach(printme) //not printme()

// coding.forEach((item,index,arr)=>{
// 	console.log(item,index,arr);
// })

const mycoding = [
	{
		languageName:"javascript",
		languageFileName:"js",
	},
	{
		languageName:"java",
		languageFileName:"java",
	},
	{
		languageName:"python",
		languageFileName:"py",
	},
	{
		languageName:"c++",
		languageFileName:"cpp",
	},
]

mycoding.forEach((item)=>{
	console.log(item.languageFileName,":",item.languageName);
})

