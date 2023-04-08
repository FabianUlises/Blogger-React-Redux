import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiURL from './../../utils/apiURL';
// Store
const initialState = {
    posts: [],
    loading: false,
    error: undefined
};
// Actions
// Get all posts
export const fetchPosts = createAsyncThunk('posts/fetch', async() => {
    const res = await axios.get(apiURL);
    return res.data;
});
// Get all posts
export const searchPost = createAsyncThunk('posts/search', async(payload) => {
    try {
        const res = await axios.get(`${apiURL}/${payload}`);
        return res.data;
    }catch(err) {
        console.log(err);
        return err
    }
});
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;

        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.posts = [];
            state.error = action.payload;
        });
        // Search post actions
        builder.addCase(searchPost.pending, (state, action) => {
            state.loading = true;
            
        });
        builder.addCase(searchPost.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = [action.payload];
        });
        builder.addCase(searchPost.rejected, (state, action) => {
            state.loading = false;
            state.props = [];
            state.error = action.payload;
        });
    }
});
const postReducer = postsSlice.reducer;
export default postReducer;