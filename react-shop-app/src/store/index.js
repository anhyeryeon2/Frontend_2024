import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";
import categoriesReducer from "./categories/categories.slice";
import productsReducer from "./products/products.slice";
import cartReducer from "./cart/cart.slice";
import productReducer from "./products/product.slice";

export const store = configureStore({
    reducer: {
        user: userReducer,           
        category: categoriesReducer, 
        products: productsReducer,
        cart: cartReducer,
        product:productReducer
    },
    devTools: process.env.NODE_ENV !== 'production', 
});
