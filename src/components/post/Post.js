// Dependencies
import React from 'react';
// Styles
import styles from './post.css';
const Post = (props) => {
  return (
    <div className='post'>
        <h3 className='post__title'>{props.title}</h3>
        <h4 className='post__body'>{props.content}</h4>
    </div>
  );
};

export default Post;