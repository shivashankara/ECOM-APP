// redux/slices/someSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  menuData: [],
  cartInformation: <any>[],
};

export const someSlice = createSlice({
  name: "appGlobalState",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    updateMenu: (state, actions) => {
      state.menuData = actions.payload;
    },
    addToCart: (state, actions) => {
      const itemIndex = state.cartInformation.findIndex(
        (item: any) => item.id === actions.payload.id
      );

      if (itemIndex !== -1) {
        state.cartInformation[itemIndex].quantity += 1;
      } else {
        state.cartInformation.push({ ...actions.payload, quantity: 1 });
      }
    },
    updateQuantity: (state, actions) => {
      const itemIndex = state.cartInformation.findIndex((item:any)=>{
        item.id === actions.payload.id
      })
      if(itemIndex !== -1){
        state.cartInformation[itemIndex].buyQuantity
      }
    },
    deleteCartItem: (state, actions) => {
      state.cartInformation = state.cartInformation.filter(
        (item: any) => item.id !== actions.payload.id
      );
    },
  },
});

export const { increment, decrement, updateMenu, addToCart } =
  someSlice.actions;
export default someSlice.reducer;
