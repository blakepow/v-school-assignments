class hero {
    constructor(name, coins, status, hasStar, print){
        this.name = name
        this.coins = coins
        this.status = status
        this.hasStar = hasStar
        this.print = print
    }
    setName(){

    }
    hit(){
        if(this.status === 'Small'){
            this.status = 'Dead'
            clearInterval(intervalID)
        }
        else if(this.status === 'Big'){
            this.status = 'Small'
        }
        else if(this.status === 'Powered Up' && this.hasStar === true){
            this.status === 'Powered Up'
            console.log('The Star saved you!')
            this.hasStar = false
        }
        else if(this.status === 'Powered Up'){
            this.status = 'Big'
        }
    }
    powerUp(){
        if(this.status === 'Small'){
            this.status = 'Big'
        }
        else if(this.status === 'Big'){
            this.status = 'Powered Up'
            this.hasStar = true
        }
        else if(this.status === 'Powered Up'){
            this.status = 'Powered Up'
        }
    }
    moreCoin(){
        this.coins++
    }
    printGame(){
        console.log(`
        Name: ${this.name}
        Coins: ${this.coins}
        Status: ${this.status}
        `)
    }
}

const mario = new hero('Mario', 0, 'Big', false)
const luigi = new hero('Luigi', 0, 'Big', false)

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const intervalID = setInterval(function(){
    //Put this in a setInterval function
    if(getRandomArbitrary(0, 2) === 0){
        luigi.hit()
    }
    else if(getRandomArbitrary(0, 2) === 1){
        luigi.powerUp()
    }
    else{
        luigi.moreCoin()
    }
    luigi.printGame()
}, 800)

