const express = require('express')
const app = express()


app.use(express.json())

// app.use('/pick', require('./pickRouter.js'))

app.get('/pick', (req, res, next) => {
    console.log('Middleware Test')
    next()
})

app.use((req, res, next) => {
    req.body = { name: "Blake" }
    next()
})

app.get('/pick', (req, res, next) => {
    console.log('Get request')
    res.send(req.body)
})

app.listen(7000, () => {
    console.log('The server is running on Port 7000!')
})
