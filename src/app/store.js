import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../feature/products/productSlice';
import userReducer from '../feature/users/userSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
