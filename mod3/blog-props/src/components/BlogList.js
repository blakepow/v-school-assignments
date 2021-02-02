import React from 'react'

export default function BlogList({title, subTitle, author, date}) {
    return (
        <div className='mainContent'>
            <h1 className='title'>{title}</h1>
            <h2 className='subTitle'>{subTitle}</h2>
            <p className='author'>Posted by {author} on {date}</p>
            <hr/>
        </div>
    )
}
