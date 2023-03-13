import { createSlice } from "@reduxjs/toolkit";
const calculateCartTotal = (items) =>
  items.reduce((total, item) => total + item.price / 100, 0);

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    items: [],
    cartTotal: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      debugger;
      state.cartTotal = calculateCartTotal(state.items);
    },
    removeFromCart: (state, action) => {
      debugger;
      const { id } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (state.items !== -1) {
        state.items.splice(index, 1);
        state.cartTotal = calculateCartTotal(state.items);
      }
    },
    clearCart: (state, action) => {
      {
        state.items = [];
        state.cartTotal = 0;
      }
    },
  },
});

export default CartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;
