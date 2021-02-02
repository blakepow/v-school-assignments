var people = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for (i = 0; i < people.length; i++){
      if(people[i].age < 18){
          console.log(people[i].name + ' is not old enough')
      }
      else{
          console.log(people[i].name + ' is old enough')
      }
  }