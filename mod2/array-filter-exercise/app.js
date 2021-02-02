document.body.style.backgroundColor = 'gray'


//creates new array with values above 5 from the old array 

// function fiveAndGreaterOnly(arr) {
//      const result = arr.filter(function(num){
//          if(num >= 5){
//              return num
//          }
//      })
//      return result
//    }
//    // test
//  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

//SIMPLIFIED

// const arr = [3, 6, 8, 2]

// const result = arr.filter(num => num >= 5)
// console.log(result)


//---------------------------------------------//


//Returns an array with only the even numbers of the old array
// function evensOnly(arr) {
//   const result = arr.filter(function(evens){
//     if(evens % 2 === 0){
//       return evens
//     }
//   })
//   return result
// }
// // test
// console.log(evensOnly([3, 6, 8, 2, 5])); /// [6, 8, 2]

//SIMPLIFIED

// const arr = [3, 6, 8, 2, 5]

// const result = arr.filter(evens => evens % 2 === 0)
// console.log(result)


//---------------------------------------------//


// function fiveCharactersOrFewerOnly(arr) {
//   const result = arr.filter(function(short){
//     if(short.length <= 5){
//       return short
//     }
//   })
//   return result
// }
// // test
// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

//SIMPLIFIED

// const arr = ["dog", "wolf", "by", "family", "eaten", "camping"]

// const result = arr.filter(short => short.length <= 5)
// console.log(result)


//---------------------------------------------//


//Return an array of people from the old array that are members
// function peopleWhoBelongToTheIlluminati(arr){
//   const result = arr.filter(function(club){
//     if(club.member === true){
//       return club
//     }
//   })
//   return result
// }
// // test
// console.log(peopleWhoBelongToTheIlluminati([
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]));
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]

//SIMPLIFIED

// const peopleWhoBelongToTheIlluminati = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
//   ]

//   const result = peopleWhoBelongToTheIlluminati.filter(club => club.member === true)
//   console.log(result)


//---------------------------------------------//


// function ofAge(arr){
//   const result = arr.filter(function(person){
//     if(person.age >= 18){
//       return person
//     }
//   })
//   return result
// }
// // test
// console.log(ofAge([
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ])); 
// => 
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]

//SIMPLIFIED

// const arr = [
//      { name: "Angelina Jolie", age: 80 },
//      { name: "Eric Jones", age: 2 },
//      { name: "Paris Hilton", age: 5 },
//      { name: "Kayne West", age: 16 },
//      { name: "Bob Ziroll", age: 100 }
//  ]

// const result = arr.filter(person => person.age >= 18)
// console.log(result)