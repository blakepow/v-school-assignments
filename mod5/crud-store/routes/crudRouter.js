const express = require('express')
const crudRouter = express.Router()
const Crud = require('../models/crud.js')

//Get All
crudRouter.get('/', (req, res, next) => {
    Crud.find((err, crudItems) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(crudItems)
    })
})

//Get One
crudRouter.get('/:crudId', (req, res, next) => {
    Crud.findById({ _id: req.params.crudId}, (err, foundItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundItem)
    })
})

//Post One
crudRouter.post('/', (req, res, next) => {
    const newCrudItem = new Crud(req.body)
    newCrudItem.save((err, savedCrudItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedCrudItem)
    })
})

//Delete One
crudRouter.delete('/:crudId', (req, res, next) => {
    Crud.findOneAndDelete({ _id: req.params.crudId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Crud named ${deletedItem.name} has been dealt with`)
    })
})

//Update One
crudRouter.put('/:crudId', (req, res, next) => {
    Crud.findOneAndUpdate(
        { _id: req.params.crudId }, //find this specific one to update
        req.body, //update the object with this information
        { new: true }, //send back the updated version
        (err, updatedCrud) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedCrud)
        }
    )
})

module.exports = crudRouter