document.body.style.backgroundColor = 'gray'

//Variable Declaration ES6
// let name = "John"
// let age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])


//Array.map ES6
const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}
console.log(mapVegetables(carrots))

const result = carrots.map(carrot => Object({ type: 'carrot', name: carrot}))
console.log(result)

//Array.filter ES6
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(function(person) {
        return person.friendly
    })
}
console.log(filterForFriendly(people))

const final = people.filter(person => person.friendly)
console.log(final)


//Arrow Functions ES6
function doMathSum(a, b) {
    return a + b
}
const sum = (a, b) => a + b
console.log(sum(1,2))


var produceProduct = function(a, b) {
    return a * b
}
const product = (a, b) => a * b
console.log(product(5, 5))


const greeting = (firstName, lastName, age) => (`Hi ${firstName} ${lastName}, how does it feel to be ${age}`)
console.log(greeting('Jane', 'Doe', 100))



const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animal => {
         if (animal.type === "dog") {
             return true
         } else {
             return false
         }
     })
 }
 console.log(filterForDogs(animals))

const goodboy = animals.filter(animal => (animal.type === 'dog') ? true : false)
console.log(goodboy)