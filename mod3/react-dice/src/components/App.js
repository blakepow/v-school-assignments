import React, { Component } from 'react'

export default class App extends Component {

    constructor(){
        super()
        this.state = {
            num1: Math.floor(Math.random() * 6) + 1,
            num2: Math.floor(Math.random() * 6) + 1,
            num3: Math.floor(Math.random() * 6) + 1,
            num4: Math.floor(Math.random() * 6) + 1,
            num5: Math.floor(Math.random() * 6) + 1
        }
        this.random = this.random.bind(this)
    }

    random(){
        this.setState(() => {
            return{
                num1: Math.floor(Math.random() * 6) + 1,
                num2: Math.floor(Math.random() * 6) + 1,
                num3: Math.floor(Math.random() * 6) + 1,
                num4: Math.floor(Math.random() * 6) + 1,
                num5: Math.floor(Math.random() * 6) + 1
            }
        })
    }

    render() {
        let one = this.state.num1
        let two = this.state.num2
        let three = this.state.num3
        let four = this.state.num4
        let five = this.state.num5
        return (
            <div className='grid'>
                <div className='one number'>{one}</div>
                <div className='two number'>{two}</div>
                <div className='three number'>{three}</div>
                <div className='four number'>{four}</div>
                <div className='five number'>{five}</div>
                <button className='random' onClick={this.random}>Randomize!</button>
            </div>
        )
    }
}
