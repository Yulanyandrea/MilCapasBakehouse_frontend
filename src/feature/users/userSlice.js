import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { logInUser } from './userApi';


const initialState = {
  userLogin : [],
  status: 'idle'
}

export const userLogIn = createAsyncThunk('user/login', async (user)=>{
  const response = await logInUser(user)
  return response

})

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers:{
    addUser:(state,action) => {
      const userLog = action.payload;
      state.userLogin.push(userLog)
    }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(userLogIn.pending,(state)=>{
      state.status = 'pending';
    })
    .addCase(userLogIn.fulfilled,(state, action) => {
      state.userLogin = 'finish';
      const userAcces = action.payload;
      localStorage.setItem('user', JSON.stringify(userAcces));
      state.userLogin = userAcces;
    })



  }
})

export const { addUser } = userReducer.actions
export default userReducer.reducer;
