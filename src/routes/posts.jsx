import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/posts_style.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <span>{post.id}</span>

            <h3>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </h3>
          </li>
        );
      })}
    </ul>
  );
}
