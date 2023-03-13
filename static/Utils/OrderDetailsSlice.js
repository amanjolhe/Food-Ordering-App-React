import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


const OrderDetailsSlice = createSlice({
  name: "Order Details",
  initialState: {
  },
  reducers: {
    createNewOrder(state, action){debugger
        let currentDate = new Date().toJSON().slice(0, 10);
        action.payload.orderDate = currentDate
        state.orders[action.payload.orderId]=action.payload 
    },
  }
});
export default OrderDetailsSlice.reducer;
export const {createNewOrder} = OrderDetailsSlice.actions
