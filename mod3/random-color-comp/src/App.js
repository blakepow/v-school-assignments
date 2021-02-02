import React, { Component } from 'react'


export default class App extends Component {

  constructor(){
    super()
    this.state = {
      color: []
    }
  }

  componentDidMount(){
    fetch(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(response => response.json())
      .then(data => { console.log(data)
        this.setState({
          color: data
        })
      })
      console.log(this.state.color)
  }

  render() {
    console.log(this.state.color.new_color)
    return (
      <div 
        style={{backgroundColor: '#' + this.state.color.new_color}} 
        width='100px' 
        height='100px'>{this.state.color.new_color}</div>
      
    )
  }
}
