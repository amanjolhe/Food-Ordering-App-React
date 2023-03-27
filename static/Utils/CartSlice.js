import { createSlice } from "@reduxjs/toolkit";
const calculateCartTotal = (items) =>
  items.reduce((total, item) => total + (item.quantity * item.price) / 100, 0);

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    items: [],
    cartTotal: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.cartTotal = calculateCartTotal(state.items);
    },
    AddQuantity: function (state, action) {
      const { id } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      state.items[itemIndex].quantity += 1;
      state.cartTotal = calculateCartTotal(state.items);
    },
    removeQuantity: function (state, action) {
      const { id } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        const currentItem = state.items[itemIndex];
        if (currentItem.quantity === 1) {
          state.items.splice(itemIndex, 1);
        } else {
          state.items[itemIndex].quantity -= 1;
        }
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
export const { addToCart, AddQuantity, removeQuantity, clearCart } =
  CartSlice.actions;
