const mongoose = require('mongoose')
const Schema = mongoose.Schema

const crudSchema = new Schema({
    name: String,
    quantity: Number
})

module.exports = mongoose.model("Crud", crudSchema)