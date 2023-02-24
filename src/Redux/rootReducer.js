import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./Slice/Login/loginSlice";


export const rootReducer = combineReducers({
    login: loginReducer,
})
