import React from 'react'
import ReactDOM from 'react-dom'

import App from "./components/App"
import './components/App.css'
import {ThemeContextProvider} from './themeContext'

ReactDOM.render(
    <ThemeContextProvider>
        <App/>
    </ThemeContextProvider>, 
    document.getElementById('root')
)