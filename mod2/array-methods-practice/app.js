document.body.style.backgroundColor = 'gray'


var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr){
    //Filters through array and only outputs people with the age of 18 and older
    const result = arr.filter(function(person){
        if(person.age >= 18){
            return person
        } 
    })
    result.sort(function(a, b){
        return a.firstName.localeCompare(b.firstName);
    })
    result.forEach(function(person){
        //Puts array elements into a list on webpage
        let x = document.createElement('LI')
        let t = document.createTextNode(`${person.firstName} ${person.lastName} is ${person.age}`)
        x.appendChild(t)
        document.getElementById('myList').appendChild(x)
    })
    

    return result
}
 
 console.log(sortedOfAge(peopleArray));
 
 /*
 Output: 
 [ 
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>" 
 ]
 */

 