import React from 'react'

import Header from './Header'
import Footer from './Footer'
import BlogPost from './BlogPost'

export default function App() {
  return (
    <div>
      <Header/>
      <BlogPost/>
      <button className='nextPage'>Older Post</button>
      <Footer/>
    </div>
  )
}

