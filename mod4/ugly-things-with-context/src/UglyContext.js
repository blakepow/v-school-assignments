import React, { Component } from 'react'

const {Provider, Consumer} = React.createContext()

class UglyContextProvider extends Component {

    state = {
        title: '',
        desc: '',
        imgUrl: '',
        uglyThings: []
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState(prevState => {
            return{
                ...prevState, 
                [name]: value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            return({
                uglyThings: [...prevState.uglyThings, {
                title: prevState.title,
                desc: prevState.desc,
                imgUrl: prevState.imgUrl
                }],
                title: '',
                desc: '',
                imgUrl: ''
            })
        })
    }

    edit = (e) => {
        e.preventDefault()
        alert('edit')
    }

    delete = (e) => {
        e.preventDefault()
        
    }
    
    render() {
        return (
            <Provider value={{
                title: this.state.title,
                desc: this.state.desc,
                imgUrl: this.state.imgUrl,
                uglyThings: this.state.uglyThings,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                edit: this.edit,
                delete: this.delete
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyContextProvider, Consumer as UglyContextConsumer}