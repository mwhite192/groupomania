// import create slice from redux toolkit
import { createSlice } from '@reduxjs/toolkit'

// define initial state
export const initialState = {
    authenticated: false,
    user: {},
}

// define action types
export const AUTHENTICATE = 'AUTHENTICATE';
export const DEAUTHENTICATE = 'DEAUTHENTICATE';

// create profile slice
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        [AUTHENTICATE]: (state, action) => {
            state.authenticated = true;
            state.user = action.payload;
        },
        [DEAUTHENTICATE]: (state, action) => {
            state.authenticated = false;
            state.user = {};
        },
    },
})

// export selectors
export const getAuthenticated = (state) => state.user.authenticated;
export const getUser = (state) => state.user.user;
export const getUserId = (state) => getUser(state).id;

// export actions and selectors
export const authenticate = userSlice.actions[AUTHENTICATE];
export const deauthenticate = userSlice.actions[DEAUTHENTICATE];



