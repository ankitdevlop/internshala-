import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Feature/Userslice"
export const store=configureStore({
    reducer:{
        user:userReducer,
    }
})