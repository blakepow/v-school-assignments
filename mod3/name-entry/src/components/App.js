import React, { Component } from 'react'

import Names from './Names'

export default class App extends Component {

    constructor(){
        super()
        this.state = {
            name: '',
            names: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            name:event.target.value
        })
    }
    
    handleClick = (event) => {
        event.preventDefault()
        this.setState(prevState => {
            return{
                name: '',
                names: [
                    ...prevState.names,
                    this.state.name
                ]
            }
        })
    
}

    render() {
        return (
            <div>
                <Names
                    name = {this.state.name}
                    names = {this.state.names}
                    change = {this.handleChange}
                    click = {this.handleClick}
                />
            </div>
        )
    }
}

