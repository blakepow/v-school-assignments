function sum(x, y){
    try{
        if(isNaN(x) || isNaN(y)){
            throw "ERROR!!"
        }
        else{
            console.log(x + y)
        }
    }
    catch(err){
        console.log(err)
    }
}
sum(7, 56)

//Using right datatype (numbers)
try{
    sum(1, 2)
}
catch{
    console.log(err)
}
//Wrong datatype
try{
    sum('hi', 2)
}
catch{
    console.log(err)
}


//Try catch with login info
var user = {username: "sam", password: "123abc"};
function login(username, password){
    try{
        if(username === 'sam' && password === '123abc'){
            console.log('Login Successful!')
        }
        else{
            throw 'Login Failed'
        }
    }
    catch(err){
        console.log(err)
    }
}
login('sam', '123abc')

//Right info
try{
    login('sam', '123abc')
}
catch(err){
    console.log(err)
}
//Wrong username
try{
    login('sm', '123abc')
}
catch(err){
    console.log(err)
}
