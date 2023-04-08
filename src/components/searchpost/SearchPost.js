// Dependencies
import React, { useState } from 'react';
// Styles
import styles from './searchpost.css';
const SearchPost = () => {
    // State
    const [input, setInput] = useState('');
    // Handle user input and set it to state
    const handleInput = (e) => {
        // Updaing state with user input
        setInput(e.target.value);
    };
    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className='searchForm'>
            <h1 className='searchForm__title'>Blogger <span>w/</span> React<span>&</span>Redux</h1>
            <p className='searchForm__content'>This is a project made with React Redux that fetches data from api</p>
            <div className='searchForm__form-container'>
                <form className='searchForm__form' onSubmit={handleSubmit} >
                    <input type='text' placeholder='search for a post' onChange={handleInput} />
                    <button type='submit' className='form-btn'>Search</button>
                </form>
            </div>
        </div>
  );
};

export default SearchPost;