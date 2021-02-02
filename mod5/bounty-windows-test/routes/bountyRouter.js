const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')

//Get All Bounties
bountyRouter.get('/', (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

//Get One Bounty
// bountyRouter.get('/:bountyId', (req, res) => {
//     const bountyId = parseFloat(req.params.bountyId)
//     const foundBounty = bounties.find(bounty => bounty._id === bountyId)
//     res.send(foundBounty)
// })

//Get One Type of Bounty
bountyRouter.get('/search/type', (req, res, next) => {
    Bounty.find({ type: req.query.type }, (err, bounties) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

//Post Bounty
bountyRouter.post('/', (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

//Delete Bounty
bountyRouter.delete('/:bountyId', (req, res, next) => {
    Bounty.findOneAndDelete({ _id: req.params.bountyId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Bounty ${deletedItem.firstName} has been dealt with`)
    })
})


//Edit Bounty
bountyRouter.put('/:bountyId', (req, res, next) => {
    Bounty.findOneAndUpdate(
        { _id: req.params.bountyId }, //find this specifiedone to update
        req.body, //update the object with this information
        { new: true }, //send back the updated version
        (err, updatedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

module.exports = bountyRouter