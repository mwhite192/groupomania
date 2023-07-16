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
export const SETUSERTIME = 'SETUSERTIME';
export const UPDATEUSER = 'UPDATEUSER';

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
        [SETUSERTIME]: (state, action) => {
            state.user.timestamp = action.payload;    
        },
        [UPDATEUSER]: (state, action) => {
            state.user.user.dataValues.formGridEmail = action.payload.formGridEmail;
            state.user.user.dataValues.formGridPassword = action.payload.formGridPassword;
          },
          
    },
})


// export selectors
export const getAuthenticated = (state) => state.user.authenticated;
export const getUserId = (state) => getUser(state).id;
export const getArrayOfUsers = (state) => Object.values(getUser(state));
export const setUsers = (state) => state.user.users;
export const getUser = (state) => state.user.user.dataValues;
export const getToken = (state) => state.user.user.token;


// export actions and selectors
export const authenticate = userSlice.actions[AUTHENTICATE];
export const deauthenticate = userSlice.actions[DEAUTHENTICATE];
export const setUserTime = userSlice.actions[SETUSERTIME];
export const updateUser = userSlice.actions[UPDATEUSER];



