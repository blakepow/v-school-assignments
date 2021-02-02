var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let x = 0
for(i = 0; i < officeItems.length; i++){
    (officeItems[i] === 'computer') ? (x++, console.log(x)): null
    
    // if (officeItems[i] === 'computer'){
    //     x++
    //     console.log(x)
    // }
}