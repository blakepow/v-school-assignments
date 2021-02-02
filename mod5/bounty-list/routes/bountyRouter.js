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
        firstName: 'Ben', 
        lastName: 'Kenobi', 
        living: false, 
        bountyAmount: 1, 
        type: 'jedi', 
        _id: Math.round(Math.random() * 10000)
    },
]

bountyRouter.get('/', (req, res) => {
    res.send(bounties)
})

bountyRouter.get('/:bountyId', (req, res) => {
    const bountyId = parseFloat(req.params.bountyId)
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

bountyRouter.get('/search/type', (req, res) => {
    const type = req.query.type
    const filteredBounties = bounties.filter(bounty => bounty.type === type)
    res.send(filteredBounties)
})

bountyRouter.post('/', (req, res) => {
    const newBounty = req.body
    newBounty._id = Math.round(Math.random() * 10000)
    bounties.push(newBounty)
    res.send('Target aquired')
})

bountyRouter.delete('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send('Bounty has been dealt with')
})
/*
bountyRouter.put('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    // const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    console.log(bountyIndex)
    // res.send(updatedBounty)
})
*/
module.exports = bountyRouter