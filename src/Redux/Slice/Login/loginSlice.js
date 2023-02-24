import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    heading: "inital",
}


export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setHeading: (state, action) => {
            state.heading = action.payload;
        }
    }

})

export const loginReducer=loginSlice.reducer;
export const loginAction=loginSlice.actions;