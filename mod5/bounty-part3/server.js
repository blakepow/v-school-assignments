const express = require('express')
const app = express()


app.use(express.json())

app.use('/bounties', require('./routes/bountyRouter.js'))


//Error Handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(6500, () => {
    console.log('The server is running on Port 6500!')
})