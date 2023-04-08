// Dependencies
import React from 'react';
// Components
import Post from './../post/Post';
// Styles
import styles from './postlist.css';
const PostsList = () => {
  return (
    <section className='postlist-container'>
      <h2 className='section-title'>Total Posts 100</h2>
      <div className='posts-container'>
        <Post />
      </div>
    </section>
  );
};

export default PostsList;