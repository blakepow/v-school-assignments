//For loop where i starts at 1 and loops through equalling 100
for(i = 1;i <= 100;i++){
    //if i is divisible by 3 and 5, 'fizzbuzz' is logged
    if(i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz')
    }
    //if i is only divisible by 3, fizz is logged
    else if(i % 3 === 0){
        console.log('fizz')
    }
    //if i is only divisible by 5, buzz is logged
    else if(i % 5 === 0){
        console.log('buzz')
    }
    //if i is not divisible by 3 and/or 5, the numberi is logged
    else(console.log(i))
}