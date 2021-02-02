let hello = 'hello'
//makes hello string upper case
let helloUpper = hello.toUpperCase()
//makes hello string lower case (it already is)
let helloLower = hello.toLowerCase()
//combines helloUpper and helloLower into one string
let hellos = helloUpper.concat(helloLower)
console.log(hellos)

helloWorld = 'Hello World'

//divides length of hello string by 2 and rounds down and logs it
function middle(){
    middleNum = Math.floor(hello.length / 2)
    console.log(middleNum)
}
middle()

//Logs the first half (rounded down) of the function's parameter
function returnFirstHalf(helloWorld){
    let HW = helloWorld.slice(0, Math.floor(helloWorld.length / 2))
    console.log(HW)
    return HW
}
returnFirstHalf('Hello World')

//Logs the first half (using Math.floor) of the function's parameter as upper case and the second half as lower case
function halfnhalf(helloWorld){
    let cap = helloWorld.slice(0, Math.floor(helloWorld.length / 2)).toUpperCase()
    let low = helloWorld.slice(Math.floor(helloWorld.length) / 2).toLowerCase()
    let caplow = cap.concat(low)
    console.log(caplow)
}
halfnhalf('hello WORLD')