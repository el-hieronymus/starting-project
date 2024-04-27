import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';
import { CiTextAlignCenter } from 'react-icons/ci';

function PostsList({ onNewPost, isStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {

    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      // .then((response) => {
      //   if (!response.ok) {
      //     throw new Error('Failed to send request.');
      //   }
      //   return response.json();
      // })
      // .then((data) => {
      //   console.log(data);
      // })
      // .catch((error) => {
      //   console.error(error);
      // });


    //setPosts((prevPosts) => { return [postData, ...prevPosts]; }); // Simplified version below
    setPosts((prevPosts) => [postData, ...prevPosts]);
  }

  return (
    <>
      { onNewPost && ( 
        <Modal onClose={isStopPosting}> 
          <NewPost onCancel={isStopPosting} onAddPost={addPostHandler} />
        </Modal>)
      }
      {(posts.length === 0) && (
        <h2 style={ {textAlign:'center'} } >No posts yet. Add one!</h2>
      )}
      {(posts.length > 0) && (        
        <ul className={classes.posts}>
          {posts.map((post) => <Post key={Math.random()} author={post.author} body={post.body} />)}
        </ul>
      )}
    </>
  );
}

export default PostsList;
