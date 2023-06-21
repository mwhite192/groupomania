// import create slice from redux toolkit
import { createSlice } from '@reduxjs/toolkit'

// define initial state
export const initialState = {
    authenticated: false,
    profile: {},
}

// define action types
export const UPDATE = 'UPDATE';

// create profile slice
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        [UPDATE]: (state, action) => {
            state.authenticated = true;
            state.profile = action.payload;
        },
    },
});

// export selectors
export const getAuthenticated = (state) => state.profile.authenticated;
export const getProfile = (state) => state.profile.profile;
export const getProfileId = (state) => getProfile(state).userId;

// export actions and selectors
export const update = profileSlice.actions[UPDATE];
