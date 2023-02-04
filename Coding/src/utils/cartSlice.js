import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.splice(
        state.items.findIndex((a) => a.id === action.payload),
        1
      );
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});
export const { addToCart, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
