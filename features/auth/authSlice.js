import {createSlice} from "@reduxjs/toolkit";

const auth = {
    isLoggedIn: false,
    currentUser: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: auth,
    reducers: {
        loggedIn: (state, action) => {
            state.isLoggedIn = true;
            state.currentUser = action.payload;
        },
        loggedOut: (state, action) => {
            state.currentUser = {};
            state.isLoggedIn = false;
        }
    }
})

export const {loggedIn,loggedOut} = authSlice.actions;
export default authSlice.reducer;