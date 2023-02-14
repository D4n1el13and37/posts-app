import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/post_style.css";

export default function Post() {
  const { id } = useParams();
  const [post, setPosts] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, [id]);

  return (
    <div className="container">
      <div className="post">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
