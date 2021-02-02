const express = require('express')
const app = express()

app.use(express.json())

const todos = [
    {
        name: 'Shopping',
        description: 'Go to store for food',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
        completed: false,
        _id: Math.round(Math.random() * 10000)
    },
    {
        name: 'Nap',
        description: 'Best part of the whole',
        imgUrl: 'https://farm4.static.flickr.com/3097/2607621162_13ece1c44c.jpg?v=0',
        completed: false,
        _id: Math.round(Math.random() * 10000)
    },
    {
        name: 'Cook',
        description: 'Second best part of the day',
        imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-750561559-1528900910.jpg',
        completed: true,
        _id: Math.round(Math.random() * 10000)
    },
]

app.get('/todos', (req, res, next) => {
    res.send(todos)
})

app.get('/todos/:todoId', (req, res, next) => {
    const todoId = parseFloat(req.params.todoId)
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

app.post('/todos', (req, res, next) => {
    const newTodo = req.body
    newTodo._id = Math.round(Math.random() * 10000)
    todos.push(newTodo)
    res.send('Todo added!')
})

app.delete('/todos/:todoId', (req, res, next) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send('Todo has been deleted!')
})

app.listen(6000, () => {
    console.log('This server is on Port 6000!')
})