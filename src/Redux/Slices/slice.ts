// redux/slices/someSlice.js
import { createSlice } from '@reduxjs/toolkit';

const someSlice = createSlice({
  name: 'appGlobalState',
  initialState: {
    value: 0,
    menuData:[],
  },
  reducers: {
    increment: (state,payload) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = someSlice.actions;
export default someSlice.reducer;
