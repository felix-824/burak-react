import { createSlice } from "@reduxjs/toolkit";
import {  OrdersPageState } from "../../../lib/types/screen";

const initialState: OrdersPageState = {
    pauseOrders: [],
    processOrders: [],
    finishedOrders: [],
};

const ordersPageSlice = createSlice({
    name: "ordersPage",
    initialState,
    reducers: {
        setPausedOrders: (state, action) => {
            state.pauseOrders = action.payload;
        },
        setProcessOrders: (state, action) => {
            state.processOrders = action.payload;
        },
        setFinishedOrders: (state, action) => {
            state.finishedOrders = action.payload;
        }
    }
});

export const { setPausedOrders, setProcessOrders, setFinishedOrders } = 
ordersPageSlice.actions;

const OrdersPageReducer = ordersPageSlice.reducer;
export default OrdersPageReducer;