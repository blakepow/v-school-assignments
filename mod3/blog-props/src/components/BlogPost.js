import React from 'react'

import data from './info'
import BlogList from './BlogList'

export default function BlogPost() {
    const entries = data.map(
        entry => <BlogList
          title = {entry.title}
          subTitle = {entry.subTitle}
          author = {entry.author}
          date = {entry.date}
        />
      )

    return (
        <div>
            {entries}
        </div>
    )
}
