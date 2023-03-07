import { createSlice } from "@reduxjs/toolkit";

const initialState = null


export const userData = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state = action.payload;
        }
    }

})

export default userData.reducer;
export const userDataActions = userData.actions;