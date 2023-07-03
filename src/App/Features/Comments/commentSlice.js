// imports create slice from redux toolkit
import { createSlice } from '@reduxjs/toolkit';


// define initial state
export const initialState = {};


// define action types
export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';


// create comment slice
export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        [CREATE]: (state, action) => {
            state[action.payload._id] = action.payload;
        },
        [UPDATE]: (state, action) => {
            const { commentId, ...updatedData } = action.payload;
            state[commentId] = { ...state[commentId], ...updatedData };
        },
        [DELETE]: (state, action) => {
            delete state[action.payload];
        },
    },
});


// export selectors
export const getComment = (state) => state.comment;
export const getCommentById = (state, commentId) => state.comment[commentId];
export const getCommentsByPostId = (state, postId) => {
    const comments = Object.values(state.comment);
    return comments.filter((comment) => comment.postId === postId);
};


// export actions and selectors
export const createComment = commentSlice.actions[CREATE];
export const updateComment = commentSlice.actions[UPDATE];
export const deleteComment = commentSlice.actions[DELETE];