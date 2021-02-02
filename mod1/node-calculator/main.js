let readlineSync = require('readline-sync');
let num1 = parseInt(readlineSync.question('Enter the first number: '));
let num2 = parseInt(readlineSync.question('Enter the second number: '));
function main(){
    let operation = readlineSync.question('Enter the operation to perform (add, sub, mul, div): ');
    function add(num1, num2){
        console.log('The result is ' + (num1 + num2));
    }
    function sub(num1, num2){
        console.log('The result is ' + (num1 - num2));
    }
    function mul(num1, num2){
        console.log('The result is ' + (num1 * num2));
    }
    function div(num1, num2){
        console.log('The result is ' + (num1 / num2));
    }
    if (operation === 'add'){
        add(num1, num2);
    }
    else if (operation === 'sub'){
        sub(num1, num2);
    }
    else if (operation === 'mul'){
        mul(num1, num2);
    }
    else if (operation === 'div'){
        div(num1, num2);
    }
    else{
        main();
    }
}

main();