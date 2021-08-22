import { createSlice } from '@reduxjs/toolkit';




export const counterSlicer = createSlice({
  name: 'counterOne',
  initialState: {
    count: 0, 
  },
  reducers: {
    increaseOne: (state, {payload}) => {
      state.count += payload;
    },
    decreaseOne: (state, {payload}) => {
      state.count -= payload;
    },
  },
});

export default counterSlicer.reducer;

export const { increaseOne, decreaseOne } = counterSlicer.actions;