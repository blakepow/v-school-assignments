import React, { Component } from 'react'


export default class App extends Component {
    constructor(){
        super()
        this.state = {
            colors: ["white", "black", "black", "white"]
        }
        
        this.inverseButton = this.inverseButton.bind(this)
        this.purpleButton = this.purpleButton.bind(this)
        this.blueButton1 = this.blueButton1.bind(this)
        this.blueButton2 = this.blueButton2.bind(this)

    }

    inverseButton(){
        this.setState(() => {
            if(this.state.colors[0] === "white"){
                return{
                    colors: ['black', 'white', 'white', 'black']
                }
            }
            else if(this.state.colors[0] === 'black'){
                return{
                    colors: ["white", "black", "black", "white"]
                }
            }
            else if(this.state.colors[0] === 'purple' && this.state.colors[2] === 'black'){
                return{
                    colors: ["purple", "purple", "white", "black"]
                }
            }
            else if(this.state.colors[0] === 'purple' && this.state.colors[2] === 'white'){
                return{
                    colors: ['purple', 'purple', 'black', 'white']
                }
            }
        })
    }

    purpleButton(){
        this.setState(() => {
            if(this.state.colors[0] === 'white'){
                return{
                    colors: ['purple', 'purple', 'black', 'white']
                }
            }
            else if(this.state.colors[0] === 'black'){
                return{
                    colors: ['purple', 'purple', 'white', 'black']
                }
            }
            else if(this.state.colors[0] === 'purple' && this.state.colors[2] === 'black'){
                return{
                    colors: ["white", "black", "black", "white"]
                }
            }
            else if(this.state.colors[0] === 'purple' && this.state.colors[2] === 'white'){
                return{
                    colors: ['black', 'white', 'white', 'black']
                }
            }
        })
    }

    blueButton1(){
        this.setState(() => {
            if(this.state.colors[2] === 'white'){
                return{
                    colors: ['black', 'white', 'blue', 'black']
                }
            }
            else if(this.state.colors[2] === 'blue' && this.state.colors[3] === 'black'){
                return{
                    colors: ['black', 'white', 'white', 'black']
                }
            }
            else if(this.state.colors[2] === 'black'){
                return{
                    colors: ['white', 'black', 'blue', 'white']
                }
            }
            else if(this.state.colors[2] === 'blue' && this.state.colors[3] === 'white'){
                return{
                    colors: ['white', 'black', 'black', 'white']
                }
            }
            
        })
    }

    blueButton2(){
        if(this.state.colors[3] === 'white'){
            return{
                colors: ['white', 'black', 'black', 'blue']
            }
        }
        else if(this.state.colors[3] === 'blue' && this.state.colors[2] === 'black'){
            return{
                colors: ['white', 'black', 'black', 'white']
            }
        }
        else if(this.state.colors[3] === 'black'){
            return{
                colors: ['white', 'black', 'black', 'blue']
            }
        }
        else if(this.state.colors[3] === 'blue' && this.state.colors[2] === 'white'){
            return{
                colors: ['white', 'black', 'black', 'white']
            }
        }
    }

    render() {
        let squares = this.state.colors.map(color => 
        <div className='Square' style={{backgroundColor:color}}>
        </div>)
        return (
            <div className='grid'>
                {squares}
                <button onClick={this.inverseButton}>Inverse!</button>
                <button onClick={this.purpleButton}>Purple!</button>
                <button onClick={this.blueButton1}>Bottom Left Blue!</button>
                <button onClick={this.blueButton2}>Bottom Right Blue!</button>
            </div>
        )
    }
}
