import React from 'react'
import {UglyContextConsumer} from './UglyContext'



export default function Form() {
    return (
        <UglyContextConsumer>
            {context => (
                <form onSubmit={(e) => {
                    context.handleSubmit(e)
                }}>
                    <input
                        placeholder='Title'
                        name='title'
                        value = {context.title}
                        onChange={context.handleChange}
                    />
                    <input
                        placeholder='Description'
                        name='desc'
                        value = {context.desc}
                        onChange={context.handleChange}
                    />
                    <input
                        placeholder='Image Url'
                        name='imgUrl'
                        value = {context.imgUrl}
                        onChange={context.handleChange}
                    />
                    <button>Submit</button>
                </form>
            )} 
        </UglyContextConsumer>
    )
}
