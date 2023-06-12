import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDataMilhojasFilter,getDataMilhojas } from './productApi';

const initialState = {
  cake:0,
  halfCakeAmount:0,
  personalCake:0,
  dataBase:[],
  cakeMilhoja:[],
  shoppingCart:[],
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
      state.cake +=1;
    },
    decrement:(state,action)=>{
      state.cake-=1;
    },

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
  incrementHalfCake,
  decrementHalfCake,
  incrementPersonalCake,
  decrementPersonalCake
} = productReducer.actions;

export default productReducer.reducer;
