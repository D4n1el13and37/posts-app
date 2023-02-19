import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/post_style.css";

/**
 * TODO:
 *
 * - PATCH Post
 *  from -> onSubmit -> patch post -> render UI
 *
 * - DELETE Post
 *  button onClick -> delete post -> notify user
 */

export default function Post() {
  const { id } = useParams();

  // Loading deection
  const [loading, setLoading] = useState(false);

  /**
   * post = object | undefined
   */
  const [post, setPost] = useState(undefined);

  /**
   * show us clicked button edit or no, for render editing form
   */
  const [isEdited, setIsEdited] = useState(false);

  //for changing post
  let newTitle = "";
  let newBody = "";

  function edited() {
    isEdited ? setIsEdited(false) : setIsEdited(true);
  }

  function handleTitleChange(event) {
    newTitle = event.target.value;
  }

  function handleBodyChange(event) {
    newBody = event.target.value;
  }

  // Helpers
  const isLoading = loading && !post;
  const isLoaded = !loading && post;
  const isError = !loading && !post;

  useEffect(() => {
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((value) => setPost(value))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSumbit = (event) => {
    event.preventDefault();
    setPost({ title: newTitle, body: newBody });
    setIsEdited(false);
  };

  return (
    <div className="container">
      {/* Sliced rendering logic */}
      {isLoading && "loading..."}

      {isLoaded && (
        <div className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <div className="post__buttons">
            {isEdited ? (
              <button onClick={() => edited()}>Save</button>
            ) : (
              <button onClick={() => edited()}>Edit</button>
            )}

            <button
              onClick={() =>
                setPost({
                  title: "Post was deleted 😒",
                  body: "tap F5 for rerender post from server",
                })
              }
            >
              Delete
            </button>
          </div>
        </div>
      )}
      {isEdited ? (
        <form className="stack-small" onSubmit={handleSumbit}>
          <div>
            <label htmlFor="">New titile</label>
            <input
              type="text"
              className="change-post"
              onChange={handleTitleChange}
            />
            <input
              type="text"
              className="change-post"
              onChange={handleBodyChange}
            />
            <button type="submit" className="btn btn__primary todo-edit">
              Save
            </button>
          </div>
        </form>
      ) : (
        ""
      )}

      {isError && "loading error"}
    </div>
  );
}
