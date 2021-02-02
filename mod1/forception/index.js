var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet){
    let letters = alphabet.toUpperCase()
    let newArray = []
    let split = letters.split().join()
    for(let i = 0;i < people.length;i++){
        newArray.push(people[i])
        for(let j = 0;j < split.length; j++){
            newArray.push(split[j])
        }
    }
    console.log(newArray)
}

forception(people,alphabet)