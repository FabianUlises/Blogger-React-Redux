// Dependencies
import React from 'react'
// Styles
import styles from './searchpost.css';

const SearchPost = () => {
  return (
    <div className='searchForm'>
        <h1 className='searchForm__title'>Blogger <span>w/</span> React<span>&</span>Redux</h1>
        <p className='searchForm__content'>This is a project made with React Redux that fetches data from api</p>
        <div className='searchForm__form-container'>
            <form className='searchForm__form'>
                <input type='text' placeholder='search for a post' />
                <button type='submit' className='form-btn'>Search</button>
            </form>
        </div>
    </div>
  );
};

export default SearchPost;