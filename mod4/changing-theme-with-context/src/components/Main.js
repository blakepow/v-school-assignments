import React from 'react'
import { ThemeContextConsumer } from '../themeContext'

export default function Main() {
    return (
        <ThemeContextConsumer>
            {context => (
                <body className={`${context.theme}-body`}>
                    <h1>This page is in {context.theme === 'light' ? 'Light' : 'Dark'} Mode</h1>
                    <button onClick={context.toggleTheme} className={`${context.theme}-button`}>Switch Theme</button> 
                </body>
            )}
        </ThemeContextConsumer>
    )
}
