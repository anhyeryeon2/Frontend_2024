import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";
import categoriesReducer from "./categories/categories.slice";

export const store = configureStore({
    reducer: {
        user: userReducer,           
        category: categoriesReducer, 
    },
});
