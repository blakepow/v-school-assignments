const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/authordb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
},
() => console.log('Connected to the DB')
)

app.use('/authors', require('./routes/authorRouter'))
app.use('/books', require('./routes/bookRouter'))

app.listen(8900, () => {
    console.log('The server is running on Port 8900!')
})