const express = require('express')
const bountyRouter = express.Router()

const bounties = [
    {
        firstName: 'Rey', 
        lastName: 'Palpatine', 
        living: true, 
        bountyAmount: 500, 
        type: 'jedi', 
        _id: Math.round(Math.random() * 10000)
    },
    {
        firstName: 'Ben', 
        lastName: 'Solo', 
        living: false, 
        bountyAmount: 10, 
        type: 'sith', 
        _id: Math.round(Math.random() * 10000)
    },
    {
        firstName: 'Obi-wan', 
        lastName: 'Kenobi', 
        living: false, 
        bountyAmount: 1000, 
        type: 'jedi', 
        _id: Math.round(Math.random() * 10000)
    },
    {
        firstName: 'Olivia', 
        lastName: 'Powelson', 
        living: true, 
        bountyAmount: 1, 
        type: 'jedi', 
        _id: Math.round(Math.random() * 10000)
    },
]

bountyRouter.get('/', (req, res) => {
    res.status(200).send(bounties)
})

bountyRouter.get('/:bountyId', (req, res, next) => {
    const bountyId = parseFloat(req.params.bountyId)
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    if(!foundBounty){
        const error = new Error("The item was not found.")
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundBounty)
})

bountyRouter.get('/search/type', (req, res) => {
    const type = req.query.type
    if(!type){
        const error = new Error("You must provide jedi or sith")
        res.status(500)
        
    }
    const filteredBounties = bounties.filter(bounty => bounty.type === type)
    res.status(200).send(filteredBounties)
})

bountyRouter.post('/', (req, res) => {
    const newBounty = req.body
    newBounty._id = Math.round(Math.random() * 10000)
    bounties.push(newBounty)
    res.status(201).send(newBounty)
})

bountyRouter.delete('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send('Bounty has been dealt with')
})

bountyRouter.put('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
    res.status(201).send(updatedBounty)
})

module.exports = bountyRouter