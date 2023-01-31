import {createSlice} from "@reduxjs/toolkit";

let auth = {
    isLoggedIn: false,
    currentUser: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: auth,
    reducers: {
        loggedIn: (state, action) => {
            state.isLoggedIn = true;
        },
        loggedOut: (state, action) => {
            state.isLoggedIn = false;
        },
        getUser: (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice;