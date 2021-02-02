import React from 'react'

export default function Names(props) {

    const nameList = props.names.map(name => <li>{name}</li>)

    return (
        <form>

            <h1>Name Entry</h1>

            <input 
                name = 'name'
                value={props.name}
                type='text'
                onChange = {props.change}
            />

            <h2>{props.name}</h2>

            <button onClick={props.click}>Submit</button>

            <hr/>

            <ol>
                {nameList}
            </ol>

        </form>
    )
}

