import React from 'react'
import Friend from './Friend'
import data from './list'

export default function App(){
    const friendinfo = data.map(
        friend => <Friend
            name = {friend.name}
            age = {friend.age}
            pets = {friend.pets}
        />
    )

    return (
        <div>
            {friendinfo}
        </div>
    )
}

