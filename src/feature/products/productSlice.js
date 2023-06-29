import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDataMilhojasFilter,getDataMilhojas } from './productApi';

const initialState = {
  dataBase:[],
  cakeMilhoja:[],
  shoppingCart:[],
  total:0,
  status: 'idle',
};
// get all data
export const milhojasDataBase = createAsyncThunk('milhoja/data base', async()=>{
  const response = await getDataMilhojas()
  return response
})

// get data by filters
export const productsData = createAsyncThunk('products/milhojas', async (filters) => {
  const response = await getDataMilhojasFilter(filters)
  return response
})


const productReducer = createSlice({
  name: 'products',
  initialState,
  reducers:{
    //cake
    increment:(state,action)=>{

      const milhojaItem = action.payload;
      const existingItem = state.shoppingCart.find((cartItem) => cartItem._id === milhojaItem);
      if(existingItem){
        existingItem.amount+=1;
      }
    },
    decrement:(state,action)=>{
      const milhojaItem = action.payload;
      const existingItem = state.shoppingCart.find((cartItem) => cartItem._id === milhojaItem);
      if(existingItem){
        existingItem.amount-=1;
      }
    },

    //addToCart
    addCart:(state,action)=>{
      const milhojaProduct = action.payload;
      state.shoppingCart.push(milhojaProduct)
    },

    //delete products from shopping cart
    deleteMilhojas:(state,action)=>{
      const milhojas = action.payload;
      state.shoppingCart = state.shoppingCart.filter((item) => item._id !== milhojas);

    }
  },
  extraReducers:(builder) => {
    builder
    //take all data base
    .addCase(milhojasDataBase.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(milhojasDataBase.fulfilled, (state, action) => {
      state.dataBase = action.payload;
    })
    .addCase(milhojasDataBase.rejected, (state) => {
      state.status = 'reject';
    })
    // filter milhojas cake
    .addCase(productsData.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(productsData.fulfilled, (state, action) => {
      state.cakeMilhoja = action.payload;
    })
    .addCase(productsData.rejected, (state) => {
      state.status = 'reject';
    })

  }
});

export const { increment,
  decrement,
  addCart,
  deleteMilhojas
} = productReducer.actions;

export default productReducer.reducer;
