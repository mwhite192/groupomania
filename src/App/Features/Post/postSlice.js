// imports create slice from redux toolkit
import { createSlice } from '@reduxjs/toolkit'


// define initial state
export const initialState = {
}

// define action types
export const CREATE = 'CREATE';
// export const UPDATE = 'UPDATE';
// export const DELETE = 'DELETE';


// create post slice
export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        [CREATE]: (state, action) => {
            state[action.payload._id] = action.payload;
        },
        // [UPDATE]: (state, action) => {
        //     state.authenticated = true;
        //     state.post = action.payload;
        // },
        // [DELETE]: (state, action) => {
        //     state.authenticated = true;
        //     state.post = action.payload;
        // },

    },
});

// export selectors
export const getAuthenticated = (state) => state.post.authenticated;
export const getAllPost = (state) => state.post;
export const getPostById = (state) => getAllPost(state)._id;
export const getArrayOfPosts = (state) => Object.values(getAllPost(state));

// export actions and selectors
export const createPost = postSlice.actions[CREATE];
// export const updatePost = postSlice.actions[UPDATE];
// export const deletePost = postSlice.actions[DELETE];

