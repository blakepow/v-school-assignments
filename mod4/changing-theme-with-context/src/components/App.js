import React, { Component } from 'react'
import { ThemeContextConsumer } from '../themeContext'


import Footer from './Footer'
import Main from './Main'
import Navbar from './Navbar'

export default class App extends Component {
    render() {
        return (
            <ThemeContextConsumer>
                {context => (
                    <div className={`${context.theme}-theme`}>
                        <Navbar />
                        <Main />
                        <Footer />
                    </div>
                )}
            </ThemeContextConsumer>
        )
    }
}
