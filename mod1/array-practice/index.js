var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//takes off last item in vegetable array
vegetables.pop()
console.log(vegetables)

//takes off last iten in fruit array
fruit.pop()
console.log(fruit)

//tells the index of 'orange'
let fruitIndex = fruit.indexOf('orange')
console.log(fruitIndex)

//puts the index index of 'orange' on the end of the fruit array
fruit.push(fruitIndex)
console.log(fruit)

//displays the length of the vegetables array
let x = vegetables.length
console.log(x)

//puts the length of vegetables array on the end of the array
vegetables.push(x)
console.log(vegetables)

//combines the fruit and vegetables array
let food = fruit.concat(vegetables)
console.log(food)

//removes 2 items starting at item 4
food.splice(4,2)
console.log(food)

//reverses the array
let reverse = food.reverse()
console.log(reverse)

//converts array into a string
let foodString = food.toString()
console.log(foodString)