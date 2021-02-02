import React, { Component } from 'react'

import './App.css'

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      list: []
    }
  }

  componentDidMount(){
    fetch('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          list: data
        })
      })
  }

  render() {
    const hitList = this.state.list.map(person => 
    <div className='container'>
      <h1>{person.name}</h1>
      <img 
        className='image'
        src={person.image} 
        height='200px' 
        width='200px' 
        alt={person.name} 
        key={person.name}
      />
      <hr width='45%' color='black'/>
    </div>
    )

    return (
      <div>
        <p className='title'>Hit List</p>
        <hr color='black'/>
        {hitList}
      </div>
    )
  }
}
