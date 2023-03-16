import { createSlice } from "@reduxjs/toolkit";

function generateOrderConfirmationId() {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base-36 string
  const randomChars = Math.random().toString(36).substr(2, 5); // Generate random string of 5 characters
  return `${timestamp}-${randomChars}`; // Combine timestamp and random string with a dash separator
}

const OrderDetailsSlice = createSlice({
  name: "Order Details",
  initialState: {
    orders: {}, // Initialize orders as an empty object
  },
  reducers: {
    createNewOrder(state, action) {
      // const orderId = generateOrderConfirmationId();
      let currentDate = new Date().toJSON().slice(0, 10);
      action.payload.orderDate = currentDate
      state.orders = state.orders || {};
      state.orders[action.payload.orderId] = action.payload; // Create a new key-value pair with orderId as the key and an empty object as the value
    },
  },
});

export default OrderDetailsSlice.reducer;
export const { createNewOrder } = OrderDetailsSlice.actions;
