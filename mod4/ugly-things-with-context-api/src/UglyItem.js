import React, {useState, useEffect} from 'react'

import {UglyContextConsumer} from './UglyContext'

export default function UglyItem(props) {
    const [editing, setEditing] = useState(false)
    const [updateValue, setUpdateValue] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target
        setUpdateValue(prev => {
            return {...prev, [name]: value}
        })
    }

    useEffect(() => {
        setUpdateValue({
            title: props.title,
            description: props.description,
            imgUrl: props.imgUrl
        })
    }, [props.title, props.description, props.imgUrl])

    return (
        <UglyContextConsumer>
            {context => (
                <div>
                    <h2>{props.title}</h2>
                    <img src={props.imgUrl} alt={props.title} style={{width:'50%'}}/>
                    <p>{props.description}</p>
                    <button onClick={() => setEditing(true)}>Edit</button>
                    <button onClick={() => {props.delete(props.id)}}>Delete</button>
                    {editing ? (
                        <>
                            <input value={updateValue.title} name={'title'} onChange={handleChange}/>
                            <input value={updateValue.description} name={'description'} onChange={handleChange}/>
                            <input value={updateValue.imgUrl} name={'imgUrl'} onChange={handleChange}/>
                            <button onClick={() => {props.edit(props.id, updateValue)}}>Submit</button>
                        </>
                    ) : <></>}

                </div>
    )}
        </UglyContextConsumer>
    )
}
