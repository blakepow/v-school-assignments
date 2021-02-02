let numbers = [0, 4, 6, 3, 2]

function largest(){
    max = 0
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i]
        }
    }
    console.log(max)
}
largest()

let words = ['Howdy!', 'Yeet!', 'Suh Bruh', "Yatzee!", 'Banana']
function characterReturn(){
    x = []
    for(i = 0;i < words.length;i++){
        if(words[i].indexOf('!') >= 0){
            x.push(words[i])
        }
    }
    console.log(x)
}
characterReturn()

function divisible(a, b){
    if(a % b === 0){
        console.log('true')
    }
    else{
        console.log('false')
    }
}
divisible(4, 2)
divisible(9, 3)
divisible(5, 4)

