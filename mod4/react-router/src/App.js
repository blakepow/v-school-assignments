import React from 'react'

import './App.css'

import {Switch, Route, Link} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Services from './Services'

export default function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/services'>Services</Link>
      </nav>

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/services' component={Services}/>
      </Switch>

      {/*
      OR
      <Switch>
        <Route exact path='/'>
          <Home />
        <Route/>
        <Route path='/about'>
          <About />
        <Route/>
        <Route path='/services'>
          <Services />
        <Route/>
      </Switch> 
      */}
      <footer>Hello</footer>
    </div>
  )
}