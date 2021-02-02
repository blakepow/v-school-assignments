import React, {useState} from 'react'
import axios from 'axios'

import About from './components/About'
import StanLee from './components/StanLee'

import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'

import {Link, Switch, Route} from "react-router-dom"

export default function App() {
  const [state, setState] = useState({
    s: '',
    results: [],
    selected: {}
  })

  const apiurl = 'http://www.omdbapi.com/?apikey=76125a5c'

  const search = (e) => {
    if (e.key === 'Enter'){
      axios(apiurl + '&s=' + state.s).then(({data}) => {
        let results = data.Search

        setState(prevState => {
          return{ ...prevState, results}
        })
      })
    }
  }

  const handleInput = (e) => {
    let s = e.target.value

    setState(prevState => {
      return { ...prevState, s: s}
    })
  }

  const openPopup = id => {
    axios(apiurl + '&i=' + id).then(({ data }) => {
      let result = data

      console.log(result)

      setState(prevState => {
        return{ ...prevState, selected: result }
      })

    })
  }

  const closePopUp = () => {
    setState(prevState => {
      return { ...prevState, selected: {}}
    })
  }

  return (
    <div>
      <nav>
        <Link className='link' to='/'>Search</Link>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to='/StanLee'>Stan Lee</Link>
      </nav>
      <Switch>
        <Route exact path='/'>
          <header>
            <h1>Movie Database</h1>
          </header>
          <main>
            <Search handleInput={handleInput} search={search}/>

            <Results results={state.results} openPopup={openPopup}/>



            {(typeof state.selected.Title != 'undefined') ? <Popup selected={state.selected} closePopup={closePopUp}/> : false}
          </main>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/StanLee'>
          <StanLee />
        </Route>
      </Switch> 
      <footer>
        Created by Blake Powelson
      </footer>
    </div>
  )
}

