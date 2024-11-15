import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";
import categoriesReducer from "./categories/categories.slice";
import productsReducer from "./products/products.slice";
import cartReducer from "./cart/cart.slice";
import productReducer from "./products/product.slice";
import orderReducer from "./order/order.slice";

export const store = configureStore({
    reducer: {
        user: userReducer,           
        category: categoriesReducer, 
        products: productsReducer,
        cart: cartReducer,
        product:productReducer,
        order:orderReducer,
    },
    devTools: process.env.NODE_ENV !== 'production', 
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;