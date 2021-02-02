import React, { useState } from 'react';
import AddBountyForm from './AddBountyForm.js'

export default function Bounty(props) {
  const {firstName, lastName, type, _id, living, bountyAmount} = props
  let alive = ''
  if(living === true){
    alive = "Target is alive and dangerous"
  } else if(living === false){
    alive = "Target deceased"
  }
  const [editToggle, setEditToggle] = useState(false)
  return (
      <>
        {!editToggle ?
        <>
          <h1>{firstName} {lastName}</h1>
          <h2>Allegiance: {type}</h2>
          <h3>Status: {alive}</h3>
          <h4>Bounty Amount: {bountyAmount} credits</h4>
          <p>ID: {_id}</p>
          <button onClick={() => props.deleteBounty(_id)}>Delete</button>
          <button className='editButton' onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
          <hr/>
        </>
          :
        <>
          <AddBountyForm 
            firstName={firstName}
            lastName={lastName}
            type={type}
            _id={_id}
            living={living}
            bountyAmount={bountyAmount}
            buttonText="Edit Bounty"
            submit={props.editBounty}
          />
          <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
      </>
      }
    </>
  );
}
