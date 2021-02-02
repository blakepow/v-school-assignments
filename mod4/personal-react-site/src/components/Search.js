import React from 'react'

export default function Search({handleInput, search}) {
    return (
        <div className='searchbox-wrap'>
            <input type='text' placeholder='Movie Search' className='searchbox' onChange={handleInput} onKeyPress={search}/>
        </div>
    )
}
