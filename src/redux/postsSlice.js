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
export const fetchPosts = createAsyncThunk('posts/fetch', async() => {
    const res = await axios.get(apiURL);
    return res.data;
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
    }
});
const postReducer = postsSlice.reducer;
export default postReducer;