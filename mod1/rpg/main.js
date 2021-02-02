const readline = require('readline-sync')

let hp = 100
let dps = 40


let inv = []
// let goblinSoul = 0
// let spiderSoul = 0
// let zombieSoul = 0
// let OgreSoul = 0
// let dragonSoul = 0

//Enemy list
function monster(monsterName, monsterDps, monsterHealth, monsterSound, monsterSoul, soulCount){
    this.monsterName = monsterName
    this.monsterDps = monsterDps
    this.monsterHealth = monsterHealth
    this.monsterSound = monsterSound
    this.monsterSoul = monsterSoul
    this.soulCount = soulCount
}
let goblin = new monster('Goblin', monsterDamage(1, 20), 30, '*The Goblin shrieks as he comes to attack you*', 'Goblin Soul', 0)
let spider = new monster('Spider', monsterDamage(1, 10), 1, '*The Spider rests on your arm, ready to bite!*', 'Spider Soul', 0)
let zombie = new monster('Zombie', monsterDamage(1, 40), 50, '*The Zombie lets out a very discomforting moan and it heads right to you.*', 'Zombie Soul', 0)
let ogre = new monster('Ogre', monsterDamage(1, 70), 120, '*The Ogre yells so loud you feel your bones vibrate violently*', 'Ogre Soul', 0)
let dragon = new monster('Dragon', monsterDamage(1, 90), 200, "*The Dragon lands right next to you with such force it just about knocks you off your feet*", 'Dragon Soul', 0)

console.log('')
console.log('Hello stranger!')
console.log('')
console.log("Looks like you've found yourself deep in the woods!")
console.log('')
console.log("I'm guessing you wanna get out of here, just keep walking, maybe you'll make it out... maybe...")
console.log('')
readline.question('---Press "Enter" Key---')
console.log('')

console.log("Ignore my commentary if you want, I'm the ghost of these woods, my name is Mrglrger,\nshort for Mrglrgerton.")
console.log('')

let name = readline.question("Do you remember your name? What is it? ")
name = name.toUpperCase()
console.log('')

console.log(`Hmm. ${name}? Well, pleasure to be with ya! I mean you didn't choose be here, but oh well.`)
console.log('')

console.log('I do wish you the best of luck getting out of this forest.')
console.log('')
console.log("But who knows, you might soon find yourself in my shoes... dead...")
console.log('')
console.log('Haha... ha... *ahem* anyways!')
console.log('')
readline.question('---Press "Enter" Key---')
console.log('')

console.log("Just don't get hit too hard and don't let anything stop you from running away \nfrom the evil things that may rise against you")
console.log('')
console.log("Keep on walking through the woods and you'll be alright!")
console.log('')
console.log("That's what I told the last guy and I haven't seen him since!")
console.log('')
readline.question('---Press "Enter" Key---')
console.log('')
console.log("Well, my advice is to just start walking! And if things get a little hairy, \nyou'll just have to choose between fight or flight!")
console.log('')

const walk = readline.question(`Alright ${name}, hit that 'Enter' key to start walking!`)
console.log('')

function walking(){
    
    if(walk === "w" || 'W'){
        rngsus()
    }
    else{
        walking()
    }
}
function rngsus(){
        const x = Math.floor(Math.random() * 3)

        if(x === 0){
            console.log('')
            monsterSpawn()
        }
        else if(x === 1 || x === 2 || x === 3){
            a = Math.floor(Math.random() * 9)
            console.log('')
            if (a === 0){
                console.log('So far so good, keep going')
                readline.question('---Press "Enter"---')
                rngsus()
            }
            else if (a === 1){
                console.log('No monsters yet!')
                readline.question('---Press "Enter"---')
                rngsus()
            }
            else if (a === 2){
                console.log('Left, right, left, right')
                readline.question('---Press "Enter"---')
                rngsus()
            }
            else if (a === 3){
                console.log("Hustle up! You aren't safe here!")
                readline.question('---Press "Enter"---')
                rngsus()
            }
            else if (a === 4){
                console.log('You walk so loud! Something is bound to be chasing you right now!')
                readline.question('---Press "Enter"---')
                rngsus()
            }
            else if (a === 5){
                console.log('OH SHOOT!!!!')
                console.log('Haha just kidding, keep walking!')
                readline.question('---Press "Enter"---')
                rngsus()
            }
            else if (a === 6){
                console.log('No way this guy will make it far... Oh did you hear me? Sorry')
                readline.question('---Press "Enter"---')
                rngsus()
            }
            else if (a === 7){
                console.log("What a beautiful stroll we're on! Too bad you can die at any moment")
                readline.question('---Press "Enter"---')
                rngsus()
            }
            else if (a === 8){
                console.log('I feel like something is watching you...')
                readline.question('---Press "Enter"---')
                rngsus()
            }            
        }
    }


let m = 21
function monsterSpawn(){
    if(m===21){
        readline.question('I hear something...')
        console.log('')
        // readline.question('Just in case, let me explain how to fight anything that may want to harm you')
        // console.log('')
        // readline.question("All I can do is warn you that they're coming")
        // console.log('')
        // readline.question("Here is this spectral sword, well, it's just the hilt right now, but it works very well against the \nbeasts here")
        // console.log('')
        // readline.question("Hopefully it works better for you than me, seeing that I died...")
        // console.log('')
        // readline.question("Pretty sad story really, an enemy we call 'Big Chungus' sprang from the woods, \nhe just looked down at me and punted me like a beach ball.")
        // console.log('')
        // readline.question("There was no hope for me...")
        // console.log('')
        // readline.question("Oh right! We're focusing on you!")
        // console.log('')
        // readline.question("This sword, like me, flew through the air from Big Chungus.")
        // console.log('')
        // readline.question("A rather disturbing sight")
        // console.log('')
        // readline.question("My soul, quite literally, separated from my body instantly, and was absorbed into this sword.")
        // console.log('')
        // readline.question("I give it to you, in hopes that you can defend yourself with it.")
        // console.log('')
        // readline.question("It will also take hold of any monsters soul you slay, where I will have to deal with them myself, \nI suppose.")
        // console.log('')
        // readline.question("Here, allow me to enter the hilt, I will act as the blade, but not to fear, I can still speak to you!")
        // console.log('')
        // readline.question("*A bright blue blade appears as Mrglrger fades into the hilt*")
        // console.log('')
        // readline.question("Well, now that I have rambled on for so long, let me tell you how to use this sword")
        // console.log('')
        // readline.question("I suppose it might be very strange stabbing me, your new best friend into your foes, \njust know, that feeling is mutual")
        // console.log('')
        // readline.question(`But I've taken a liking to you, ${name}, I would hate to see you die here.`)
        // console.log('')
        // readline.question("When an enemy comes to you, I want you to act on instinct.")
        // console.log('')
        // readline.question("If you wish to run, I need you to haul cheek out of there!")
        // console.log('')
        // readline.question("If you wish to fight, then bob and weave your way right up to them! \nPlunge this blade right through their heart!!!")
        // console.log('')
        // readline.question("You will take quite a beating, \nbut whenever you kill an enemy I will use their captured soul to heal both of us!")
        // console.log('')
        // readline.question("Now... let's find what that noise was.")
        // console.log('')
        monsterGenerate()
    }  
    else{
        monsterGenerate()
    }      
}
function monsterGenerate(){
    m = Math.floor(Math.random() * 18)
    if(m === 1||m === 2||m === 3|| m === 4||m === 5||m === 6||m === 7||m === 8||m===9){
        //Goblin Spawn
        monster = goblin
        readline.question(`Oh great, a pesky ${goblin.monsterName} is coming at you`)
        console.log('')
        readline.question(`${monster.monsterSound}`)
        console.log('')
        fightOrFlight()
    }
    else if(m===10||m===11||m===12||m==13){
        //Spider Spawn
        monster = spider
        readline.question("Hmmm")
        console.log('')
        readline.question("It is something small, but with too many eyes and legs")
        console.log('')
        readline.question(`It's a ${spider.monsterName}!`)
        console.log('')
        readline.question("It's on you! Kill it!")
        console.log('')
        readline.question(`${monster.monsterSound}`)
        console.log('')
        fightOrFlight()
    }
    else if(m===14||m===15||m===16){
        //Zombie Spawn
        monster = zombie
        readline.question('Stop making weird noises, I am trying to focus!')
        console.log('')
        readline.question("It's making me very uncomfortable!")
        console.log('')
        readline.question('I said stop!')
        console.log('')
        readline.question("Oh, it's just that creepy guy running at you")
        console.log('')
        readline.question('He does not look happy, in fact, he looks quite unhappy')
        console.log('')
        readline.question('Slay him!!!')
        console.log('')
        readline.question(`${monster.monsterSound}`)
        console.log('')
        fightOrFlight()
    }
    else if(m===17||m===18){
        //Ogre Spawn
        monster = ogre
        readline.question("Hmm, your tummy is not happy with your current diet i presume")
        console.log('')
        readline.question("Those are some loud grumbles!")
        console.log('')
        readline.question(`Does little ${name} have the grumblies?`)
        console.log('')
        readline.question("Hold up... that's definitely loud footsteps")
        console.log('')
        readline.question(`I apologize ${name}, it was rude to belittle you...`)
        console.log('')
        readline.question("But what is that noise?!")
        console.log('')
        readline.question(`Sweet Neptune's beard! Look out ${name}, it's an Ogre!!!`)
        console.log('')
        readline.question("He's coming right for you!")
        console.log('')
        readline.question("Take him out!!! Or run!!!")
        console.log('')
        readline.question(`${monster.monsterSound}`)
        console.log('')
        fightOrFlight()
    }
    else if(m===19){
        //Dragon Spawn
        monster = dragon
        readline.question('Oh no.')
        console.log('')
        readline.question('Oh dear')
        console.log('')
        readline.question('Ooooooh me oh my')
        console.log('')
        readline.question('Hear that flapping?')
        console.log('')
        readline.question('HIDE!!!!')
        console.log('')
        readline.question(`${name}, press "H" and you'll hide under that rock, \nlet'shope     he doesn't see you...`)
        console.log('')
        readline.question(`${monster.monsterSound}`)
        console.log('')
        fightOrFlight()
    }
    else if(m===20){
        //Big Chungus Spawn
        readline.question(`${monster.monsterSound}`)
        console.log('')
        fightOrFlight()
    }
}


function fightOrFlight(){
    let choice = readline.question("Hit 'r' to run, or hit 'f' to fight!!!")
    console.log('')

    if(choice === "r" || choice === "R"){
        //Run from monster
        flight(1, 2)
        if(runChance === 1){
            //Get away
            readline.question(`I think we lost him ${name}, that was absolutely terrifying!`)
            console.log('')
            readline.question(`Alright, back to it!`)
            console.log('')
            rngsus()
        }
        else if(runChance === 2){
            //Not so lucky
            readline.question(`Oh sweet peas! Looks like they're right on our tail ${name}!`)
            console.log('')
            fightOrFlight()
        }
    }
    else if(choice === 'f' || choice === 'F'){
        //fight monster
        readline.question(`Go ${name}! Take this ${monster.monsterName} down!!!`)
        console.log('')
        fight()
    }
    else{
        fightOrFlight()
    }

}

function fight(){
    readline.question(`Oh you're going down you nasty ${monster.monsterName}! I may be scared of you but my friend ${name} isn't!`)
    console.log('')
    readline.question(`CHOP UP THIS FOOL!!!`)
    console.log('')
    
        do{
        readline.question(`Look out!`)
        console.log('')
        readline.question(`The ${monster.monsterName} strikes you for ${monster.monsterDps}`)
        console.log('')
        hp -= monster.monsterDps
        readline.question(`*The sword slices through the ${monster.monsterName}*`)
        console.log('')
        monster.monsterHealth -= dps
        readline.question(`Oh boy ${name}, you have ${hp} health left!`)
        console.log('')
        
        if(monster.monsterHealth <= 0){
            readline.question(`HA! You killed it! Their soul is mine!`)
            console.log('')
            readline.question(`You now have ${hp} health! And you gained a ${monster.monsterSoul}`)
            console.log('')
            inv.splice(inv.indexOf(monster.monsterSoul, monster.soulCount))
            monster.soulCount++
            inv.push(monster.soulCount + ' ' + monster.monsterSoul)
            readline.question(`Alright ${name}, you now have ${hp} health and ${inv} in this sword with me! \nyay...`)
            console.log('')
            readline.question(`---Press 'Enter' to keep walking---`)
            console.log('')
            walking()
        }
        else if(hp <= 0){
            death()
        }
        }while(hp > 0 && monster.monsterHealth > 0)

    if(hp > 100){
        hp = 100
    }

    for(i = 0;i>inv.length;i++){
        if(monster.soulCount > 0){
            inv.push(soulCount)
        }
    }
    

}

function flight(min, max){
    const runChance = Math.floor(min + Math.random() * ((max - min) + 1))
    return runChance
}

function monsterDamage(min, max){
    const monsterDps = Math.floor(min + Math.random() * ((max - min) + 1))
    return monsterDps
}

function death(){
    readline.question(`...`)
    console.log('')
    readline.question(`${name}? Are you okay?`)
    console.log('')
    readline.question(`Oh no...`)
    console.log('')
    readline.question(`You don't look so good`)
    console.log('')
    readline.question(`*sigh*`)
    console.log('')
    readline.question(`Now you're back with me, trapped in this stupid sword`)
    console.log('')
    // readline.question(`It wouldn't be so bad if you could speak to me, or at all`)
    // console.log('')
    // readline.question(`I just wish you could keep your memories when I take you back out of this sword prison`)
    // console.log('')
    // readline.question(`But every time I do, the monsters are set free too, and you don't \nseem to recognize me at all`)
    // console.log('')
    // readline.question(`Maybe one day you'll finally escape this cursed forest...`)
    // console.log('')
    // readline.question(`It's been years... and I've seen your soul get trapped here with me \ntoo many times`)
    // console.log('')
    // readline.question(`But I'll never stop trying to set you free, I'd never give up on my brother...`)
    // console.log('')
}
walking()