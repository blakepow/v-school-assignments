const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/crudstoredb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
},
() => console.log('Connected to the DB')
)

app.use('/crudstore', require('./routes/crudRouter.js'))

app.listen(8700, () => {
    console.log('The server is running on Port 8700!')
})