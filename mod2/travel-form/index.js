const form = document.myForm

form.addEventListener('submit', function(event){
    event.preventDefault()

    const firstName = form.firstName.value
    const lastName = form.lastName.value

    const age = form.age.value

    const gender = form.gender.value
    
    const location = form.location.value

    const checkedMeals = []

    for(let i = 0; i < form.food.length;i++){
        if(form.food[i].checked){
            checkedMeals.push(form.food[i].value)
        }
    }

    alert(`
        First Name: ${firstName}\n
        Last Name: ${lastName}\n
        Age: ${age}\n
        Gender: ${gender}\n
        Location: ${location}\n
        Dietary Restrictions: ${checkedMeals}
        `)
})