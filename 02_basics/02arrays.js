const marvel = ["Thor","IronMan","CaptainAmerica"]
const dc = ["Batman","Superman","Flash"]

// marvel.push(dc) //-> Takes Array DC in as a new value 
// console.log(marvel);

// const allHeroes = marvel.concat(dc)
// console.log(allHeroes);

const allNewHeroes = [...marvel,...dc]
console.log(allNewHeroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) 

console.log(real_another_array); 
//->[
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]

console.log(Array.isArray("Abhishek"))//->False
console.log(Array.from("Abhishek"))
console.log(Array.from({name:"Abhishek"})) //Gives -> [] Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // [100,200,300]
