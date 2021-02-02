const express = require('express')
const pickRouter = express.Router()


pickRouter.get('/pick', (req, res, next) => {
    console.log('Middleware Test')
    next()
})

pickRouter.use((req, res, next) => {
    req.body = { name: "Blake" }
    next()
})

pickRouter.get('/pick', (req, res, next) => {
    console.log('Get request')
    res.send(req.body)
})


module.exports = pickRouter