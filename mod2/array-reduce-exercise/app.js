document.body.style.backgroundColor = 'gray'

//Returns the sum of all the numbers in the array
// function total(arr) {
//     const result = arr.reduce(function(final, nums){
//         final += nums
//         return final
//     })
//     return result
//  }
 
//  console.log(total([1,2,3])); // 6


//------------------------------------------------//


//Turn array of numbers into a sting of those numbers
// function stringConcat(arr) {
//     const result = arr.reduce(function(final, nums){
//         return final + nums
//     }, '')
//     return result
//  }
 
//  console.log(stringConcat([1,2,3])); // "123"


//------------------------------------------------//


//Turn an array of voter objects into a count of how many people voted
// function totalVotes(arr) {
//     const result = arr.reduce(function(final, user){
//         if(user.voted){
//             final++
//         }
//         return final
//     }, 0)
//     return result
//  }
 
//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters)); // 7


//------------------------------------------------//


//Displays the costs added together from this array of objects
// function shoppingSpree(arr) {
//     const result = arr.reduce(function(final, item){
//         return final += item.price
//     }, 0)
//     return result
// }
 
//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
//  console.log(shoppingSpree(wishlist)); // 227005


//------------------------------------------------//


//Combines the arrays into one
// function flatten(arr) {
//     const result = arr.reduce(function(final, items){
//         return final.concat(items)
//     }, []) 
//     return result
//  }
 
//  var arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];
 
//  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];


//------------------------------------------------//


//Returns an object showing results of the vote
// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// function voterResults(arr) {
//    const result = arr.reduce(function(final, voter){
//        if(voter.age <= 29 && voter.voted){
//            final.numYoungVotes++
//            final.numYoungPeople++
//        } else if(voter.age <= 29){
//            final.numYoungPeople++
//        } else if(voter.age >= 30 && voter.age <= 39 && voter.voted){
//            final.numMidVotesPeople++
//            final.numMidsPeople++
//        } else if(voter.age >= 30 && voter.age <= 39){
//            final.numMidsPeople++
//        } else if(voter.age >= 40 && voter.voted){
//            final.numOldVotesPeople++
//            final.numOldsPeople++
//        } else if(voter.age >= 40){
//            final.numOldsPeople++
//        }
//        return final
//    }, { numYoungVotes: 0,
//     numYoungPeople: 0,
//     numMidVotesPeople: 0,
//     numMidsPeople: 0,
//     numOldVotesPeople: 0,
//     numOldsPeople: 0 
//   })
//   return result
// }

// console.log(voterResults(voters)); // Returned value shown below:
// /*
// { numYoungVotes: 1,
//   numYoungPeople: 4,
//   numMidVotesPeople: 3,
//   numMidsPeople: 4,
//   numOldVotesPeople: 3,
//   numOldsPeople: 4 
// }
// young 29 and below
// mid 30s
// old 40 and up
// */