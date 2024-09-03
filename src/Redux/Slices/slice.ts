// redux/slices/someSlice.js
import { createSlice, PayloadAction  } from "@reduxjs/toolkit";


const initialState = {
  value: 0,
  menuData: [],
  cartInformation: <any>[],
  filterRange: {},
};
interface CartItem {
  id: number;
  name: string;
  quantity: number;
  // Add other properties as needed
}
interface CartState {
  items: CartItem[];
}



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
      const itemIndex = state.cartInformation.findIndex((item: any) => {
        item.id === actions.payload.id;
      });
      if (itemIndex !== -1) {
        state.cartInformation[itemIndex].buyQuantity;
      }
    },
    deleteCartItem: (state, actions) => {
      state.cartInformation = state.cartInformation.filter(
        (item: any) => item.id !== actions.payload
      );
    },
    updateFilterRange: (state, actions) => {
      state.filterRange = {
        ...state.filterRange,
        start: actions.payload[0],
        end: actions.payload[1],
      };
    },

    updateCartQuantity: (
      state,
      actions
    ) => {
      const { id, newCount } = actions.payload;
      const item = state.cartInformation.find((item:any) => item.id === id);
      if (item) {
        item.buyQuantity = newCount;
      }
    },
  
  },
});

export const {
  increment,
  decrement,
  updateMenu,
  addToCart,
  updateFilterRange,
  updateCartQuantity,
  deleteCartItem
} = someSlice.actions;
export default someSlice.reducer;
