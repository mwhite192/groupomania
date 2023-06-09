    // imports create slice from redux toolkit
    import { createSlice } from '@reduxjs/toolkit';


    // define initial state
    export const initialState = {};

    
    // define action types
    export const CREATE = 'CREATE';
    export const UPDATE = 'UPDATE';
    export const DELETE = 'DELETE';


    // create post slice
    export const postSlice = createSlice({
      name: 'post',
      initialState,
      reducers: {
        [CREATE]: (state, action) => {
          state[action.payload._id] = action.payload;
        },
        [UPDATE]: (state, action) => {
          const { postId, ...updatedData } = action.payload;
          state[postId] = {
            ...state[postId],
            ...updatedData,
          };
        },
        [DELETE]: (state, action) => {
          delete state[action.payload];
        },
      },
    });


    // export selectors
    export const getAuthenticated = (state) => state.post.authenticated;
    export const getPost = (state) => state.post.post;
    export const getAllPost = (state) => state.post;
    export const getPostById = (state, postId) => state.post[postId];
    export const getLikes = (state, postId) => state.post[postId].likes;
    export const getArrayOfPosts = (state) => Object.values(getAllPost(state));
    export const getSortedArrayOfPosts = (state) => getArrayOfPosts(state).sort((a, b) => {
      return Date.parse(b.timestamp) - Date.parse(a.timestamp)
    });


    // export actions and selectors
    export const createPost = postSlice.actions[CREATE];
    export const updatePost = postSlice.actions[UPDATE];
    export const deletePost = postSlice.actions[DELETE];
    

