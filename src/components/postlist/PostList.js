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
    // Fetching data using redux
    dispatch(fetchPosts());
  }, []);
  // Selecting data from store
  const { posts, loading, error} = useSelector((state) => {
    return state.posts;
  });
  // Looping through posts and creating post component with data pass down as props
  const displayPosts = posts.map((post) => (
    <Post title={post.title} content={post.body} key={post.id} />
  ));
  console.log(error)
  return (
    <section className='postlist-container'>
      <h2 className='section-title'>Total Posts {posts.length}</h2>
      <div className='posts-container'>
        {
          loading
          ? <h1>Loading...</h1>
          : error
          ? <h1>{error}</h1>
          : displayPosts
        }
      </div>
    </section>
  );
};

export default PostsList;