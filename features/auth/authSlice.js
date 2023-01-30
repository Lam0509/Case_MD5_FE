import {createSlice} from "@reduxjs/toolkit";

const auth = {
    isLoggedIn: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: auth,
    reducers: {
        loggedIn: (state, action) => {
            state.isLoggedIn = true;
        }
    }
})

export const {loggedIn} = authSlice.actions;
export default authSlice.reducer;