import { createSlice } from '@reduxjs/toolkit';
import { increaseOne, decreaseOne } from '../CounterOne/counterOneSlice';



export const counterSlicer = createSlice({
  name: 'counterTwo',
  initialState: {
    count: 0, 
  },
  reducers: {
    increaseTwo: (state, {payload}) => {
      state.count += payload;
    },
    decreaseTwo: (state, {payload}) => {
      state.count -= payload;
    },
  },
  extraReducers(builder){
    builder
    .addCase(increaseOne, (state, action) => {
      state.count += action.payload;
    })
    .addCase(decreaseOne, (state, action) => {
      state.count -= action.payload;
    })
  }
});

export default counterSlicer.reducer;

export const { increaseTwo, decreaseTwo } = counterSlicer.actions;