import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/posts_style.css'

export default function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    /**
     * Use abort controller to abort requests.
     */
    const controller = new AbortController()

    fetch('https://jsonplaceholder.typicode.com/posts', {
      // Pass signal to the RequestInit
      signal: controller.signal,
    })
      .then(response => response.json())
      .then(json => setPosts(json))

    // On unmount call the controoler to abort the requests
    return () => controller.abort()
  }, [])

  return (
    <ul>
      {posts.map(post => {
        return (
          <li key={post.id}>
            <span>{post.id}</span>

            <h3>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </h3>
          </li>
        )
      })}
    </ul>
  )
}
