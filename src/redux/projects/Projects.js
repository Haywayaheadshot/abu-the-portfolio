import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

initialState: [
    
],
const greetingsSlice = createSlice({
  name: 'projects',
  extraReducers: (builder) => {
    builder.addCase(fetchGreetings.fulfilled, (_, action) => action.payload);
  },
});

export const fetchGreetings = createAsyncThunk('FETCH_MESSAGE', () => axios.get(url)
  .then((response) => {
    const greeting = response.data.message;
    return greeting;
}));

export default greetingsSlice.reducer;
