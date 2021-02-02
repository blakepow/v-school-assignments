document.body.style.backgroundColor = 'gray'

//Gets todo items from API
function getData(){
    axios.get("https://api.vschool.io/blakepowelson/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}



//Lists Todo items in DOM
function listData(data){

    clearList()
    
    for(let i = 0; i < data.length; i++){

        //Puts the user Title input into the DOM
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title
        document.getElementById('todo-list').appendChild(h1)

        //Puts user price input into the DOM
        const h2 = document.createElement('h2')
        h2.textContent = data[i].price
        document.getElementById('todo-list').appendChild(h2)
        
        //Puts the user description input into the DOM
        const h3 = document.createElement('h3')
        h3.textContent = data[i].description
        document.getElementById('todo-list').appendChild(h3)

        //Pulls the Image from the URL and puts it into the DOM
        const img = document.createElement('IMG')
        img.setAttribute('src', data[i].imgUrl)
        img.setAttribute('width', '33%')
        document.getElementById('todo-list').appendChild(img)

        const isCompleted = data[i].completed
        const checkBox = document.createElement('input')

        //Creates Checkbox
        checkBox.setAttribute('type', 'checkbox')
        checkBox.checked = data[i].completed

        //If it is checked, then stay checked and put strikethrough line in h1, h2, and h3
        if(data[i].completed){
            h1.style.textDecoration = 'line-through'
            h2.style.textDecoration = 'line-through'
            h3.style.textDecoration = 'line-through'
            img.style.textDecoration = 'line-through'
        }
        document.getElementById('todo-list').appendChild(checkBox)

        //Makes the checkbox change the completed status to true of that API element
        checkBox.addEventListener('click', () => {
            //add attribute to stay checked
            axios.put(`https://api.vschool.io/blakepowelson/todo/${data[i]._id}`, {completed: !isCompleted})
                .then(res => {
                    console.log(res.data)
                    getData()
                })
                .catch(err => console.log(err))
            })

            
        const deleteButton = document.createElement('button')
        deleteButton.textContent = "X"
        document.getElementById('todo-list').appendChild(deleteButton)
        deleteButton.addEventListener('click', () => {
            const fullDelete = 'https://api.vschool.io/blakepowelson/todo/' + data[i]._id
            axios.delete(fullDelete)
                .then(res => {
                    getData()
                })
                .catch(err => console.log(err))
        })
    }
}





//Keeps duplicates out of the DOM
function clearList(){
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()


//Gets info from the HTML Form and puts it into the API
const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.desc.value,
        imgUrl: todoForm.imgUrl.value
    }
    
    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.desc.value = ""
    todoForm.imgUrl.value = ""
    
    axios.post("https://api.vschool.io/blakepowelson/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})
