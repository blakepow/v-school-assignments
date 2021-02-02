import React from 'react'
import { ThemeContextConsumer } from '../themeContext'

export default function Navbar() {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-nav`}>
                    <ul>
                        <li className='listItem'>Home</li>
                        <li className='listItem'>Page 1</li>
                        <li className='listItem'>Page 2</li>
                    </ul>
                </div>
            )}
        </ThemeContextConsumer>
    )
}
