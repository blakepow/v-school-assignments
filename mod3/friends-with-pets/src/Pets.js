  
import React from 'react'

export default function Pets( {petName,petBreed} ){
    return (
        <div>
            <p>Pet Name: {petName} </p>
            <p>Pet Breed: {petBreed} </p>
            <hr/>
        </div>
    )
}

