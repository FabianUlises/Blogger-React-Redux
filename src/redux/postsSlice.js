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