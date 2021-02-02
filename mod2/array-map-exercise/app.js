document.body.style.backgroundColor = 'gray'

//Goes through and doubles each array element
// function doubleNumbers(arr){
//     const result = arr.map(function(num){
//         return num * 2
//     })
//     return result
// }
  
// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


//Goes through and turns each array element into a string
// function stringItUp(arr){
//     const result = arr.map(function(word){
//         return JSON.stringify(word)
//     })
//     return result
//   }
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


//Goes through and capitalizes the first letter of each array element and puts the rest of the string in lower case
// function capitalizeNames(arr){
//     const result = arr.map(function(cap){
//         const first = cap.slice(0, 1)
//         const capLetter = first.toUpperCase()
        
//         const restLow = cap.slice(1)
//         let lowWord = restLow.toLowerCase()
        
//         let words = capLetter + lowWord
//         return words
//     })
//     return result
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]


//Makes an array of strings of the names
// function namesOnly(arr){
//     const result = arr.map(function(people){
//         let theNames = [people.name].join(' ')
//         return theNames
//     })
//     return result
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


  //Makes an array of the names saying whether they can go to the Matrix based on their age
// function makeStrings(arr){
//     const result = arr.map(function(people){
//         let theNames = []
        
//         if(people.age >= 80){

//            return (`${people.name} is old enough to go to the Matrix`)
//         }
//         else{

//             return (`${people.name} is not old enough`)
//         }
        
//     })
//     return result
//   }
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
  // ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]


  //Puts the array of names into the DOM in an h1 tag and the ages into an h2 tag
  function readyToPutInTheDOM(arr){
    const result = arr.map(function(people){
        let theNames = [people.name].join(' ')
        let theAges = [people.age].join(' ')
        document.getElementById('name').append(`${theNames}, `)
        document.getElementById('age').append(`${theAges}, `)
        return `${theNames} is ${theAges}`
        
    })
    return result
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]