// Dependencies
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Redux
import { searchPost } from '../../redux/slice/postsSlice';
// Styles
import styles from './searchpost.css';
const SearchPost = () => {
    const dispatch = useDispatch();
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
        // Dont submit if input is empty
        if(input === '') return;
        dispatch(searchPost(input));
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