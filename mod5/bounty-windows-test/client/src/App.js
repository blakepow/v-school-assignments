import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Bounty from './components/Bounty.js'
import AddBountyForm from './components/AddBountyForm.js'

export default function App() {
    const [bounties, setBounties] = useState([])

    function getBounties(){
        axios.get('/bounties')
        .then(res => setBounties(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }

    function addBounty(newBounty){
        axios.post('/bounties', newBounty)
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data])
            })
            .catch(error => console.log('error', error))
    }

    function deleteBounty(bountyId){
        axios.delete(`/bounties/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(error => console.log('error', error))
    }
    
    function editBounty(updates, bountyId){
        axios.put(`/bounties/${bountyId}`, updates)
            .then(res => {
                setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
            })
            .catch(error => console.log('error', error))
    }

    function handleFilter(e){
        if(e.target.value === "reset"){
            getBounties()
        } else{
            axios.get(`/bounties/search/type?type=${e.target.value}`)
                .then(res => setBounties(res.data))
                .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        getBounties()
    }, [])
  return (
    <>
        <AddBountyForm 
            submit={addBounty} 
            buttonText = "Add Bounty"
        />

        <h4>Filter By Type</h4>
        <select onChange={handleFilter}>
            <option value="reset">All Bounties</option>
            <option value="jedi">Jedi</option>
            <option value="sith">Sith</option>
        </select>

        {
            bounties.map(bounty => 
                <Bounty 
                    {...bounty} 
                    key={bounty.lastName} 
                    deleteBounty={deleteBounty} 
                    editBounty={editBounty}
                />
            )}
    </>
  );
}
