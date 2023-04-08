// Dependencies
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Components
import Post from './../post/Post';
// Styles
import styles from './postlist.css';
// Redux actions
import { fetchPosts } from '../../redux/slice/postsSlice';
const PostsList = () => {
  const dispatch = useDispatch();
  // Useeffect
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
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