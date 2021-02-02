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
                        autoComplete='off'
                    />
                    <input
                        placeholder='Description'
                        name='description'
                        value = {context.description}
                        onChange={context.handleChange}
                        autoComplete='off'
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
