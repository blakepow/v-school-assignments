let readline = require('readline-sync');
let input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
let shift = parseInt(readline.question('How many letters would you like to shift? '));
shift = shift % 26
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
let output = ''

function cipher(input, shiftNum){
    for(let i = 0; i < input.length; i++){
        let currentLetter = input[i]
        if(currentLetter === ' '){
            output += currentLetter
            continue
        }
        else if(currentLetter === '!' || currentLetter === '?'){
            output += currentLetter
            continue
        }
        let currentIndex = alphabet.indexOf(currentLetter)
        let newIndex = currentIndex + shiftNum
        if(newIndex > 25){
            newIndex = newIndex - 26
        } else if(newIndex < 0){
            newIndex = newIndex + 26
        }
        output += alphabet[newIndex]
    }
    return output
}


console.log(cipher(input, shift))