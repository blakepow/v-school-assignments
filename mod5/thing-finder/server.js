const express = require('express')
const app = express()


app.use(express.json())

const movies = [
    {title: 'Die Hard', genre: 'action'},
    {title: 'Star Wars', genre: 'fantasy'},
    {title: 'Spongebob', genre: 'romance'}
]


app.get('/movies', (req, res) => {
    res.send(movies)
})

app.get('/search/genre', (req, res) => {
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})

app.post('/movies', (req, res) => {
    const newMovie = req.body
    movies.push(newMovie)
    res.send('Success')
})

app.listen(8500, () => {
    console.log('The server is running on Port 8500!')
})
