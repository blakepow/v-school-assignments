import React from 'react'

import {UglyContextConsumer} from './UglyContext'

export default function UglyItem(props) {
    return (
        <UglyContextConsumer>
            {context => (
                <div>
                    <h2>{props.title}</h2>
                    <img src={props.imgUrl} alt={props.title}/>
                    <p>{props.desc}</p>
                    <button onClick={context.delete}>Delete</button>
                    <button onClick={context.edit}>Edit</button>
                </div>
    )}
        </UglyContextConsumer>
    )
}
