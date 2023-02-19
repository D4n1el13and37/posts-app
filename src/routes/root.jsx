import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/root_style.css'

export default function Root() {
  return (
    <div id='container'>
      <div id='main'>
        <h1 id='heading'>Posts from JSONPlaceholder</h1>
        <p className='description'>
          Here you can see 100 posts from fake server and go into it and maybe
          soon you will be able to add and delete your posts
        </p>

        <Link className='into__posts' to={`posts`}>
          Go to Posts
        </Link>
      </div>
    </div>
  )
}
