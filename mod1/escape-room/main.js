const readline = require("readline-sync");
function main(){
    console.log("Looks like you're stuck in this room...")

    console.log("There's a key somewhere, maybe in that hole in the wall???")

    console.log("Once you find it, open that door to freedom!")

    console.log("So which is it?")

    console.log('[1]Put your hand in the hole')
    console.log('[2]Find the key')
    console.log('[3]Open the door')
    let game = true;
    while(game === true){
        const option = readline.question("Choose either option 1, 2, or 3: ");
        if (option === '1'){
            console.log('The door is locked')
        
            console.log('The key must be found')
        
            console.log('That hole may be a good spot to hide a key!')
            break
        }
        else if(option === '2'){
            console.log('Wow! You found the key!')
        
            console.log('Right at your feet this whole time!')
        
            console.log('I wonder what it goes to...')
        
            console.log('Ahh yes, perhaps the hole in the wall!')
        
            console.log("After all, that is more likely than putting a key in a door right?")
        
            console.log('[1]Put the key in the hole')
            console.log('[2]Put the key in that lame old door')
            const choice = readline.question("Choose between option 1 and 2: ");
                if(choice === '1'){
                    console.log('You did it!')
                    console.log('You unlocked it!')
                    console.log('Your body has been unlocked!')
                    console.log('Ha!')
                    console.log('You died!')
                    console.log('You trust my mysterious voice too much...')
                    break
                }
                else if (choice ==='2'){
                    console.log('You passed the trial!')
                    console.log("You opened the door and now you're free!")
                    console.log('For now...')
                    break
                }
                else{
                    break
                }
        }
        else if(option === '3'){
            console.log('Nice!')
            console.log('You found something!')
            console.log('That something was death!')
            console.log('Yeah...')
            console.log('You died')
            break
        }
        else{
            game = false;
        }
    }
}
main();