const form = document["addItem"]
form.addEventListener("submit", function(event){
    event.preventDefault()

    let listInput = form.title.value
    form.title.value = ''

    const li = document.createElement('li')
    const del = document.createElement('button')
    del.textContent = 'X'

    li.textContent = listInput
    document.getElementById('list').append(li,del)

    del.addEventListener('click', function(){
        li.remove()
        del.remove()
    })

})