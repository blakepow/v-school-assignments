import React from 'react'
import {ThemeContextConsumer}from '../themeContext'

export default function Footer() {
    return (
        <ThemeContextConsumer>
            {context => (
                <footer className={`${context.theme}-footer`}>I am a footer</footer>
            )}
        </ThemeContextConsumer>
    )
}
