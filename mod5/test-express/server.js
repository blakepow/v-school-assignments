const express = require('express')
const app = express()


app.use(express.json())

const movies = [
    {title: 'Die Hard', genre: 'action'},
    {title: 'Star Wars', genre: 'fantasy'}
]


app.get('/movies', (req, res) => {
    res.send(movies)
})

app.post('/movies', (req, res) => {
    const newMovie = req.body
    movies.push(newMovie)
    res.send('Success')
})

app.listen(9000, () => {
    console.log('The server is running on Port 9000!')
})
