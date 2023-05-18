import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../feature/products/productSlice';
// import userReducer from '../feature/users/userSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
