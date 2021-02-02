document.body.style.backgroundColor = 'gray'

//Sort array from least to greatest
// function leastToGreatest(arr) {
//     arr.sort(function(a, b){
//     return a - b
//   })
//   return arr
// }
//   console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90] 

//Simplified
// let arr = [1, 3, 5, 2, 90, 20]

// arr.sort((a, b) => a - b)
// console.log(arr)


//------------------------------------------//


//Sort array from greatest to least
// function greatestToLeast(arr) {
//     arr.sort(function(a, b){
//         return b - a
//     })
//     return arr
//   }
  
//   console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]

//Simplified
// const arr = [1, 3, 5, 2, 90, 20]

// arr.sort((a, b) => b - a)
// console.log(arr)


//------------------------------------------//


//Sort arra from shortest string to longest
// function lengthSort(arr) {
//     arr.sort(function(a, b){
//         return a.length - b.length
//     })
//     return arr
//   }
  
//   console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]

//Simplified
// const arr = ["dog", "wolf", "by", "family", "eaten"]

// arr.sort((a, b) => a.length - b.length)
// console.log(arr)


//------------------------------------------//


//Sort the array alphabetically
// function alphabetical(arr) {
//     arr.sort()
//     return arr
// }

// console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]

//Simplified
// const arr = ["dog", "wolf", "by", "family", "eaten"]

// arr.sort()
// console.log(arr)


//------------------------------------------//


//Sort the array by age
// function byAge(arr){
//     arr.sort(function(a, b){
//         return a.age - b.age
//     })
//     return arr
//   }
  
//   console.log(byAge([
//       { name: "Quiet Samurai", age: 22 },
//       { name: "Arrogant Ambassador", age: 100 },
//       { name: "Misunderstood Observer", age: 2 },
//       { name: "Unlucky Swami", age: 77 }
//   ]));
  // => [ { name: 'Misunderstood Observer', age: 2 },
  //  { name: 'Quiet Samurai', age: 22 },
  //  { name: 'Unlucky Swami', age: 77 },
  //  { name: 'Arrogant Ambassador', age: 100 } ]

//Simplify
// const arr = [
//     { name: "Quiet Samurai", age: 22 },
//     { name: "Arrogant Ambassador", age: 100 },
//     { name: "Misunderstood Observer", age: 2 },
//     { name: "Unlucky Swami", age: 77 }
// ]

// arr.sort((a, b) => a.age - b.age)
// console.log(arr)