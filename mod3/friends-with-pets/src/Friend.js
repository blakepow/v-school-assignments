import React from 'react'

import Pets from './Pets'

export default function Friend( {name, age, pets} ){

    const petinfo = pets.map(
        ({name,breed}) => <Pets
            petName = {name}
            petBreed = {breed}
        />
    )
    
    return (
        <div>
            <h1>Friend Name: {name} </h1>
            <h2>Friend Age: {age} </h2>
            {petinfo}
            <hr/>
        </div>
    )
}

