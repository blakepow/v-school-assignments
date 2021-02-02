document.body.style.backgroundColor = 'gray'

function collectAnimals(...animals) {  
    console.log(...animals)
    return {...animals}
}


collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]


function combineFruit(fruit, sweets, vegetables){
    return {
        fruit,
        sweets,
        vegetables
    }
}


console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))
//=> {
    //     fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrit"]
    // }



const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
  function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }



function returnFirst(items){
    const firstItem = items[0]; /*change this line to be es6*/
    return firstItem
}
/*
function returnFirst(items){
    const [items] = firstItem
    return firstItem
}
*/


const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`
}

console.log(returnFavorites(favoriteActivities))




function product(a, b, c, d, e) {  
    var numbers = [a,b,c,d,e];
  
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }


let times = (a, b, c, d, e) => {
    let numbers = [a, b, c, d, e]
    return numbers.reduce((acc, number) => {acc * number}, 1)
}




function unshift(array, ...second) {  
    return [...second, ...array];
  }




function populatePeople(names){
  return names.map(function(name){
      name = name.split(" ");
      [firstName, lastName] = name
      return {
          firstName,
          lastName
      }
  })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
