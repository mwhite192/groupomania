// import create slice from redux toolkit
import { createSlice } from '@reduxjs/toolkit'

// define initial state
export const initialState = {
    authenticated: false,
    user: {},
}

// define action types
export const AUTHENTICATE = 'AUTHENTICATE';

// create profile slice
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        [AUTHENTICATE]: (state, action) => {
            state.authenticated = true;
            state.user = action.payload;
        },
    },
})

// export selectors
export const getAuthenticated = (state) => state.profile.authenticated;
export const getUser = (state) => state.profile.user;
export const getUserId = (state) => getUser(state).id;

// export actions and selectors
export const authenticate = profileSlice.actions[AUTHENTICATE];



