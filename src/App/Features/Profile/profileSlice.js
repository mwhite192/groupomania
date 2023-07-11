// imports create slice from redux toolkit
import { createSlice } from '@reduxjs/toolkit'

// define initial state
export const initialState = {
    authenticated: false,
    profile: {},
}

// define action types
export const UPDATE = 'UPDATE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


// create profile slice
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        [UPDATE]: (state, action) => {
            state.profile = {
                ...state.profile,
                ...action.payload,
            };
        },
        [LOGIN]: (state, action) => {
            state.authenticated = true;
            state.profile = action.payload;
        },
        [LOGOUT]: (state, action) => {
            state.authenticated = false;
            state.profile = {};
        },
    },
});

// export selectors
export const getAuthenticated = (state) => state.profile.authenticated;
export const getProfile = (state) => state.profile.profile;
export const getProfileId = (state) => getProfile(state).userId;

// export actions and selectors
export const update = profileSlice.actions[UPDATE];
export const login = profileSlice.actions[LOGIN];
export const logout = profileSlice.actions[LOGOUT];

