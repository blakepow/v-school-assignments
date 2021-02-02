// Log 0 to 9
// for(let i = 0;i <= 9; i++){
//     console.log(i)
// }

//Log 9 to 0
// for(let i = 9;i >= 0; i--){
//     console.log(i)
// }

// Log the fruit
// var fruit = ["banana", "orange", "apple", "kiwi"]
// for(let i = 0;i < fruit.length; i++){
//     console.log(fruit[i])
// }

// //Push 0 to 9 into an array
// let numbers = []
// for(let i = 0;i <= 9; i++){
//     numbers.push(i)
//     console.log(numbers)
// }

//Print 0 to 100 evens only
// for(let i = 0;i <= 100;i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

//Push every other fruit into an array
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var food = []
// for(let i = 0;i < fruit.length;i++){
//     if(i % 2 === 0){
//         food.push(fruit[i])
//         console.log(food)
//     }
// }

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
//Print all the names of people in the array
// for(i = 0;i < peopleArray.length; i++){
//     console.log(peopleArray[i].name)
// }

//Push names into a names array and occupations into an occupations array
// let names = []
// let occupations = []
// for(let i = 0; i < peopleArray.length; i++){
//     names.push(peopleArray[i].name)
//     occupations.push(peopleArray[i].occupation)
//     console.log(names)
//     console.log(occupations)
// }

//Push every other actor into an array starting with 'Harrison Ford' and push every other occupation into an array starting with 'Singer'
// let names = []
// let occupations = []
// for(let i = 0; i < peopleArray.length; i++){
//     if(i % 2 === 0){
//         names.push(peopleArray[i].name)
//         console.log(names)
//     }
//     else{
//         occupations.push(peopleArray[i].occupation)
//         console.log(occupations)
//     }
// }

let number = []
for(let i = 0; i < 3;i++){
  for(let j = 0; j < 3;j++){
    number.push(0)
    console.log(number)
  }
}